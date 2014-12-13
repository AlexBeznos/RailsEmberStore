module Products

  def add_images(img_arr)
    i = 0
    img_arr.each do |img|
      i+=1
      i == 1 ? status = true : status = false
      name = make_unique(File.extname(img.original_filename))
      disk = S3_BUCKET.objects[name]
      disk.write(img)
      disk.acl = :public_read
      Product.last.images << Image.create(path: disk.public_url.to_s, main: status)
    end
  end

  def add_categories(cat_arr)
    ids = cat_arr.split(',').map!(&:to_i)
    ids.each do |id|
      category = Category.find(id)
      self.categories << category
    end
  end

  def delete_images
    self.images.each do |image|
      img_url = URI.parse(image.path)
      S3_BUCKET.objects.delete(File.basename(uri.path))
    end
  end

  private
  def make_unique(extension)
    require 'securerandom'
    name = SecureRandom.hex(10) + extension
    dir = "app/assets/images"
    path = File.join(dir, name)
    while File.exist?(path)
      name =  SecureRandom.hex(10) + extension
      path = File.join(dir, name)
    end
    name
  end
end
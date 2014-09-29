module Products

  def add_images(img_arr)
    img_arr.each do |hash|
      name = make_unique(File.extname(hash.original_filename))
      directory = "app/assets/images"
      path = File.join(directory, name)
      File.open(path, "wb") { |f| f.write(hash.read) }
      Product.last.images << Image.create(path: '/' + File.join('assets', name))
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
      match = image.path.scan(/\w+\.\w+$/)
      path = Rails.root + 'app/assets/images/' + match[0]
      File.delete(path)
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
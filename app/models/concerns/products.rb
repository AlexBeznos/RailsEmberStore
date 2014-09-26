module Products

  def add_images(img_arr)
    require 'base64'
    img_arr.each do |hash|
      name = Base64.encode64(hash.original_filename) + File.extname(hash.original_filename)
      directory = "public/images"
      path = File.join(directory, name)
      File.open(path, "wb") { |f| f.write(hash.read) }
      Product.last.images << Image.create(path: path)
    end
  end

  def add_categories(cat_arr)
    ids = cat_arr.split(',').map!(&:to_i)
    ids.each do |id|
      category = Category.find(id)
      self.categories << category
    end
  end
end
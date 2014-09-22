module Products
  def create_product(params)
    self.add_images(params[:images]) if params[:images]
    self.add_categories(params[:categories]) if params[:categories]
  end

  def add_images(img_arr)
    img_arr.each do |hash|
      name = hash[:img].original_filename
      directory = "public/images"
      path = File.join(directory, name)
      File.open(path, "wb") { |f| f.write(hash[:img].read) }
      self.images << Image.create(path: path, main: hash[:main])
    end
  end

  def add_categories(cat_arr)
    cat_arr.each do |id|
      category = Category.find(id)
      self.categories << category
      self.deal_with_category(category.parent_category) if category.parent_category
    end
  end

  def deal_with_category(category)
    category.products << self
    self.deal_with_category(category.parent_category) if category.parent_category
  end
end
module Categories
  def destroy_subcategories
    self.subcategories.each do |category|
      category.destroy
    end
  end
end
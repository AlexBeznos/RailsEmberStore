require 'rails_helper'

RSpec.describe Product, :type => :model do
  it "should have valid fixtures" do
  	FactoryGirl.create(:product).should be_valid
  end

 it "should have images" do
 	image = FactoryGirl.build(:image, id: 2)
 	product = FactoryGirl.create(:product)
 	product.images << image
 	product.images.should include(image)
 end
end

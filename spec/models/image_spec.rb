require 'rails_helper'

RSpec.describe Image, :type => :model do
 it "should have valid fixtures" do
 	FactoryGirl.create(:image).should be_valid
 end

 it "should belongs to product" do
 	should belong_to(:product)
 end
end

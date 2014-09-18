require 'rails_helper'

RSpec.describe Order, :type => :model do
  it "should have valid fixtures" do 
  	FactoryGirl.create(:order).should be_valid
  end

  it "should have many products" do
  	should have_many(:product)
  end

  it "should validate presence of phone" do
  	should validate_presence_of(:phone)
  end
end

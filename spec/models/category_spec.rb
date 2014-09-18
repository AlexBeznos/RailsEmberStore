require 'rails_helper'

RSpec.describe Category, :type => :model do
  it "should have valid factories" do
  	FactoryGirl.create(:category).should be_valid
  end

  describe "reletions" do
  	before :each do
  	  @first = FactoryGirl.build(:category, id: 1)
	    @second = FactoryGirl.build(:category, id: 2)
      @first.subcategories << @second
    end

    it "should have correct parent category" do
      should belong_to(:parent_category)
    end

	  it "should have valid subcategories" do
	  	@first.subcategories.should include(@second)
	  end

    it "should be valid size of subcategories" do
      @first.subcategories.size.should  == 1
    end
  end
end

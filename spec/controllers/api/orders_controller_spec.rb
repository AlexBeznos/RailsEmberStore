require 'rails_helper'

describe API::OrdersController, :type => :controller do
	before :each do
		@ord1 = FactoryGirl.create(:order)
		@product1 = FactoryGirl.create(:product)
		@product2 = FactoryGirl.create(:product)
		@ord1.products << @product1
		@ord1.products << @product2
	end
	describe "index action" do
		before :each do
			get :index
		end
		it "should response with success" do
			expect(response.status).to eq 200
		end
		it "should not be empty" do
			body = JSON.parse(response.body)
			body.should_not be_empty 
		end
		it "should output correct json" do
			body = JSON.parse(response.body)
			body["orders"].each do |order|
				expect(order["id"]).to eq @ord1.id
				expect(order["product_ids"]).to match_array [@product1.id, @product2.id]
			end
		end
	end
	describe "create action" do

	end
end

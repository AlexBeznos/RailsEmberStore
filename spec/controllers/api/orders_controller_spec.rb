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
		before :each do
			params = {
				product: [@product1, @product2],
				order: {
    				name: "Hello",
    				phone: "234124",
    				addres: "sdfasdf",
    				sum: 23.43 
    			}
			}
			post :create, params
		end
		it "should response with 201 status" do
			expect(response.status).to eq 201
		end
		it "should create new order" do
			expect(Order.last.name).to eq "Hello"
		end
		it "should add products to order" do
			id_arr = Order.last.products.map {|prod| prod.id }
			expect(id_arr).to match_array [@product1.id, @product2.id]
		end
		it "should output correct json" do
			body = JSON.parse(response.body)
			orders = body["order"]
			expect(orders["id"].to_i).to eq Order.last.id
			expect(orders["product_ids"]).to match_array [@product1.id, @product2.id]
		end
	end
end

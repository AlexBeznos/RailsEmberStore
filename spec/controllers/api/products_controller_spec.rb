require 'rails_helper'

describe API::ProductsController, :type => :controller do
	describe "create action" do
		before :each do
			@cat1 = FactoryGirl.create(:category)
			@cat2 = FactoryGirl.create(:category)
			@cat3 = FactoryGirl.create(:category)
			@cat4 = FactoryGirl.create(:category)
			@cat3.subcategories << @cat2
			@cat4.subcategories << @cat3
			params = {
				optional: {
					categories: [@cat1.id, @cat2.id],
					images: [{
								img: fixture_file_upload('images/rabby1.jpg','image/jpeg'),
								main: true
							},
							{
								img: fixture_file_upload('images/rabby1.jpg','image/jpeg'),
								main: false
					        }]
				},
				product: {
					name: "iphone 4s",
					price: 4.55,
					alias: "iphone_4s"
				}
			}

			post :create, params
		end

		it "should response with 201 status" do
			expect(response.status).to eq 201
		end

		it "should write correct categories" do
			body = JSON.parse(response.body)
			expect(Product.find(body["product"]["id"]).categories).to include(@cat1, @cat2)
		end

		it "should add product to all parent categories" do
			expect(@cat3.products).to include(Product.last)
			expect(@cat4.products).to include(Product.last)
		end
 
		it "should write images" do
			body = JSON.parse(response.body)
			body["images"].should_not be_empty
		end
	end
end
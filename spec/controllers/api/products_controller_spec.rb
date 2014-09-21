require 'rails_helper'

describe API::ProductsController, :type => :controller do
	describe "create action" do
		before :each do
			@cat1 = FactoryGirl.create(:category)
			@cat2 = FactoryGirl.create(:category)
			params = {
				product: {
					name: "iphone 4s",
					price: 4.55,
					alias: "iphone_4s"
				},
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
				} 
			}

			post :create, params
		end

		it "should response with 201 status" do
			expect(response.status).to eq 201
		end

		it "should write correct categories" do
		end

		it "should write images" do
		end
	end
end
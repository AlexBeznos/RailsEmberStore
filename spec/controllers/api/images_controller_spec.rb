require 'rails_helper'

describe API::ImagesController, :type => :controller do
	describe "index action" do
		it "should output correct json" do
			FactoryGirl.create(:image, path: "Boogaga")
			get 'index', use_route: :api

			expect(response.status).to eq 200

			body = JSON.parse(response.body)
			path = body["images"].map {|m| m["path"]}
			expect(path).to match_array(["Boogaga"])
		end
	end

	describe "post action" do
		it "should create new record" do
			params = {
				id: 1,
				image: {
					path: "hello_world",
					product_id: 1
				}
			}

			request_headers = {
		      "Accept" => "application/json",
		      "Content-Type" => "application/json"
		    }

		    post :create, params, request_headers

		    expect(response.status).to eq(201)
		    expect(Image.last.path).to eq("hello_world")
		end
	end
end
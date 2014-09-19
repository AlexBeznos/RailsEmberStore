require 'rails_helper'

describe API::CategoriesController, :type => :controller do
	describe "index action" do
		it "should show index with whole json" do
			name1 = FactoryGirl.create(:category)
			name2 = FactoryGirl.create(:category)

			get 'index', use_route: :api

			expect(response.status).to eq(200)

			body = JSON.parse(response.body)
			names = body["categories"].map {|m| m["name"]}
			
			expect(names).to match_array([name1.name, name2.name])
		end
	end

	describe "show action" do
		it "should output correct show action" do
			category = FactoryGirl.create(:category)

			get :show, :id => category.id

			expect(response.status).to eq(200)
			body = JSON.parse(response.body)
			expect(body["category"]["name"]).to eq(category.name)
		end
	end

	describe "post action" do
		it "should create new record" do
			params = {
				id: 1,
				category: {
					name: "Hello world",
					alias: "badaboo",
					position: 2,
					menu: 2,
					status: true
				}
			}

			request_headers = {
		      "Accept" => "application/json",
		      "Content-Type" => "application/json"
		    }

		    post :create, params, request_headers

		    expect(response.status).to eq(201)
		    expect(Category.last.name).to eq "Hello world"
		end
	end
end

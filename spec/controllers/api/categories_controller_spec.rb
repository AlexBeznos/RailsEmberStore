require 'rails_helper'

describe API::CategoriesController, :type => :controller do
	describe "index action" do
		it "should show index with whole json" do
			FactoryGirl.create(:category)
			FactoryGirl.create(:category)

			get 'index', use_route: :api

			expect(response.status).to eq(200)

			body = JSON.parse(response.body)
			names = body["categories"].map {|m| m["id"]}
			
			expect(names).to match_array([1, 2])
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
end

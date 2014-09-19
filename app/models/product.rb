class Product < ActiveRecord::Base
	has_and_belongs_to_many :orders
	has_and_belongs_to_many :categories
	has_many :images, dependent: :destroy
	include Additions
end

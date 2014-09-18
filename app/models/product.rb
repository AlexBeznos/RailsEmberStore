class Product < ActiveRecord::Base
	has_and_belongs_to_many :documents
	has_many :images
	belongs_to :category
end

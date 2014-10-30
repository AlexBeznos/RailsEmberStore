class CategorySerializer < ApplicationSerializer
	attributes :id, :name, :alias, :parent_category_id, :position, :menu, :status
	has_many :subcategories
	has_many :products
end
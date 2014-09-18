class CategorySerializer < ApplicationSerializer
	attributes :id, :name, :alias, :parent_category, :position, :menu, :status
	has_many :products
end
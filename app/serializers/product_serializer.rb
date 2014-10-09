class ProductSerializer < ApplicationSerializer
	attributes :id, :name, :alias, :price, :active_on_storage, :on_storage, :active, :position
	has_many :images
	has_many :categories
end
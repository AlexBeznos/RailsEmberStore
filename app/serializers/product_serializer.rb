class ProductSerializer < ApplicationSerializer
	attributes :id, :name, :alias, :category_id, :price, :active_on_storage, :on_storage, :active, :position
	has_many :images
end
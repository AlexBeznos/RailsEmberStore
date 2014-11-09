class OrderSerializer < ApplicationSerializer
	attributes :id, :phone, :addres, :name, :sum, :created_at
	has_many :products
end
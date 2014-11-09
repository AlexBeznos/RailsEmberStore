class OrderSerializer < ApplicationSerializer
	attributes :id, :phone, :addres, :name, :sum, :created_at, :status
	has_many :products
end
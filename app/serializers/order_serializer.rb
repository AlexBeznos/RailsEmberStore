class OrderSerializer < ApplicationSerializer
	attributes :id, :phone, :addres, :name, :sum
	has_many :products
end
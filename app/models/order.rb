class Order < ActiveRecord::Base
	has_and_belongs_to_many :products
	validates_presence_of :phone
	include Orders
end

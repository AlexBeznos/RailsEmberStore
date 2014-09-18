class Order < ActiveRecord::Base
	has_and_belongs_to_many :product
	validates_presence_of :phone
end

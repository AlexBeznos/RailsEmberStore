module Orders
	def create_order(params)
		params.each do |id|
			self.products << Product.find(id)
		end
	end
end
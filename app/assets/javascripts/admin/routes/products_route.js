Admin.ProductsRoute = Admin.AuthenticatedRoute.extend({
	model: function() {
		return this.store.find('product')
	}
});
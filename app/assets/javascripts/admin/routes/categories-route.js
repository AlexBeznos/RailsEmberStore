Admin.CategoriesRoute = Admin.AuthenticatedRoute.extend({
	model: function() {
		return this.store.find('category')
	}
});
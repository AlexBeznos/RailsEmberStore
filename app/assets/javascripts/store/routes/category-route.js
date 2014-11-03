Store.CategoryRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('product', { alias: params.category_alias})
	}
})
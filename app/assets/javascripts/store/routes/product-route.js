Store.ProductRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('product', params.alias)
	}
})
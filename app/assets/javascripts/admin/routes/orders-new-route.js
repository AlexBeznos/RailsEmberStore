Admin.NewRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('order', {status: 'new'})
	}
})
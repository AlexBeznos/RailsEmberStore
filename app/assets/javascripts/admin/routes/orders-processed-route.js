Admin.ProcessedRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('order', {status: 'processed'})
	}
})
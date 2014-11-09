Admin.AcceptedRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('order', {status: 'accepted'})
	}
})
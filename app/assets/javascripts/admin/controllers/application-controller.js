Admin.ApplicationController = Ember.Controller.extend({
	actions: {
		logOut: function() {
			this.controllerFor('login').send('logOut')
		}
	}
});
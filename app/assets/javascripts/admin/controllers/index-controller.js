Admin.IndexController = Ember.Controller.extend({
	actions: {
		logOut: function() {
	      var self = this,
	          token = this.controllerFor('login').get('token'),
	          id = token.substr(token.length - 1);
	      $.ajax({
	        url: '/api/sessions/' + id,
	        type: 'DELETE',
	        success: function(result) {
	          localStorage.removeItem('token');
	          location.reload();
	        }
	      });
	    }
	}
});
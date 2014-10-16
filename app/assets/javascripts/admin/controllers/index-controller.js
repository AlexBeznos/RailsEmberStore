Admin.IndexController = Ember.Controller.extend({
	actions: {
		logOut: function() {
	      var self = this,
	          token = this.controllerFor('login').get('token'),
	          subtoken = this.controllerFor('login').get('subToken'),
	          id = token.substr(token.length - 1);

	      $.ajax({
	        url: '/api/sessions/' + id,
	        type: 'DELETE',
	        success: function(result) {
	          if(subtoken) {
	          	$.removeCookie('token');
	          } else {
	            localStorage.removeItem('token');
	          };
	          location.reload();
	        }
	      });
	    }
	}
});
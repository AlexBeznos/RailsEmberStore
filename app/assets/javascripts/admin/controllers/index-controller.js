Admin.IndexController = Ember.Controller.extend({
	actions: {
		logOut: function() {
	      var subtoken = this.controllerFor('login').get('subToken'),
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
Admin.IndexController = Ember.Controller.extend({
	actions: {
		logOut: function() {
	      var subtoken = this.controllerFor('login').get('subToken'),
	          token = this.controllerFor('login').get('token'),
	          id = token.substr(token.length - 1);

	      $.ajax({
	        url: '/api/administration/sessions/' + id,
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
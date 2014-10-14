Admin.LoginController = Ember.Controller.extend({
  errorMessage: null,
  resetError: function() {
    this.set('errorMessage', null)
  },
  token: localStorage.token,
  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),
	actions: {
    login: function() {
      var self = this, data = this.getProperties('email', 'password');

      $.post('/api/sessions', data).then(function(response) {
        if (response.session) {
          self.set('token', response.session.token + response.session.id);
          var attemptedTransition = self.get('attemptedTransition');
          if (attemptedTransition) {
            attemptedTransition.retry();
            self.set('attemptedTransition', null);
          }
        } else {
          self.set('errorMessage', response.errors.email);
        }
      });
	  },
    logOut: function() {
      var self = this,
          token = this.get('token'),
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
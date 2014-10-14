Admin.LoginController = Ember.Controller.extend({
  errorMessage: null,
  resetError: function() {
    this.set('errorMessage', null)
  },
  subToken: null,
  token: Ember.computed(function() {
    if(localStorage.token || this.get('subToken')) {
      if(localStorage.token) {
        return localStorage.token
      } else {
        return this.get('subToken')
      }
    } else {
      return null
    }
  }),
  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),
	actions: {
    login: function() {
      var self = this,
          remember = this.get('rememberMe'),
          data = this.getProperties('email', 'password');

      $.post('/api/sessions', data).then(function(response) {
        if (response.session) {
          if(remember) {
            self.set('token', response.session.token + response.session.id);
          } else {
            self.set('subToken',response.session.token + response.session.id);
          }
          var attemptedTransition = self.get('attemptedTransition');
          if (attemptedTransition) {
            attemptedTransition.retry();
            self.set('attemptedTransition', null);
          } else {
            self.transitionTo('index')
          }
        } else {
          self.set('errorMessage', response.errors.email);
        }
      });
	  }
  }	
});
Admin.LoginController = Ember.Controller.extend({
  errorMessage: null,
  rememberMe: false,
  resetError: function() {
    this.set('errorMessage', null)
  },
  subToken: Ember.computed(function() {
    return $.cookie('token')
  }),
  token: Ember.computed(function() {
    var subToken = this.get('subToken');
    if(localStorage.token || subToken) {
      if(localStorage.token) {
        return localStorage.token;
      } else {
        return subToken;
      }
    } else {
      return null;
    }
  }),
  tokenChanged: function() {
    var token = this.get('token'),
        subToken = this.get('subToken'),
        remember = this.get('rememberMe');

    if(remember) {
      localStorage.token = token;
    } else {
      $.cookie('token', token, { expires: 1 / 24 / 60 * 15 });
    }
  }.observes('token'),
	actions: {
    login: function() {
      var self = this,
          data = this.getProperties('email', 'password');

      $.post('/api/sessions', data).then(function(response) {
        if (response.session) {
          self.set('token', response.session.token + response.session.id);

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
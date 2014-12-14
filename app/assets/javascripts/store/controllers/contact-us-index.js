Store.ContactUsIndexController = Ember.Controller.extend({
  actions: {
    submit: function() {
      var self = this,
          json = {
            mail: {
              name: this.get('name'),
              email: this.get('email'),
              subject: this.get('subject'),
              text: this.get('message')
            }
          };

      Ember.$.ajax({
        url: 'api/store/mail',
        type: 'POST',
        data: json,
        success: function(res) {
          self.transitionTo('contact-us.sended')
        },
        error: function(res) {
          self.transitionTo('contact-us.unsended')
        }
      })
    }
  }
})
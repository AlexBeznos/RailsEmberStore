Admin.LoginRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    controller.resetError();
  }
});
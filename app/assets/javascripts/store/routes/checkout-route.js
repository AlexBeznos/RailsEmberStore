Store.CheckoutRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if (this.controllerFor('application').get('sum') == 0) {
      this.transitionTo('index');
    }
  }
})
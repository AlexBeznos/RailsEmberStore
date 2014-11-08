Store.ApplicationController = Ember.Controller.extend({
	shoppingCart: [],
  actions: {
    delete: function(product) {
      this.get('shoppingCart').removeObject(product);
    } 
  }
});
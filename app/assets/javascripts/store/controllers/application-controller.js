Store.ApplicationController = Ember.Controller.extend({
	shoppingCart: [],
  cartChanged: function() {
    console.log('boo')
  }.observes('shoppingCart')
});
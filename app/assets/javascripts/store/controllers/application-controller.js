Store.ApplicationController = Ember.Controller.extend({
	shoppingCart: [],
  sum: 0,
  actions: {
    delete: function(product) {
      this.set('sum', this.get('sum') - product.get('price'));
      this.get('shoppingCart').removeObject(product);
    } 
  }
});
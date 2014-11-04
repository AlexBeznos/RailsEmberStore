Store.ProductController = Ember.ObjectController.extend({
  actions: {
    addToCart: function() {
      var cart = this.controllerFor('application').get('shoppingCart'),
          product = this.get('model');
      if(cart.indexOf(product) > -1) { 
        alert('This product already in your card!')
      } else {
        cart.pushObject(product)
      }
    }
  }
});
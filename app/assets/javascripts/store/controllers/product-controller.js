Store.ProductController = Ember.ObjectController.extend({
  needs: 'application',
  application: Ember.computed.alias("controllers.application"),
  modelmodel: Ember.computed(function() {
    console.log(this.get('model'));
  }),
  actions: {
    addToCart: function() {
      var app = this.get('application'),
          cart = this.get('application').get('shoppingCart'),
          product = this.get('model');

      if(cart.indexOf(product) > -1) { 
        alert('This product already in your card!')
      } else {
        app.set('sum', app.get('sum') + product.get('price'));
        cart.pushObject(product)
      }
    }
  }
});
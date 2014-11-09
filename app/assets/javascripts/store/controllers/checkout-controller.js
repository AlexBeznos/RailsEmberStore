Store.CheckoutIndexController = Ember.Controller.extend({
  needs: 'application',
  application: Ember.computed.alias("controllers.application"),
  sum: function () {
    return this.get('application').get('sum');
  }.property('application.sum'),
  actions: {
    checkout: function() {
      var phone = this.get('phone'),
          name = this.get('name'),
          address = this.get('address'),
          sum = this.get('sum'),
          products = this.get('application.shoppingCart'),
          warning = [],
          self = this;

      if(Ember.isEmpty(name)) {
        warning.push('Нет имени.');
      };
      if(Ember.isEmpty(phone)) {
        warning.push('Нет номера.');
      };
      if (sum == 0) {
        warning.push('Вы не добавили не одного товара.');
      };
      if(warning.length != 0) {
        var text = '<ul>',
            i = -1;

        var adder = function(value) {
          i++;
          text = text.concat('<li>' + warning[i] + '</li>');
          if(i < warning.length - 1) {
            adder(value);
          }
        };
        adder(i);
        text = text.concat('</ul>');
        if($('#warning').children().length == 1) {
          $('#warning').children().replaceWith(text);
        } else {
          $('#warning').append(text);
        };
      };

      if(warning.length == 0) {
        var record = this.store.createRecord('order', {
          name: name,
          phone: phone,
          address: address,
          sum: sum,
          product: product_array
        });

        var product_array = [],
            productArrayFunction = function(item) {
              product_array.push(item.get('id'))
            };


        products.forEach(productArrayFunction);

        record.save().then(function(product) {
          Ember.$.ajax({
          url: 'api/store/orders',
          type: 'POST',
          data: {
                  additional: {
                    products: product_array,
                    id: product.get('id')
                  }
                },
          success: function(res) {
            self.transitionTo('checkout.success');
            self.get('application').set('shoppingCart', []);
            self.set('name', '');
            self.set('phone', '');
            self.set('address', '');
          }
          })
        })
      }
    }
  }
});
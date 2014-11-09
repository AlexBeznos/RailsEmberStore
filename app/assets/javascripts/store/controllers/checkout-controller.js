Store.CheckoutController = Ember.Controller.extend({
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
          warning = [];

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
          sum: sum
        });

        record.save()
      }
    }
  }
});
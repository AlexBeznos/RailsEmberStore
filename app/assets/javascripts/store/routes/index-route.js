Store.IndexRoute = Ember.Route.extend({
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      featured: store.find('product', {filter: 'last'}),
      randoms: store.find('product', {filter: 'random'})
    });
  }
});
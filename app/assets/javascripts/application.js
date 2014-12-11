//= require jquery
//= require bootstrap-sprockets
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./store/store


// for more details see: http://emberjs.com/guides/application/
Store = Ember.Application.create({
  rootElement: '#store',
  Resolver: Ember.DefaultResolver.extend({
    resolveTemplate: function(parsedName) {
      parsedName.fullNameWithoutType = "store/" + parsedName.fullNameWithoutType;
      return this._super(parsedName);
    }
  }),
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});
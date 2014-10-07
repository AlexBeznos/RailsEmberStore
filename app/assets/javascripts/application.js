//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./store/store


// for more details see: http://emberjs.com/guides/application/
Store = Ember.Application.create({
  rootElement: '#store',
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});
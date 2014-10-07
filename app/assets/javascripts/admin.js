//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./admin/store


// for more details see: http://emberjs.com/guides/application/
Admin = Ember.Application.create({
  rootElement: '#administration',
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});
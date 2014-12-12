//= require ./both
//= require_self
//= require ./admin/store


// for more details see: http://emberjs.com/guides/application/
Admin = Ember.Application.create({
  rootElement: '#administration',
  Resolver: Ember.DefaultResolver.extend({
    resolveTemplate: function(parsedName) {
      parsedName.fullNameWithoutType = "admin/" + parsedName.fullNameWithoutType;
      return this._super(parsedName);
    }
  }),
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});
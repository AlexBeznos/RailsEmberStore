Admin.Product = DS.Model.extend({
	name: DS.attr(),
	alias: DS.attr(),
	price: DS.attr('number'),
	active_on_storage: DS.attr('boolean'),
	on_storage: DS.attr('boolean'),
	active: DS.attr('boolean'),
	position: DS.attr('number'),
	image_ids: DS.hasMany('image', {async: true}),
	category_ids: DS.hasMany('category', {async: true})
});
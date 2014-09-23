Store.Category = DS.Model.extend({
	name: DS.attr(),
	alias: DS.attr(),
	parent_category_id: DS.attr('number'),
	position: DS.attr('number'),
	menu: DS.attr('number'),
	status: DS.attr('boolean'),
	subcategory_ids: DS.hasMany('category')
});
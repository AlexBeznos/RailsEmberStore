Admin.Order = DS.Model.extend({
	name: DS.attr(),
	phone: DS.attr(),
	addres: DS.attr(),
	sum: DS.attr('number'),
	status: DS.attr(),
	created_at: DS.attr('date'),
	product_ids: DS.hasMany('product')
})
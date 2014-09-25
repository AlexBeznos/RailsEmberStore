Store.Image = DS.Model.extend({
	path: DS.attr(),
	main: DS.attr('boolean'),
	product_id: DS.belongsTo('product')
})
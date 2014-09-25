Store.ProductsController = Ember.ArrayController.extend({
	isForm: false,
	actions: {
		openForm: function() {
			this.toggleProperty('isForm')
		}
	}
});
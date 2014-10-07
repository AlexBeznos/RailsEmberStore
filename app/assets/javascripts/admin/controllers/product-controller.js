Admin.ProductController = Ember.ObjectController.extend({
	actions: {
		destroy: function() {
			var product = this.get('model');
			product.deleteRecord();
			product.save()
		}
	}
})
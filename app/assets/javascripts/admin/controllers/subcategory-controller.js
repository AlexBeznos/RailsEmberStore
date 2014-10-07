Admin.SubcategoryController = Ember.ObjectController.extend({
	actions: {
		destroy: function() {
			var model = this.get('model');
			model.deleteRecord();
			model.save();
		}
	}
})
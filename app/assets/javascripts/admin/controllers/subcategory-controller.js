Admin.SubcategoryController = Ember.ObjectController.extend({
	parent_category: Ember.computed(function() {
		var id = this.get('parent_category_id');
		return this.store.find('category', id);
	}),
	actions: {
		destroy: function() {
			var model = this.get('model');
			model.deleteRecord();
			model.save();
		}
	}
})
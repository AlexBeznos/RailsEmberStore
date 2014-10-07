Admin.CategoryController = Ember.ObjectController.extend({
	parent: function() {
		if(this.get('parent_category_id')) {
			return false
		} else {
			return true
		}
	}.property('parent_category_id'),
	actions: {
		destroy: function() {
			var model = this.get('model');
			model.deleteRecord();
			model.save();
		}
	}
});
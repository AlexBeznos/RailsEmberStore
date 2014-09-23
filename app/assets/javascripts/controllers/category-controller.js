Store.CategoryController = Ember.ObjectController.extend({
	parent: function() {
		if(this.get('parent_category_id')) {
			return false
		} else {
			return true
		}
	}.property('parent_category_id'),
	sub: function() {
		if(this.get('subcategory_ids')) {
			return false
		} else {
			return true
		}
	}.property('subcategory_ids'),
	actions: {
		destroy: function() {
			var model = this.get('model');
			model.deleteRecord();
			model.save();
		}
	}
});
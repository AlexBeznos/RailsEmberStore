Store.CategoryController = Ember.ObjectController.extend({
	sub: function() {
		if(this.get('parent_category_id')) {
			return false
		} else {
			return true
		}
	}.property('parent_category_id')
})
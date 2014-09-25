Store.CategoriesController = Ember.ArrayController.extend({
	isForm: false,
	parentID: 0,
	actions: {
		openForm: function() {
			this.toggleProperty('isForm')
		},
		createCategory: function() {
			var controller = this,
				category = this.store.createRecord('category', {
					name: this.get('newName'),
					alias: this.get('newAlias'),
					position: this.get('newPosition'),
					menu: this.get('newMenu'),
					status: this.get('newStatus'),
					parent_category_id: this.get('parentID')
				});
				category.save().then(function() {
					controller.send('openForm');
					console.log(controller.get('parentID'));
					if(controller.get('parentID') != undefined) {
						location.reload()
					}
				})
		}
	}
});
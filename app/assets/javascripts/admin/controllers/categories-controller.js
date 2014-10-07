Admin.CategoriesController = Ember.ArrayController.extend({
	isForm: false,
	parentID: 0,
	actions: {
		openForm: function() {
			this.toggleProperty('isForm')
		},
		createCategory: function() {
			if(this.get('newName') && this.get('newAlias')) {
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
					if(controller.get('parentID') != undefined) {
						location.reload()
					} else {
						controller.set('newName', '');
						controller.set('newAlias', '');
						controller.set('newPosition', '');
						controller.set('newMenu', '');
						controller.set('newStatus', false);
					}
				})
			} else {
				$('#createCategory').children('.alert').remove('.alert');
				$('#createCategory').prepend("<div class='alert alert-danger' role='alert'>Неможливо створити новий документ без назви!</div>");
			}

		}
	}
});
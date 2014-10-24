Admin.CategoriesController = Ember.ArrayController.extend({
	isForm: false,
	parentID: 0,
	actions: {
		openForm: function() {
			this.toggleProperty('isForm')
		},
		createCategory: function() {
			if(!Ember.isEmpty(this.get('newName')) && !Ember.isEmpty(this.get('newAlias'))) {
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
				var controller = this,
					warning = [];

				if(Ember.isEmpty(this.get('newName'))) {
					warning.push('Нет названия продукта.');
				};
				if(Ember.isEmpty(this.get('newAlias'))) {
					warning.push('Нет алиаса продукта.');
				};

				if(warning.length != 0) {
					var text = '<ul>',
					i = -1;

					var adder = function(value) {
						i++;
						text = text.concat('<li>' + warning[i] + '</li>');
						if(i < warning.length - 1) {
						adder(value);
						}
					};
					adder(i);
					text = text.concat('</ul>');

					if($('#warning').children().length == 1) {
						$('#warning').children().replaceWith(text);
					} else {
						$('#warning').append(text);
					};
				};
			}

		}
	}
});
Admin.AddProductController = Ember.Controller.extend(DropletController, {
	mimeTypes: ["image/gif", "image/jpeg", "image/pjpeg", 'image/png'],
	didUploadFiles: function(response) {
        console.log(response);
  },
  categories: function() {
    return this.store.find('category')
  }.property('store'),
  proxiedCategory: Ember.computed.map('categories', function(categories) {
    {
      return Ember.ObjectProxy.create({
        content: categories,
        checked: false
      });
    }
  }),
  proxiedCheckedCategory: Ember.computed.filterBy('proxiedCategory', 'checked', true),
  proxiedItems: Ember.computed.mapBy('proxiedCheckedCategory', 'content.id'),
  addImages: false,
	actions: {
		submit: function() {
			var defaultOptions = {
                fileSizeHeader: true,
                useArray: true
            },
            product = this.store.createRecord('product', {
                name: this.get('newName'),
                alias: this.get('newAlias'),
                price: this.get('newPrice')
            }),
            controller = this;

        if (this.get('validFiles').length === 0) {
            return false;
        };
        
        this.set('uploadStatus.uploading', true);
        this.set('uploadStatus.error', false);


        var formDataImages = new FormData(document.getElementById("addProduct"));
        var fieldName = 'images[]';
        Ember.EnumerableUtils.forEach(this.get('validFiles'), function(file) {
            formDataImages.append(fieldName, file.file);
        }, this);


        var formDataCategories = new FormData();
        formDataCategories.append("categories", this.get('proxiedItems')); 
        
        product.save().then(function(product) {
          Ember.$.ajax({
          url: 'api/administration/products',
          type: 'POST',
          data: formDataImages,
          processData: false,
          contentType: false,
          success: function(res) {
            Ember.$.ajax({
              url: 'api/administration/products',
              type: 'POST',
              data: formDataCategories,
              processData: false,
              contentType: false,
              success: function(res) {
                location.reload();
              },
              error: function(res) {
                console.log(res)
              }
            })
          },
          error: function(res) {
            console.log(res)
          }
          })
      });
		},
    moreImages: function() {
      this.toggleProperty('addImages');
      this.send('clearAllFiles');
    }
	}
})
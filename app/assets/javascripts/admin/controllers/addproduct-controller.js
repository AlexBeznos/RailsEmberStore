Admin.AddProductController = Ember.Controller.extend(DropletController, {	mimeTypes: ["image/gif", "image/jpeg", "image/pjpeg", 'image/png'],
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
            controller = this
            warning = [];

        if(this.get('newName') == undefined) {
          warning.push('Нету названия продукта.');
        };
        if(this.get('newAlias') == undefined) {
          warning.push('Нету алиаса продукта.');
        };
        if (this.get('validFiles').length === 0) {
          warning.push('Вы не добавили не одной картинки.');
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
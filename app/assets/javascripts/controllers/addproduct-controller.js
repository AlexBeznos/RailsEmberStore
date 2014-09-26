Store.AddProductController = Ember.Controller.extend(DropletController, {
	useArray: true,
	dropletUrl: 'api/products',
	mimeTypes: ["image/gif", "image/jpeg", "image/pjpeg", 'image/png'],
	didUploadFiles: function(response) {
        console.log(response);
    },
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
            });


        if (this.get('validFiles').length === 0) {
            return false;
        }
        
        this.set('uploadStatus.uploading', true);
        this.set('uploadStatus.error', false);
        var formData = new FormData();
        var fieldName = 'images[]';
        Ember.EnumerableUtils.forEach(this.get('validFiles'), function(file) {
            formData.append(fieldName, file.file);
        }, this);
        
        product.save().then(function() {
          Ember.$.ajax({
          url: 'api/products',
          type: 'POST',
          data: formData,
          processData: false,
          contentType: false,
          success: function(res) {
            console.log('success')
          },
          error: function(res) {
          }
          })
      });
		}
	}
})
// For more information see: http://emberjs.com/guides/routing/

Admin.Router.map(function() {
	this.resource('categories'),
	this.resource('products'),
  this.route('login')
});

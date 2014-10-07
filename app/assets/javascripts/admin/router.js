// For more information see: http://emberjs.com/guides/routing/

Admin.Router.map(function() {
	this.route('store', { path: '/'}),
	this.route('administration', function() {
		this.resource('categories'),
		this.resource('products')
	})
});

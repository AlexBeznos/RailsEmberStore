// For more information see: http://emberjs.com/guides/routing/

Store.Router.map(function() {
	this.route('store', { path: '/'}),
	this.route('administration', function() {
		this.resource('categories'),
		this.resource('products')
	})
});

// For more information see: http://emberjs.com/guides/routing/

Store.Router.map(function() {
	this.route('index', { path: '/'}),
	this.resource('categories'),
	this.resource('products')
  // this.resource('posts');
});

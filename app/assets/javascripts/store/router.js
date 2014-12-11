// For more information see: http://emberjs.com/guides/routing/

Store.Router.map(function() {
	this.route('index', { path: '/'}),
	this.resource('category', {path: 'category/:category_alias'}),
	this.resource('product', {path: 'product/:alias'}),
  this.route('contact-us', function() {
    this.route('sended')
  }),
	this.route('checkout', function() {
		this.route('index'),
		this.route('success')
	})
});
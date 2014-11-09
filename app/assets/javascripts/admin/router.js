// For more information see: http://emberjs.com/guides/routing/

Admin.Router.map(function() {
	this.route('index', {path: '/'}, function() {
		this.resource('orders', {path: '/'}, function() {
			this.resource('shipped'),
			this.resource('processed'),
			this.resource('new')
		}),
		this.resource('categories'),
		this.resource('products')
	}),
  	this.route('login')
});

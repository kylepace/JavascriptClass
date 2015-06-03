var Product = require('../models/product'),
	Order = require('../models/order');

function randomError(req, res, next) {
	var errorProb = Math.random();
	if (errorProb > 0.80) {
		next(new Error('Random error, sorry.'));
	} else {
		next();
	}
}

function init(app) {
	app.get('/products', randomError, function (req, res, next) {
		var query = { };
		if (req.query && req.query.search) {
			query.$or = [
				{ name: new RegExp(req.query.search, "i") },
				{ description: new RegExp(req.query.search, "i") }
			];
		}

		if (req.query && req.query.category) {
			query.categories = req.query.category;
		}

		Product.find(query).sort('name').limit(30).exec(function (err, products) {
			if (err) {
				res.status(500).send('Server error finding products, please try again.');
			}

			res.send(products);
		});
	});

	app.post('/products', function (req, res, next) {
		var product = new Product(req.body);
		product.save(function (err, product) {
			if (err) {
				return next(err);
			} else {
				return res.status(201).send(product);
			}
		});
	});

	app.get('/categories', randomError, function (req, res, next) {
		Product.distinct('categories', function (err, categories) {
			if (err) {
				return next(err);
			}
			res.send(categories);
		});
	});

	app.post('/order', randomError, function (req, res, next) {
		var order = new Order(req.body);
		order.save(function (err, order) {
			if (err) {
				return next(err);
			} else {
				return res.status(201).send(order);
			}
		});
	});

	app.get('/order/:id', randomError, function (req, res, next) {
		Order.findOne({ _id: req.params.id }, function (err, order) {
			if (err) {
				return next(err);
			}
			if (!order) {
				return res.status(404).send('Order not found');
			}
			res.send(order);
		});
	});

	app.put('/order/:id', randomError, function (req, res, next) {
		Order.findOne({ _id: req.params.id }, function (err, order) {
			if (err) {
				return next(err);
			}
			if (!order) {
				return res.status(404).send('Order not found');
			}

			order.items = req.body.items;
			order.markModified('items');
			order.save(function (err) {
				if (err) {
					return next(err);
				}
				res.send(order);
			});
		});
	});
}

module.exports = init;

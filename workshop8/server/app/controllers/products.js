var Product = require('../models/product');

function randomError(req, res, next) {
	var errorProb = Math.random();
	if (errorProb > 0.75) {
		console.log(errorProb);
		// replace this with a genuine error
		next();
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
}

module.exports = init;

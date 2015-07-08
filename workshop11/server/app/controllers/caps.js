var _ = require('lodash'),
	Cap = require('../models/cap');

function init(app) {
	app.get('/caps', function (req, res, next) {
		Cap.find(function (err, caps) {
			if (err) {
				return res.status(500).send(err);
			}
			res.send(_.map(caps, function (cap) {
				return { id: cap._id, type: cap.type };
			}));
		});
	});

	app.get('/caps/:id/colors', function (req, res, next) {
		Cap.findOne({ _id: req.params.id }, function (err, cap) {
			if (err) {
				return res.status(500).send(err);
			}
			res.send(cap.colors);
		});
	});

	app.get('/caps/:id/sizes', function (req, res, next) {
		Cap.findOne({ _id: req.params.id }, function (err, cap) {
			if (err) {
				return res.status(500).send(err);
			}
			res.send(cap.sizes);
		});
	});

	app.get('/caps/:id/logos', function (req, res, next) {
		Cap.findOne({ _id: req.params.id }, function (err, cap) {
			if (err) {
				return res.status(500).send(err);
			}
			res.send(cap.logos);
		});
	});

	app.post('/caps', function (req, res, next) {
		var cap = new Cap(res.body);
		cap.save(function (err, newCap) {
			if (err) {
				return res.status(400).send(err);
			}
			res.status(201).send(newCap);
		});
	});

	app.post('/caporder', function (req, res, next) {
		Cap.findOne({ type: req.body.type }, function (err, cap) {
			if (err) {
				return res.status(500).send(err);
			}
			if (!cap) {
				return res.status(400).send('Could not find a cap with that type.');
			}
			if (!req.body.size) {
				return res.status(400).send('You need to specify a cap size.');
			}
			if (!req.body.color) {
				return res.status(400).send('You need to specify a cap color.');
			}

			var size = _.find(cap.sizes, function (size) {
				return size.toLowerCase() === req.body.size.toLowerCase();
			});
			if (!size) {
				return res.status(400).send('Could not find cap size on this cap type.');
			}

			var color = _.find(cap.colors, function (color) {
				return color.toLowerCase() === req.body.color.toLowerCase();
			});
			if (!color) {
				return res.status(400).send('Could not find cap color on this cap type.');
			}

			res.status(201).send(req.body);
		});
	});
}

module.exports = init;

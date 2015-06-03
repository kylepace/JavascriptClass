'use strict';

var mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment');

var schema = new mongoose.Schema({
	items: [{
    	name: { type: 'String' },
		description: { type: 'String' },
		image: { type: 'String' },
		price: { type: 'Number' },
    	categories: [{ type: 'String' }]
	}]
});

schema.plugin(autoIncrement.plugin, 'Order');
module.exports = mongoose.model('Order', schema);

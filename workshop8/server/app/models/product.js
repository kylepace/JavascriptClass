'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: 'String', required: true },
	description: { type: 'String' },
	image: { type: 'String', required: true },
	price: { type: 'Number', required: true },
    categories: [{ type: 'String' }]
});

module.exports = mongoose.model('Product', schema);

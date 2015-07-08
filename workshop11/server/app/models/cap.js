'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    type: { type: 'String', required: true, unique: true },
	colors: [{ type: 'String' }],
	sizes: [{ type: 'String' }],
	logos: [{ type: 'String' }],
	price: { type: Number },
	image: { type: 'String' }
});

module.exports = mongoose.model('Cap', schema);

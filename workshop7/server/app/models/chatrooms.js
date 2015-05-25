'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: 'String', unique: true },
    lowerName: { type: 'String', unique: true },
    posts: [{
        username: { type: 'String', required: true },
        text: { type: 'String', required: true },
        postedOn: { type: 'Date', required: true }
    }]
});

module.exports = mongoose.model('ChatRoom', schema);

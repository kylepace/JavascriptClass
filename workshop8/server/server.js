var newrelic = require('newrelic'),
    express = require('express'),
    app = express(),
    engine = require('ejs-locals'),
	cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
	_ = require('lodash'),
    autoIncrement = require('mongoose-auto-increment'),
	ChatRoom = require('./app/models/chatrooms');

app.use(cors());

app.engine('ejs', engine);
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/status', function (req, res) {
    res.send('success');
});

app.get('/chatroom', function (req, res) {
	var query = { };
	if (req.query && req.query.name) {
		query.name = new RegExp(req.query.name, "i");
	}

	ChatRoom.find(query).sort('name').limit(30).exec(function (err, rooms) {
		if (err) {
			res.status(500).send('Server error finding rooms, please try again.');
		}

		res.send(_.map(rooms, function (room) {
			return { _id: room._id, name: room.name };
		}));
	});
});

app.get('/chatroom/:id', function (req, res) {
	ChatRoom.findOne({ _id: req.params.id }, function (err, room) {
		if (err) {
			res.status(500).send('Server error finding rooms, please try again.');
		}
		if (!room) {
			res.status(404).send('Could not find a chatroom with that id.');
		}
		res.send(room);
	});
});

app.post('/chatroom', function (req, res) {
	if (!req.body || !req.body.name) {
		return res.status(400).send('No room name specified');
	}

	ChatRoom.findOne({ lowerName: req.body.name.toLowerCase() }, function (err, foundRoom) {
		if (err) {
			return res.status(500).send('Server error finding chat rooms, please try again.');
		}

		if (foundRoom) {
			return res.status(409).send('There is already a chat room with that name.');
		}

		var chatRoom = new ChatRoom({ name: req.body.name, lowerName: req.body.name.toLowerCase() });
		chatRoom.save(function (err) {
			if (err) {
				return res.status(500).send('Server error saving chat room, please try again.');
			}

			res.status(201).send(chatRoom);
		});
	});
});

app.post('/chatroom/:id/post', function (req, res) {
	if (!req.body) {
		return res.status(400).send('No request body defined.');
	}
	if (!req.body.username) {
		return res.status(400).send('No username supplied.');
	}
	if (!req.body.text) {
		return res.status(400).send('No text supplied.');
	}
	if (req.body.text && req.body.text.length > 250) {
		return res.status(400).send('The text length must be less than 250 characters.');
	}

	ChatRoom.findOne({ _id: req.params.id }, function (err, room) {
		if (err) {
			return res.status(500).send('Server error finding chat room, please try again.');
		}

		if (!room) {
			return res.status(404).send('Could not find a room with that id.');
		}

		room.posts.push({
			username: req.body.username,
			text: req.body.text,
			postedOn: new Date()
		});

		room.save(function (err) {
			if (err) {
				return res.status(500).send('Server error updating room, please try again.');
			}
			return res.status(201).send('success');
		});
	});
});

var connectionString = 'localhost/mainstreet-chatroom';
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_URL + 'mainstreetchat';
}
mongoose.connect(connectionString);

var db = mongoose.connection;
autoIncrement.initialize(db);
require('./app/controllers/products')(app);
db.once('open', function() {
    var serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8080;
    var serverIpAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
    console.log('Finished connecting to database...');
    app.listen(serverPort, serverIpAddress, function () {
        console.log('Listening on port: ' + serverPort);
    });
});

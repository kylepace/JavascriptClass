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

app.get('/firstAjax', function (req, res) {
    res.status(200).send('<div><h3>Very first ajax call.</h3><p>This is some markup to get you going.</p></div>');
});

app.post('/article', function (req, res) {
    if (!req.body.title) {
        return res.status(404).send('No title specified.');
    }

    if (!req.body.content) {
        return res.status(404).send('No content specified.');
    }
    var article = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        content: req.body.content
    };
    res.status(201).send(article);
});

app.get('/add', function (req, res) {
    if (!req.query.firstNumber) {
        return res.status(404).send('No first number to add.');
    }
    if (!req.query.secondNumber) {
        return res.status(404).send('No second number to add.');
    }

    return res.status(200).send((parseInt(req.query.firstNumber) + parseInt(req.query.secondNumber)).toString());
});

function getBooks(search) {
    var books = [
        {
            title: 'Foundation',
            publishedOn: '1951',
            thumbnail: 'https://d.gr-assets.com/books/1417900846l/29579.jpg',
            link: 'https://www.goodreads.com/book/show/29579.Foundation?from_choice=false&from_home_module=false',
            author: {
                firstName: 'Isaac',
                lastName: 'Asimov'
            }
        },
        {
            title: 'Through the Woods',
            publishedOn: '2014',
            thumbnail: 'https://d.gr-assets.com/books/1414845473l/18659623.jpg',
            link: 'https://www.goodreads.com/book/show/18659623-through-the-woods',
            author: {
                firstName: 'Emily',
                lastName: 'Carroll'
            }
        },
        {
            title: 'The Savage Detectives',
            publishedOn: '1998',
            thumbnail: 'https://d.gr-assets.com/books/1342651149l/63033.jpg',
            link: 'https://www.goodreads.com/book/show/63033.The_Savage_Detectives',
            author: {
                firstName: 'Roberto',
                lastName: 'Bolano'
            }
        },
        {
            title: 'Functional Programming in Scala',
            publishedOn: '2013',
            thumbnail: 'https://d.gr-assets.com/books/1331755294l/13541678.jpg',
            link: 'https://www.goodreads.com/book/show/13541678-functional-programming-in-scala',
            author: {
                firstName: 'Rúnar',
                lastName: 'Bjarnason'
            }
        },
        {
            title: 'The Martian',
            publishedOn: '2012',
            thumbnail: 'https://d.gr-assets.com/books/1413706054l/18007564.jpg',
            link: 'https://www.goodreads.com/book/show/18007564-the-martian',
            author: {
                firstName: 'Andy',
                lastName: 'Weir'
            }
        },
        {
            title: 'A Confederacy of Dunces',
            publishedOn: '1980',
            thumbnail: 'https://d.gr-assets.com/books/1386190501l/4422.jpg',
            link: 'https://www.goodreads.com/book/show/4422.A_Confederacy_of_Dunces',
            author: {
                firstName: 'John Kennedy',
                lastName: 'Toole'
            }
        },
        {
            title: 'Cat\'s Cradle',
            publishedOn: '1963',
            thumbnail: 'https://d.gr-assets.com/books/1327867150l/135479.jpg',
            link: 'https://www.goodreads.com/book/show/135479.Cat_s_Cradle',
            author: {
                firstName: 'Kurt',
                lastName: 'Vonnegut'
            }
        },
        {
            title: 'Tenth of December: Stories',
            publishedOn: '2013',
            thumbnail: 'https://d.gr-assets.com/books/1388968585l/18310275.jpg',
            link: 'https://www.goodreads.com/book/show/18310275-tenth-of-december',
            author: {
                firstName: 'George',
                lastName: 'Saunders'
            }
        }
    ];

    if (search && search.length > 0) {
        books = _.filter(books, function (book) {
            return _.startsWith(book.title, search);
        });
    }

    return books;
}

app.get('/books', function (req, res) {
    return res.status(200).send(getBooks(req.query.search));
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

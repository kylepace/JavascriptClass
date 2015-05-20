var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jquery', function(req, res, next) {
  res.render('jquery', { title: 'Express' });
});

router.get('/select', function(req, res, next) {
  res.render('select', { title: 'Express' });
});

router.get('/selectlist', function(req, res, next) {
  setTimeout(function () {
      res.render('selectlist', { title: 'Express' });
  }, 1000);
});

/* GET home page. */
router.get('/peopleHtml', function(req, res, next) {
  res.render('people');
});

router.get('/peopleFail', function(req, res, next) {
  var number = Math.random();
  if (number >= 0.5) {
      res.render('people');
  } else {
    res.send(500, 'There was an error in the server.');
  }
});

router.get('/people', function (req, res) {
  var people = [];

  people.push({ firstName: 'Kyle', lastName: 'Pace' });

  people.push({ firstName: 'Yannick', lastName: 'Tessier' });

  people.push({ firstName: 'Roberto', lastName: 'Clemente' });

  people.push({ firstName: 'Babe', lastName: 'Ruth' });

  res.send(people);
});

module.exports = router;

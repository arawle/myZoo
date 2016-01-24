var db = require('../models/index');

app.get('/', function (req, res) {
  res.redirect('/zoos');
});

require('./animals');
require('./zoos');

app.get('*', function (req, res) {
  res.render('errors/404');
});
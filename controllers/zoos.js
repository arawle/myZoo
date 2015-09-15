var db = require('../models/index');

app.get('/zoos', function (req, res) {
  db.Zoo.find({}, function (err, data) {
    res.render('zoo/index', {zoo: data});
  });
});

app.get('/zoos/new', function (req, res) {
  res.render('zoo/newZoo');
});

app.post('/zoos', function (req, res) {
  db.Zoo.create(req.body, function (err, data) {
    res.redirect('/zoos');
  });
});

app.get('/zoos/:id/edit', function (req, res) {
  db.Zoo.findById(req.params.id, function (err, zoo) {
    res.render('zoo/editZoo', {zoo: zoo});
  });
});

app.get('/zoos/:id', function (req, res) {
  db.Zoo.findById(req.params.id, function (err, zoo) {
    console.log(zoo)
    db.Animal.find({
      _id: {$in: zoo.animals}
    },
    function (err, animals) {
      res.render('zoo/zooShow', {zoo: zoo, animals:animals});
    });
  });
});


app.put('/zoos/:id', function (req, res) {
  db.Zoo.findByIdAndUpdate(req.params.id, req.body, function (err, zoo) {
    if (err) {
      res.render('zoos/edit');
    } else {
      res.redirect('/zoos')
    }
  });
});

app.delete('/zoos/:id', function (req, res) {
  db.Zoo.findByIdAndRemove(req.params.id, function (err, zoo) {
    if (err) {
      res.render('zoos/zooShow');
    } else {
      res.send('zoos');
    }
  });
});

















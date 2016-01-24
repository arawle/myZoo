var db = require('../models/index');

app.get('/zoos/:zoo_id/animals', function (req, res) {
  db.Zoo.findById(req.params.zoo_id).populate('animals').exec( function (err, data) {
    res.render('animals/index', {zoo: data});
  });
});

app.get('/zoos/:zoo_id/animals/new', function (req, res) {
  db.Zoo.findById(req.params.zoo_id, function (err, data) {
    res.render('animals/newAnimal', {zoo: data});
  });
});

app.post('/zoos/:zoo_id/animals', function (req, res) {
  db.Animal.create(req.body, function (err, animal) {
    if (err) {
      console.log(err);
      res.redirect('animals/new');
    } else {
      db.Zoo.findById(req.params.zoo_id, function (err, zoo) {
        zoo.animals.push(animal);
        animal.zoo = zoo._id;
        animal.save();
        zoo.save();
        res.redirect('/zoos/'+req.params.zoo_id+'/animals');
      });
    }
  });
});

app.get('/zoos/:zoo_id/animals/:id', function (req, res) {
  db.Animal.findById(req.params.id)
  .populate('zoo')
  .exec( function (err, animal) {
    res.render('animals/animalShow', {animal: animal});
  });
});

app.get('/zoos/:zoo_id/animals/:id/edit', function (req, res) {
  db.Animal.findById(req.params.id)
  .populate('zoo')
  .exec( function (err, data) {
    res.render('animals/editAnimal', {animal: data});
  });
});

app.put('/zoos/:zoo_id/animals/:id', function (req, res) {
  db.Animal.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) {
      res.render('animals/edit');
    } else {
      res.redirect('/zoos/'+ req.params.zoo_id + '/animals');
    }
  });
});

app.delete('/zoos/:zoo_id/animals/:id', function (req, res) {
  db.Animal.findByIdAndRemove(req.params.id, req.body, function (err, animal) {
    if (err) {
      console.log(err);
      res.render('animals/edit');
    } else {
      res.send('error');
    }
  });
});
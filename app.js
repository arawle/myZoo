// required stuff
var express = require('express');
var bodyParser = require("body-parser");
var request = require('request');
var methodOverride = require('method-override');
var _ = require("underscore");
var json = require('express-json');

loginMiddleware = require('./middleware/loginHelper');
routeMiddleware = require('./middleware/routeHelper');
session = require('cookie-session')
app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.use(session({
  maxAge: 36000000,
  secret: 'somethinghere',
  name: 'oatmeal'
}));

app.use(loginMiddleware);

require('./controllers');

// where to see my library
app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});






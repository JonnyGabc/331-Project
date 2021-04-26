var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dataBaseConnection = require('./routes/getAirplaneData')
const bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const getAirplaneData = require('./routes/getAirplaneData');
const getAirportData = require('./routes/getAirportData');
const getAirplaneByFlightPlan = require('./routes/getAirplaneByFlightPlan');
const getAirportByName = require('./routes/getAirportByName');
const updateAirplane = require('./routes/updateAirplane');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));



app.use('/', indexRouter);


app.get('/db', function (req, res) {
  getAirplaneData()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})

app.get('/airportData', function (req, res) {
  getAirportData()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})


app.post('/airportByName', function (req, res) {
  getAirportByName(req.body.airportName)
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})

app.post('/airplaneByFlightPlan', function (req, res) {
  console.log(req.body.flightPlan)
  getAirplaneByFlightPlan(req.body.flightPlan)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})

app.post('/updateAirplane', function (req, res) {
  updateAirplane(req,req.body.flightPlan)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index2.html'));
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080...');
});

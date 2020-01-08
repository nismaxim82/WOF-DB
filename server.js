var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Fish = require('./api/models/fishModel.ts'),
  bodyParser = require('body-parser')
  ;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://maxim:<password>@wof-db-3o8su.mongodb.net/test?retryWrites=true&w=majority');

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
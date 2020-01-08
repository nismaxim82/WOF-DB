import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Fish } from './api/models/fishModel';

const fishModel = new Fish();

const app = express();
const port = process.env.PORT || 3001;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://maxim:Qwe12345@wof-db-3o8su.mongodb.net/test?retryWrites=true&w=majority', {
  useMongoClient: true,
});


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
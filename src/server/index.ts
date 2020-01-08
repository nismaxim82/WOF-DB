import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { FishRoutes } from './api/routes/fishRoutes';

const app = express();
const port = process.env.PORT || 3001;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb+srv://maxim:Qwe12345@wof-db-3o8su.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB server connect"))
  .catch(e => console.log("DB error", e));;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

new FishRoutes(app);

app.listen(port);

console.log('Server started at http://localhost:' + port + '/');
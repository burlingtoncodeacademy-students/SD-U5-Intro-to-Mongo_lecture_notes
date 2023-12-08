require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose'); // used from node_modules
const MONGODB = process.env.MONGODB; // Connection variable from .env

mongoose.connect(`${MONGODB}/movies`) // connection middleware. Est. route and defining our Collection that we are targeting.

const db = mongoose.connection; // event listener to check if connected.
db.once('open', () => console.log(`Connected: ${MONGODB}`)); 
// event listener to check connection.

//* Imports
const userController = require('./controllers/user.controller');

//* Middleware
app.use(express.json());

//* Routes
app.use('/user', userController);

app.listen(PORT, () => console.log(`Movie Server: ${PORT}`));
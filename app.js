const express = require('express');
const app = express();
const PORT = 4005;

//* Imports
const userController = require('./controllers/user.controller');

//* Middleware

//* Routes
app.use('/user', userController);

app.listen(PORT, () => console.log(`Movie Server: ${PORT}`));
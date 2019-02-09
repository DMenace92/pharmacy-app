const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: true }));

Users = require('./models/users')
Notes = require('./models/notes')
var routes_setter = require('./config/routes.js');
routes_setter(app);
app.listen(8000);
console.log('Running on port 8000!!!')

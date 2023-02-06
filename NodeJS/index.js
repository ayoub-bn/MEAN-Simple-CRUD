const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')



const {mongoose} = require('./db.js');
var controller = require ('./controllers/controller.js');

var app = express();
app.use(bodyparser.json())
app.use(cors({origin : 'http://localhost:4200'}))

app.listen(3000, () => console.log('started at port : 3000'))

app.use('/users/',controller)



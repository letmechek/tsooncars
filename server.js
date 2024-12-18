const express = require('express');
const cors = require('cors')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const ensureLoggedIn = require('./config/ensureLoggedIn');


require('dotenv').config()
require('./config/database')

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'))

app.use('/api/users', require('./routes/api/users'))

app.use('/api/vehicles', require('./routes/api/vehicles'))
app.use('/api/category/model', require('./routes/api/vehicleCategories'))
app.use('/api/orders', require('./routes/api/orders'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});
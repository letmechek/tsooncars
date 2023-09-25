const mongoose = require('mongoose');
require('./category');
const vehicleSchema = require('./vehicleSchema');



module.exports = mongoose.model('Vehicle', vehicleSchema)
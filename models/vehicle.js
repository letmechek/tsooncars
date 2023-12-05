const mongoose = require('mongoose');
require('./vehicleCategory');
const vehicleSchema = require('./vehicleSchema');



module.exports = mongoose.model('Vehicle', vehicleSchema)
const mongoose = require('mongoose');
require('./babyCategory');
const babyProductSchema = require('./babyProductSchema');



module.exports = mongoose.model('BabyProduct', babyProductSchema)
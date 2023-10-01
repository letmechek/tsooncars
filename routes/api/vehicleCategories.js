const express = require('express');
const router = express.Router();
const vehicleCategoriesCtrl = require('../../controllers/api/vehicleCategories.js')

router.get('/', vehicleCategoriesCtrl.index);

module.exports = router;
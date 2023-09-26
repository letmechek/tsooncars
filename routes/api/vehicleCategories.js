const express = require('express');
const router = express.Router();
const vehicleCategoriesCtrl = require('../../controllers/api/vehicleCategories')

router.get('/', vehicleCategoriesCtrl.index);
// router.get('/:id', vehiclesCtrl.show);

module.exports = router;
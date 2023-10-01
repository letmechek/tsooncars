const express = require('express');
const router = express.Router();
const vehiclesCtrl = require('../../controllers/api/vehicles')

router.get('/', vehiclesCtrl.index);
router.get('/model/:modelId', vehiclesCtrl.getVehiclesByModel);
router.get('/:id', vehiclesCtrl.show);

module.exports = router;
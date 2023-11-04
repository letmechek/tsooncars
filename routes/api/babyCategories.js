const express = require('express');
const router = express.Router();
const babyCategoriesCtrl = require('../../controllers/api/babyCategories.js')

router.get('/', babyCategoriesCtrl.index);

module.exports = router;
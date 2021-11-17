const express = require('express');
const router = express.Router();

const flowerCtrl = require('../controllers/flowerStuff');

router.get('/', flowerCtrl.getAllFlowers);

module.exports = router;
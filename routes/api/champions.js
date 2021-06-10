const express = require('express')
const router = express.Router()
const championsCtrl = require('../../controllers/champions')

router.get('/', championsCtrl.index)
router.post('/', championsCtrl.create)

module.exports = router
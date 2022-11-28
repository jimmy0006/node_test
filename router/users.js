const express = require('express')
const User = require('../schemas/user')
const {findAll, postOne} = require('./controller')

const router = express.Router();

router.route('/')
.get(findAll)
.post(postOne);

module.exports = router;
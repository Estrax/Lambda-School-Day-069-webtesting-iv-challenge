const router = require('express').Router();
const resources = require('./resources');

router.use('/', resources);

module.exports = router;
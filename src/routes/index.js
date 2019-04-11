const router = require('express').Router();
const resources = require('./resources');

router.use('/resources', resources);

module.exports = router;
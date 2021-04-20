var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/admiin-users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//users.js Rasheed Adeyemi 301308878 19/02/2023
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;

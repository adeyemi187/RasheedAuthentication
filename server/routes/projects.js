//projects.js Rasheed Adeyemi 301308878 19/02/2023
var express = require('express');
var router = express.Router();

/* GET Projects page. */
router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
  });

module.exports = router;
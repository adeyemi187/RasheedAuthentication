//contact.js Rasheed Adeyemi 301308878 19/02/2023

var express = require('express');
var router = express.Router();

/* GET Contact us page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
  });
  
module.exports = router;
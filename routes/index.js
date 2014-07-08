var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Wordcup - Faça uma promessa que vai fazer a diferença e ajude o Brasil a ganhar muito mais que uma taça' });
});

module.exports = router;

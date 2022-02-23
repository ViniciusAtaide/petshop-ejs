var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/sobre', function(req, res) {
  res.render('sobre');
});

router.get('/cadastro', function(req, res) {
  res.render('cadastro');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/servicos', function(req, res) {
  res.render('servicos');
});

router.get('/contato', function(req, res) {
  res.render('contato');
});

module.exports = router;

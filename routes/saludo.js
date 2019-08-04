var express = require('express');
var router = express.Router();

/* GET users listing. */

function retornaSaludo(){
  return "hola que tal";
}
router.get('/', function(req, res, next) {
  let usuarios = retornaSaludo();
  res.send(usuarios);
});

module.exports = router;

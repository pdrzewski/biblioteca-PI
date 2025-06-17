var express = require("express");
var router = express.Router();

var bibliotecaController = require("../controllers/bibliotecaController");

router.get("/:empresaId", function (req, res) {
  bibliotecaController.buscarBibliotecaPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  bibliotecaController.cadastrar(req, res);
})

module.exports = router;
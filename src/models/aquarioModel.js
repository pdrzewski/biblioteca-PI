var database = require("../database/config");

function buscarBibliotecasPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM biblioteca b
                      INNER JOIN arquivo a 
                      WHERE a.fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(descricao, endereco) {
  
  var instrucaoSql = `INSERT INTO (descricao, endereco) aquario VALUES (${descricao}, ${endereco})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarBibliotecasPorEmpresa,
  cadastrar
}
import * as client from './service/client.service';

async function testeUpsert () {
  let query = {
    "match": {
      "apelido": {
        "query": "Pelé"
      }
    }
  };

  let indice = 'futebol';
  let tipo = 'jogador';
  let id = "zxp41"

  let response = await client.upsert( query, indice, id, tipo );
  console.log( response );
}

testeUpsert();
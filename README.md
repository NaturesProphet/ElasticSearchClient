# ELASTICSEARCH CLIENT
Cliente simples para inserções e consultas básicas no ElasticSearch

## Teste local
você pode subir um container docker do ElasticSearch local para testar o serviço, com o comando
```bash
npm run elasticsearch
```

## Utilização
copie o código da pasta src/service para seu projeto, aponte o endereço do servidor ElasticSearch (preferencialmente via env) e utilize o serviço conforme documentado abaixo


### Inserções (salvar documentos indexando-os)
Exemplo:
```js
import * as client from './service/client.service';

/* exemplo de um documento indexável (JSON) */
let documento = {
    "nome": "Édson Arantes do Nascimento",
    "apelido": "Pelé",
    "titulos_mundiais": [
      "1958",
      "1962",
      "1970"
    ]
  };

let indice = 'futebol';
let tipo = 'jogador';

let response = await client.save( documento, indice, tipo );

/*
* você pode retirar o await para acelerar a operação,
* caso não necessite conferir sempre a resposta.
* O argumento 'tipo' é opcional.
*/
```

### Querys de Consulta
Para fazer uma consulta, basta escrever uma query em JSON compatível com a documentação do elasticsearch e passar o objeto para o serviço, junto do índice onde será feita a pesquisa. Exemplo:
```js
import * as client from './service/client.service';

/* exemplo de uma query válida */
let query = {
    "match": {
      "apelido": {
        "query": "Pelé"
      }
    }
  };

  let indice = 'futebol';
  let tipo = 'jogador';

  let response = await client.search( query, indice, tipo );
  
/*
* você pode retirar o await para acelerar a operação,
* caso não necessite conferir sempre a resposta.
* O argumento 'tipo' é opcional.
*/
```

### UPSERT
Você também pode inserir ou atualizar documentos facilmente apontando o ID do documento. Se o ID não existir, o documento é criado, se já existir, é atualizado. Uma aplicação de exemplo típica do recurso é a atualização da posição de GPS de um veículo em tempo real.  Exemplo:
```js
import * as client from './service/client.service';

/* exemplo de um documento indexável (JSON) */
let documento = {
    "nome": "Édson Arantes do Nascimento",
    "apelido": "Pelé",
    "titulos_mundiais": [
      "1958",
      "1962",
      "1970"
    ]
  };

let indice = 'futebol';
let tipo = 'jogador';
let id = "zxp41"

let response = await client.upsert( documento, indice, id, tipo );

/*
* você pode retirar o await para acelerar a operação,
* caso não necessite conferir sempre a resposta.
* O argumento 'tipo' é opcional.
*/
```
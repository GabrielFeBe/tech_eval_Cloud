# Desafio Tecnico Charged Cloud

## Sobre o Projeto

O projeto consiste em um sistema que permite criação, edição, e exclusão de Filmes e Atores, Alem de fazer a relação entre os dois, e também permite a visualização de todos os filmes e atores cadastrados.

## Aviso

- Para rodar o projeto é necessário ter o Node.js Versão v18.17.0 ou maior instalado na sua maquina.

### Tecnologias Utilizadas

#### BackEnd

- **JavaScript**: A linguagem de programação utilizada para o desenvolvimento do BackEnd.
- **Express**: Framework que simplifica o desenvolvimento de aplicações JavaScript.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar dados.
- **Sequelize**: ORM utilizado para facilitar a comunicação com o banco de dados.

#### FrontEnd

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React que permite renderização do lado do servidor, geração de sites estáticos e aplicações web, entre outras funcionalidades.
- **TailwindCSS**: Framework CSS utilizado para estilização do projeto.

## BackEnd

### Configurações

- Para rodar o backend é necessario configurar o arquivo `src/database/config/connection.js` com as informações do seu banco de dados.
- Apos configurado, é necessario rodar o comando `npm install` para instalar todas as dependencias, e em seguida fazer com que o seu banco de dados receba as migrations com o comando `npm run db:migrate`.
- Para rodar o projeto basta rodar o comando `npm start` e ele ira rodar o projeto na porta 3001, caso queira modificar a porta é necessário mudar no arquivo `src/server.js`, desde a conexão com o banco de dados até a porta, estão tentando usar primariamente variaveis de ambiente para facilitar a configuração do projeto, porem caso queira colocar manualmente é só alterar o texto apos o ||.

### EndPoints

- Lembrando que todos os endpoints estão com o prefixo `http://localhost:3001/` já que essa é a porta que estou usando no meu projeto localmente.
- O controller de relacionamento tem apenas POST E DELETE já que ele serve apenas para criar e deletar relações entre atores e filmes, não faz sentido ter um GET ou PUT para ele.

#### Atores

<details>
<summary>POST</summary>

- `/atores` - Cria um novo ator no banco de dados, passando um json no body da requisição, exemplo:

```json
{
  "name": "Gabriel",
  "nacionalidade": "Brasileiro",
  "dataDeNascimento": "1999-02-01"
}
```

</details>
<details>
<summary>GET</summary>

- `/atores/nome?nome={ab}` - Retorna todos os atores que o nome inclui a string passada como parametro, exemplo:

```json
[
  {
    "id": 1,
    "name": "Gabriel",
    "nacionalidade": "Brasileiro",
    "dataDeNascimento": "1999-02-01"
  },
  {
    "id": 2,
    "name": "Fabrício",
    "nacionalidade": "Brasileiro",
    "dataDeNascimento": "1999-02-01"
  },
  {
    "id": 3,
    "name": "Fabio",
    "nacionalidade": "Brasileiro",
    "dataDeNascimento": "1999-02-01"
  }
]
```

</details>

<details>
<summary>GET</summary>
- `/atores` - Pega todos os atores do banco de dados, exemplo:

```json
[
  {
    "id": 1,
    "name": "Gabriel",
    "nacionalidade": "Brasileiro",
    "dataDeNascimento": "1999-02-01"
  },
  {
    "id": 2,
    "name": "Samira",
    "nacionalidade": "Brasileiro",
    "dataDeNascimento": "1999-02-01"
  },
  {
    "id": 3,
    "name": "Ricardo",
    "nacionalidade": "Brasileiro",
    "dataDeNascimento": "1999-02-01"
  }
]
```

</details>

<details>
<summary>PUT</summary>

- `/atores/:id` - Atualiza um ator no banco de dados, passando um json no body da requisição, exemplo:

```json
{
  "id": 1,
  "name": "Gabriel",
  "nacionalidade": "Brasileiro",
  "dataDeNascimento": "1999-02-01"
}
```

</details>

<details>
<summary>DELETE</summary>

- `/atores/:id` - Deleta um ator especifico do banco de dados, passando o id do ator como parametro na url e não retorna nada.

</details>

<details>
<summary>GET</summary>

- `/atores/:id` - Busca um ator pelo id fornecido na url e volta também os filmes que esse ator fez parte, exemplo:

```json
{
  "id": 1,
  "name": "Gabriel",
  "nacionalidade": "Brasileiro",
  "dataDeNascimento": "1999-02-01",
  "filmes": [
    {
      "id": 1,
      "name": "Filme 1",
      "anoDeLancamento": 2023,
      "estaDisponivel": false
    },
    {
      "id": 2,
      "name": "Filme 2",
      "anoDeLancamento": 2024,
      "estaDisponivel": true
    }
  ]
}
```

</details>

#### Filmes

<details>
<summary>POST</summary>

- `/filmes` - Cria um novo filme no banco de dados, passando um json no body da requisição, exemplo:

```json
{
  "name": "Filme 1",
  "anoDeLancamento": 2023,
  "estaDisponivel": false
}
```

</details>

<details>
<summary>GET</summary>

- `/filmes/titulo?titulo={il}` - Retorna todos os filmes que o titulo inclui a string passada como parametro, exemplo:

```json
[
  {
    "id": 1,
    "name": "Filme 1",
    "anoDeLancamento": 2023,
    "estaDisponivel": false
  },
  {
    "id": 2,
    "name": "Filme 2",
    "anoDeLancamento": 2024,
    "estaDisponivel": true
  },
  {
    "id": 3,
    "name": "Filme 3",
    "anoDeLancamento": 2025,
    "estaDisponivel": true
  }
]
```

</details>

<details>
<summary>GET</summary>

- `/filmes` - Pega todos os filmes do banco de dados, exemplo:

```json
[
  {
    "id": 1,
    "name": "Filme 1",
    "anoDeLancamento": 2023,
    "estaDisponivel": false
  },
  {
    "id": 2,
    "name": "Filme 2",
    "anoDeLancamento": 2024,
    "estaDisponivel": true
  },
  {
    "id": 3,
    "name": "Filme 3",
    "anoDeLancamento": 2025,
    "estaDisponivel": true
  },
  {
    "id": 4,
    "name": "Filme 4",
    "anoDeLancamento": 2026,
    "estaDisponivel": true
  }
]
```

</details>

<details>
<summary>PUT</summary>

- `/filmes/:id` - Atualiza um filme no banco de dados, passando um json no body da requisição, exemplo:

```json
{
  "id": 1,
  "name": "Filme 1",
  "anoDeLancamento": 2023,
  "estaDisponivel": false
}
```

</details>

<details>
<summary>DELETE</summary>

- `/filmes/:id` - Deleta um filme especifico do banco de dados, passando o id do filme como parametro na url e não retorna nada.

</details>

<details>
<summary>GET</summary>

- `/filmes/:id` - Busca um filme pelo id fornecido na url e volta também os atores que fizeram parte desse filme, exemplo:

```json
{
  "id": 1,
  "name": "Filme 1",
  "anoDeLancamento": 2023,
  "estaDisponivel": false,
  "atores": [
    {
      "id": 1,
      "name": "Gabriel",
      "nacionalidade": "Brasileiro",
      "dataDeNascimento": "1999-02-01"
    },
    {
      "id": 2,
      "name": "Samira",
      "nacionalidade": "Brasileiro",
      "dataDeNascimento": "1999-02-01"
    }
  ]
}
```

</details>

#### FilmesEAtores

<details>
<summary>POST</summary>

- `/relacionar` - Cria um relacionamento entre um ator e um filme, passando um json no body da requisição, exemplo:

```json
{
  "idAtor": 1,
  "idFilme": 1
}
```

</details>

<details>
<summary>DELETE</summary>

- `/relacionar` - Deleta um relacionamento entre um ator e um filme, passando um json no body da requisição, exemplo:

```json
{
  "idAtor": 1,
  "idFilme": 1
}
```

</details>

## FrontEnd

### Configurações

- Para rodar o projeto basta clonar com `git clone`, trocar para a pasta do frontend e rodar o comando `npm install` para instalar todas as dependencias.
- Para rodar o projeto basta rodar o comando `npm run dev` e ele ira abrir uma aba no seu navegador com o projeto rodando.
- Dentro do arquivo `src/utils/endpoint.ts` está a base url do backend, caso você mude a porta do backend, é necessário mudar a porta no arquivo `endpoint.ts` também.
- O front end só funciona se o backend estiver rodando pois literalmente todas as requisições são feitas para o backend.

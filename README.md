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

- O projeto já foi clonado na explicação de configs do backend, então não é necessário clonar novamente, já que é um monorepo, apenas troque para a pasta `frontend` com o comando `cd frontend`, e rode o comando `npm install` para instalar todas as dependencias.
- Para rodar o FE é necessario ter o backend rodando, pois ele faz todas as requisições para o backend.
- Dentro do arquivo `src/utils/endpoint.ts` está a base url do backend, caso você mude a porta do backend, é necessário mudar a porta no arquivo `endpoint.ts` também.
- Para rodar o projeto basta rodar o comando `npm run dev` e ele ira abrir uma aba no seu navegador com o projeto rodando.
- E lembre-se do aviso no inicio do README, é necessário ter o Node.js Versão v18.17.0 ou maior instalado na sua maquina.

### Paginas

<details>
<summary>Home</summary>

[![Vídeo do Loom](https://cdn.loom.com/sessions/thumbnails/ba90d5116a4d4c1fbb26ed060749852b-with-play.gif)](https://www.loom.com/embed/ba90d5116a4d4c1fbb26ed060749852b?sid=3d33f9ee-25be-4c49-9f62-4d897bf56411)

</details>

<details>
<summary>atores/:id</summary>

[![Clique para assistir ao vídeo](https://cdn.loom.com/sessions/thumbnails/32392613bc1e4c0785992cc0bce3b793-with-play.gif)](https://www.loom.com/embed/32392613bc1e4c0785992cc0bce3b793?sid=e6bc6450-0171-4fb0-acd7-81aca88353b5)

</details>

<details>
<summary>criar/atores</summary>

[![Clique para assistir ao vídeo](https://cdn.loom.com/sessions/thumbnails/3d11e48fac9b498aa81fc1b98abbded0-with-play.gif)](https://www.loom.com/embed/3d11e48fac9b498aa81fc1b98abbded0?sid=4f8341f7-15a4-4d19-a3b1-fdd3f4cb6321)

</details>

<details>
<summary>criar/filmes</summary>

[![Clique para assistir ao vídeo](https://cdn.loom.com/sessions/thumbnails/22b38a218fb84ae59d02f544898db88c-with-play.gif)](https://www.loom.com/embed/22b38a218fb84ae59d02f544898db88c?sid=957ed6d1-f9a9-4b19-bc73-61848cbd4468)

</details>

<details>
<summary>Mostrando relacionamentos</summary>

- Lembrando que eu não coloquei a exclusão de relacionamentos, mas é algo que pode ser feito facilmente, eu fiz no backend, mas não fiz no frontend.

[![Clique para assistir ao vídeo](https://cdn.loom.com/sessions/thumbnails/7583bcbda68f40d0971a5269522bf9e8-with-play.gif)](https://www.loom.com/embed/7583bcbda68f40d0971a5269522bf9e8?sid=1455265a-7b60-41a7-84ee-18d2909c19fc)

</details>

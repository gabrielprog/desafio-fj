# README - Rotas para Gerenciamento de Usuários em Node.js

Este README descreve as rotas disponíveis para gerenciamento de usuários em uma aplicação Node.js utilizando o framework Express. As rotas definidas permitem a leitura, criação e recuperação de informações sobre usuários.

## Requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de executar o projeto.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando no terminal:

```bash
npm install
```

## CONFIGURAÇÃO DAS VARIÁVEIS DO POSTGRES

Para configurar o arquivo `.env` com base no `.env.example`, siga estas orientações:

1. **Crie o arquivo `.env`**: Comece criando um arquivo chamado `.env` na raiz do seu projeto.

2. **Copie as variáveis**: Copie as variáveis do arquivo `.env.example` para o arquivo `.env`.

3. **Preencha as variáveis**: Preencha cada variável com os valores correspondentes para a sua configuração do PostgreSQL.

Por exemplo:

```dotenv
# CONFIGURAÇÃO DAS VARIÁVEIS DO POSTGRES
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
```

## Uso

Para iniciar o servidor e utilizar as rotas definidas, execute o seguinte comando:

```bash
npm start
```
O servidor será iniciado e estará pronto para receber requisições nas rotas definidas.

## Rotas Disponíveis

### `GET /api/users/travel`

Retorna todos os usuários ordenados por cidades de viagem.

### `GET /api/users`

Retorna todos os usuários cadastrados.

### `GET /api/user/:id`

Retorna as informações do usuário com o ID especificado na rota.

### `POST /api/user`

Cria um novo usuário com os dados fornecidos no corpo da requisição. Os dados devem seguir o seguinte formato:

```json
{
    "name": "Nome do Usuário",
    "email": "email@dominio.com",
    "phone": "123456789",
    "cord_x": "123.456",
    "cord_y": "789.123"
}
```

## Tratamento de Erros

- Se os dados enviados no corpo da requisição não estiverem completos ou não seguirem o formato esperado, a API retornará um status `406` com a seguinte mensagem:
  ```json
  {
      "message": "Body not are complete"
  }
  ```

- Se ocorrer um erro durante a criação do usuário, a API retornará um status 500 com a seguinte mensagem:
  ```json
    {
            "message": "Ops, algo deu errado ao criar o usuário. Por favor, tente novamente. 😕"
    }
    ```

- Se der certo durante a criação do usuário, a API retornará um status 200 com a seguinte mensagem:
  ```json
    {
            "message": "Usuário criado com sucesso! 👍"
    }
    ```


## Contribuição

Este projeto é de código aberto. Sinta-se à vontade para contribuir através de pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

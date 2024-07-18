# products-api
Aplicação full-stack para gerenciamento de produtos

## Descrição
Este projeto é uma aplicação fullstack composta por um back-end em Node.js e Express, e um front-end em React. A aplicação permite cadastrar produtos e oferece funcionalidades de autenticação e validação de dados.

## Tecnologias Utilizadas

### Back-end
- **Node.js**
- **Express**
- **Sequelize**: Utilizado para gerenciar o banco de dados.
- **JWT**: Utilizado para autenticação.
- **Joi**: Utilizado para validação de dados.

### Front-end
- **React**: Utilizando componentes funcionais.

## Funcionalidades
- Cadastro de produtos
- Autenticação de usuários
- Validação de dados

## Como Executar o Projeto


1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd products-api
    ```
3. Crie um arquivo env e configure as variáveis de ambiente no arquivo `.env` do diretório back-end:
    ```env
    PORT=3000
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=password
    MYSQL_ROOT_PASSWORD=password
    MYSQL_DB=products_db
    JWT_SECRET=sua_chave_secreta
    ```

4. faça o build com o docker-compose:
    ```bash
    docker compose up --build
    ```


5. Execute o banco de dados com o script do sequelize:
    ```bash
    npm run prestart
    ```

6. Execute as seeds 
    ```bash
    npx sequelize-cli db:seed:all
    ```

> **Observação:** O front-end ainda não foi finalizado.

## Estrutura do Projeto

### Back-end
- `/src`: Código-fonte do servidor
- `/models`: Modelos do Sequelize
- `/controllers`: Controladores da API
- `/routes`: Rotas da API

### Front-end
- `/src/components`: Componentes React
- `/src/contexts`: Context API para gerenciar estados
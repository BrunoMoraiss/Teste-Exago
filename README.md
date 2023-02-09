# Teste-Exago
## Front-End
- EJS - Utilizado como view engine para redenrização das paginas.
- Bootstrap - Para estilização das paginas
## Back-End
- Framework Express
- Sequelize - Utilizado para conexao e comunicação ao banco de dados.
- SQL (Postgres) - Como banco de dados relacional.
## Dev-Dependencies
- Nodemon - Utilizado para manter o servidor rodando mesmo após modificação no código.
## ☕ Introdução ao projeto 
- Rota principal do projeto é utilizada para fazer o login, caso não seja `registrado` somente clicar em registrar para criar um usuario.
## 💻 Pré-requisitos
- Ter algum banco de dados relacional instalado.
- Ter o node.js instalado.
## 🚀 Instalando e Rodando o projeto. 
- Rodar o seguinte comando dentro do cmd ou powershell:
```
npm install
```
- Caminho do arquivo para configurar o arquivo do banco de dados `SRC/CONFIG/Database.js`.
### Exemplo: 
```
module.exports = {
    dialect: "postgres, mysql ou SQLlite",
    host: "localhost",
    username: "username do seu banco de dados",
    password: "senha do seu banco de dados",
    database: "nome do seu database",
    define: {
        timestamp: true,
        underscored: true
    }
}
```
### Os comandos abaixo são necessarios porque na dependencia do projeto está instalados os driver nativos para somente o postgres. 
- Caso for usar Mysql, rodar os seguintes comados:
```
npm install --save mysql2
```
- Caso for usar SQLlite, rodar os seguintes comados:
```
npm install --save sqlite3
```
### Para rodar o projeto, utilizar os seguinte comando: 
```
npm run dev
```

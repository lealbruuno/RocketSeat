require("express-async-errors");
const migrationsrun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express");
const routes = require("./routes/index");

migrationsrun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: error.message,
  });
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
});

/*
Estrutura do Projeto
  Arquivo server.js: Responsável por inicializar a aplicação
    Pasta src: Onde está todos os arquivos
    Pasta routes: Onde está todas as rotas da aplicação | Arquivo index.js: Onde reune as rotas
    Pasta controllers: Parte responsável onde será processada as requisições da aplicação (Ex: fazer cadastro de produto)
    Pasta middleware: Parte responsável por interceptar a requisição/rota. É um tipo de validação
    Pasta utils: Pasta para tratamento de excessões, erros. 
*/

require("express-async-errors"); //Biblioteca para tratamento de exceções//
const migrationsRun = require("./database/sqlite/migrations"); //Pacote do Banco de Dados//
const AppError = require("./utils/AppError"); //Tratamento de exceções//
const uploadConfig = require("./configs/upload");


const cors = require("cors");
const express = require("express");
const routes = require("./routes/index");

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);

app.use((error, request, response, next) => {
  //Verifica se o erro vem de uma instância (instanceof) de um AppError//
  ///Erro gerado do lado do cliente/
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  ///Erro gerado do lado do servidor/
  return response.status(500).json({
    status: "error",
    message: error.message,
  });
});

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

class AppError {
    message;//Declaração de variável dentro de uma classe//
    statusCode;//Declaração de variável dentro de uma classe//

    //Toda classe tem um método construtor: constructor  

    constructor(message, statusCode = 400) {
      this.message = message; //repassando a mensagem para a variável//
      this.statusCode = statusCode; //repassando o statusCode para a variável//
    }
  }
  
  module.exports = AppError;


// Es importante colocar "./", debido a que el require busca los ficheros en el directorio de instalación de node y no en el directorio actual, por tanto debemos darle una ruta absoluta o relativa para encontrar nuestro módulo.



const calculadora = require("./calculadora.js");

// console.log(calculadora.suma(7, 5))
// console.log(calculadora.resta(7, 5))
// console.log(calculadora.multiplicacion(7, 5))
// console.log(calculadora.division(0, 5))


// console.log(calculadora.suma(7, 5))

console.log(calculadora(10, 2))
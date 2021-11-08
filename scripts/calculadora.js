function suma (firstNuber ,secondNumber) {
    return firstNuber + secondNumber
}

function resta (firstNuber ,secondNumber) {
    return firstNuber - secondNumber
}

function multiplicacion (firstNuber ,secondNumber) {
    return firstNuber * secondNumber
}

function division (firstNuber ,secondNumber) {
    if (secondNumber > 0) {
        return firstNuber * secondNumber
    }
    else {
        return ("No se puede dividir por 0")
    }
}


const calculadora = {
    suma: suma,
    resta: resta,
    multiplicacion: multiplicacion,
    division: division,
}

// PARA EXPORTAR TODAS LAS FUNCIONES A LA VEZ 
module.exports = calculadora;

// PARA EXPORTAR CADA FUNCION 
// exports.suma = suma;
// exports.resta = resta;
// exports.multiplicacion = multiplicacion;
// exports.division = division;


// Para exportar solo la funcion

module.exports=function div(a,b){
    if(b != 0){
        return a / b;
    }else {
        return "No se puede dividir por 0";
    }
}

// //O bien 
// function div(a,b){
//     if(b != 0){
//         return a / b;
//     }else {
//         return "No se puede dividir por 0";
//     }
// }

// module.exports = div;

// //O bien
// module.exports = function(a,b) {
//     if(b != 0){
//         return a / b;
//     }else {
//         return "No se puede dividir por 0";
//     }
// };
// // Para llamarla se llama a calculadora(num,num)

// //O bien
// module.exports = (a,b) => {
//     if(b != 0){
//         return a / b;
//     }else {
//         return "No se puede dividir por 0";
//     }
// };

// //O bien 
// module.exports = div => {
//     return 70/7; //Ejemplo para algo concreto
// };
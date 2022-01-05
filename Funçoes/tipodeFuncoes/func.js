const { NoEmitOnErrorsPlugin } = require("webpack")

// funçao simples
function nome(parametro){
    (condiçoes);
} 

// funçao anonima
const nome =  function (parametro){
    (condiçoes);
} 

nome(parametros);

// funçao auto invocavel

(
    function(){
        let name = "nome qualquer";
        return name;
    }
)();


// funçao auto invocavel com parametros
(
    function(parametros){
        let name = "nome qualquer";
        return name;
    }
)(parametros);

// funçao auto invocavel com parametros e armazeda em constante
const soma = (
    function(parametros){
        let name = "nome qualquer";
        return name;
    }
)(parametros);

console.log(soma)

// CALLBACKS funçao passada como argumento de outra funçao
const calc = function(operacao, num1,num2){
    return operacao(num1,num2);
}

const soma = function(num1,num2){
    return num1 + num2;
}

const sub = function(num1,num2){
    return num1 - num2;
}

const resultSoma = calc(soma(4,9));
const resultSub = calc(sub(10,9));

console.log(resultSoma);
console.log(resultSub);
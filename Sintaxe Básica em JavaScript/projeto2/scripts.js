alert("Aprofundando em funçoes")

// funçoes declarativas
/*
function imprime(){
    console.log("funçao declarativa");
}

imprime();
*/

// expressoes de funçoes

// com nomeaçao
var funcao = function func(){
    console.log("funçao de expressao");
}

funcao();
// sem nomeaçao
var funcao = function (){
    console.log("funçao de expressao, sem nomeacao");
}

funcao();

//Arrow funciton
var funcao = () => {
    console.log("funçao de arrow function");
}

funcao();
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumberWrapper2 = document.getElementById('currentNumber2');
var currentOperador = document.getElementById('operador');
var currentResultWrapper = document.getElementById('result');
var currentResult = 0;
var currentNumber = 0;
var currentNumber2 = 0;
let operador = ' ';

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement2(){
    currentNumber2 -= 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
}

function increment2(){
    currentNumber2 += 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
}

function soma(){
    operador = '+';
    currentOperador.innerHTML = operador;
}

function subtrai(){
    operador = '-';
    currentOperador.innerHTML = operador;
}

function divide(){
    operador = '/';
    currentOperador.innerHTML = operador;
}

function mult(){
    operador = '*';
    currentOperador.innerHTML = operador;
}

function reset(){
    operador = '+';
    currentOperador.innerHTML = operador;
}


function calcular() {
    if(operador == '+'){
        currentResult = currentNumber + currentNumber2;
    }else if(operador == '-'){
        currentResult = currentNumber - currentNumber2;
    }else if(operador == '*'){
        currentResult = currentNumber * currentNumber2;
    }else if(operador == '/'){
        currentResult = currentNumber / currentNumber2;
    }
    currentResultWrapper.innerHTML = currentResult;
}

function reset() {
    currentNumber = 0;
    currentNumber2 = 0;
    operador = ' ';
    currentResult = 0;
    currentOperador.innerHTML = operador;
    currentNumberWrapper2.innerHTML = currentNumber2;
    currentNumberWrapper.innerHTML = currentNumber;
    currentResultWrapper.innerHTML = currentResult;
}
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumberWrapper2 = document.getElementById('currentNumber2');
var currentOperador = document.getElementById('operador');
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

}
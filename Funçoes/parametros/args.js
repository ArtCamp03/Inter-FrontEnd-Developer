// inicia parametro dentro da funçao com valor padrao

function name(idade = 12, nam){
    return `${idade} ${nam}`
}

// objeto arguments - array com tds parametros passados quando a funçao foi invocada
function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments;
        }
    }
    return max;
}

//spread - divide a variavel para caber como parametro
function som(x,y,z){
    return x + y + z;
}

const n = [1,2,45];
console.log(som(...n));

// rest - elemento independente se torna array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho();
confereTamanho(1,2,43,5,6);
confereTamanho(34,56,7);
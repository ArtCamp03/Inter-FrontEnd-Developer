alert("Sintaxe e operadores")

const a = Number(prompt("Digite o primerio valor: "));
const b = Number(prompt("Digite o segundo valor: "));

function opera(a,b){
    const cmp = a === b;
    const soma = a + b;

    // IF ternario
    // return cmp ? "sao iguais" : "nao sao iguais";

    console.log(igual(a,b));
    console.log(cmpara(a,b));
    
}  

function igual(a,b){
    let iguais = " ";

    if(a !== b){
        iguais = "nao";
    }else{
        iguais = "sim";
    }

    return `Os numeros ${a} e ${b} ${iguais} sao iguais`  ;
}

function cmpara(a,b){
    let comp = " ";

    if(a + b < 20 && a + b > 10){
        comp = "Maior que 10 e menor que 20";
    }else{
        comp = "Nao corresponde";
    }

    return `Os numeros ${a} e ${b} ${comp} `;
}

opera(a.b);
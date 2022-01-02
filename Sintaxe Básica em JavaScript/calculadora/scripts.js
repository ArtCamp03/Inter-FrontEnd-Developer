function calculadora(){
    let result = 0;

    const operacao =  Number(prompt("Escolha uma funcao: \n 1 - soma + \n 2 - subtracao - \n 3 - multiplicaçao * \n 4 - divisao real / \n 5 - divisao inteira % \n 6 - potenciaçao ** \n"));
    console.log(operacao);

    let a = Number(prompt("Digite o primerio valor: "));
    let b = Number(prompt("Digite o segundo valor: "));

    switch(operacao){
        case 1:
            result = Number(a + b);
            break;
        case 2:
            result = Number(a - b);
            break;
        case 3:
            result = Number(a * b);
            break;
        case 4:
            result = Number(a / b);
            break;
        case 5:
            result = Number(a % b);
            break;
        case 6:
            result = Number(a ** b);
            break;
        default:
            alert("operaçao incorreta !!");
        }
    alert("valor: "+result);
}


calculadora();
// retorna um array com valores unicos

const Myarray = [1,2,3,4,5,6,67,8,98,9,09];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(Myarray));
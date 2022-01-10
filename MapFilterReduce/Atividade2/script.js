// utilizando o Filter , funçao com objetivo de filtrar pares

function filtraPares(arr){
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0;
}

const array = [1,2,3,4,5,6,7,8];

console.log('valores:',filtraPares(array));
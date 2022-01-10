// utilizando Reduce

function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    }, 0); // 0 como valor inicial
}

const ar = [4,3];

console.log(somaNumeros(ar));
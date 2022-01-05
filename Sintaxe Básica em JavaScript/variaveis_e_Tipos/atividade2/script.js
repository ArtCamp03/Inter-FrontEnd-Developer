// trocar todos os numeros pares e diferentes de zeros de array por 0
// se o array for vazio , undefined, ou null retornamos -1

function substituiPares(array){
    if(!array) return -1;
    else if(!array.length) return -1;
    else{
        for(let i = 0; i < array.length; i++){
            if(array[i] === 0){
                console.log("ja eh zero");
            }else if(array[i] % 2 === 0){
                console.log(`substituindo ${array[i]} por 0...`);
                array[i] = 0; 
            }
        }
    }
}

let array = [1,2,3,4,5,6,7,8,9,6];


console.log("array modificado");

console.log(substituiPares(array));
console.log(array);

console.log(substituiPares(null));

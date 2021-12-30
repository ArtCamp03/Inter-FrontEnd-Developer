/*
console.log("Ola Mundo");

let a = 10;
let b = 20;
console.log("soma :",a+b);


while(b>a){
    console.log(b - 1);
    b = b-1;
}
*/

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            console.log("${array[i]} ,nao eh par ");
        }
    }
    console.log('numeros pares sao: ',evenNums);
}

let array = [1,2,3,4,5,6,7,8,9,10];
returnEvenValues(array);
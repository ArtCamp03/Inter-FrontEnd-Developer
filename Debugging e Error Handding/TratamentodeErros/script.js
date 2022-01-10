// objetivo declara um array de numeros , caso nao for lançar erros e tratamentos

function validaArray(arr, num){

    try{

        if(!arr && !num) throw new ReferenceError('Envie os parametros ');

        if(typeof(arr) !== 'Object') throw new TypeError('Array precisa ser do tipo object'); 
    
        if(typeof(num) !== 'Number') throw new TypeError('Array precisa ser do tipo numero'); 
    
        if(arr.length !== num) throw new RangeError("Tamanho invalido!!")

        return arr;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Errpo: ReferenceErros");
            console.log(e.message);

        }else if(e instanceof TypeError){
            console.log("Errpo: TypeError");
            console.log(e.message);

        }else if(e instanceof RangeError){
            console.log("Errpo: RangeError");
            console.log(e.message);
        }else{
            console.log("Errpo nao esperado!!"+e);
        }
    }

}

console.log(validaArray([] , 23));
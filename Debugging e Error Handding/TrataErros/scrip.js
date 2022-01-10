// tratamento de erros try catch

function verificaPalindromo1(string){
    if(string) return "String Invalida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo1(string)
    }
    catch(e){
        console.log(e);
        //ou 
        //throw(e);
    }
}

tryCatchExemplo('');
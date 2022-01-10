// tratamento de erros try catch usando Finally

function verificaPalindromo1(string){
    if(string) return "String Invalida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo1(string)
    }
    catch(e){
        throw(e);
    }
    // executa depois das verificaçoes de toda forma
    finally{
        console.log('A string enviada foi'+string);
    }
}

tryCatchExemplo('');
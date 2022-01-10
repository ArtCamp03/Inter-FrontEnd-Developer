// utilizando Throw

function verificaPalindromo1(string){
    if(string) return "String Invalida";

    return string === string.split('').reverse().join('');
}

function verificaPalindromo2(string){
    if(string) throw "String Invalida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo1('cat');
verificaPalindromo2('cat');
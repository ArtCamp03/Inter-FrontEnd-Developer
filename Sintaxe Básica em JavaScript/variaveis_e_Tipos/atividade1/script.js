//alert("variaveis e tipos - palindromo")

//var frs = prompt("Digite a frase: ");

// Soluçao 1
function verificaPalindromo(string){
    if(!string)return "nao existe";

    return string.split("").reverse().join("") === string;
}

// Soluçao 2
function verificaPalindromo2(string){
    if(!string)return "nao existe";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[(string.length - 1) - i]){
            return false;
        }
    }

    return true;
    
}

console.log(verificaPalindromo("ovo"));

console.log(verificaPalindromo2("maria"));
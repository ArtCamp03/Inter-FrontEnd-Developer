alert("variaveis e tipos - palindromo")

var frs = Number(prompt("Digite a frase: "));

// Soluçao 1
function verificaPalindromo(string){
    if(!string)return "nao existe";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo(frs));
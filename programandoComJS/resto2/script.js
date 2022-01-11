//Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

//let lines = gets().split('\n');

let N = 13 //parseInt(lines.shift());
for (let i = 0; i < 10000; i++) {
	if (i % N == 2) console.log(i+' esta certo');
}
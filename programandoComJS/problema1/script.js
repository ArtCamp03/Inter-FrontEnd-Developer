/*
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.
let lines = gets().split('\n');
*/
//let lines = gets().split('\n');

var N = 6;
if(N > 5 && N < 2000){
  for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) console.log(i+"^2 = "+(i*i));  
  }
}
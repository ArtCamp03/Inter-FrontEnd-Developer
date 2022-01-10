// Map vs Foreach

// usando Map
const array = [1,4,7,8,5,2,3,9];
array.map((item) => item * 2);

// usando ForEach
const array = [10,40,,50,20,30,90];
array.forEach((item) => item * 2);
// retorna undefined
// set -> sao estruturas qe armazenam apenas valores unicos

const myArray = [1,2,3,4,5,6,7,8,9];
const mySet = new Set(myArray);

// adicionar , consultar e deletar
const mySets = new Set();

mySets.add(4);
mySets.add(5);


mySets.has(4);
// true
mySets.has(7);
// false

mySets.delete(4);

// possui valores unicos e o numero de registro pode ser verificado pela propriedade size()
// nao possui os metodos map, filter , reduce etc.

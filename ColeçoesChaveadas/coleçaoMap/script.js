// coleçao de arrays no formato [chave, valor] 
// pode ser iterado pelo loop for.. of

const myMap = new Map()

// adicionar, ler e deletar
myMap.set('apple', 'fruit');
// Map(1) {'apple' => 'fruit'}

myMap.get(apple);
// fruit

myMap.delete("apple");
// true

myMap.get("apple");
// undefined

// Maps tem chaves de qualquer tipo, propriedade length e mais faceis de itera, pode ser utilizado quando os valores das chaves sao desconhecidos
// ja nos objetos sao sempre do tipo strings
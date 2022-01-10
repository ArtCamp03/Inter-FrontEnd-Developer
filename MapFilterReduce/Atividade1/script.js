// praticando a sintaxe de multiplicaçao de numeros utilizando o this

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

// com this
function mapComThis(arr,thisArg){
    return arr.map(function(item){
        return item = this.value;
    }, thisArg);
}

function mapthis(arr){
    return arr.map(function(item) {
        return item * 2;
    });
}

const num = [1,2,4,5];

console.log('resultado maca: ',mapComThis(num,maca));

console.log('resultado laranja: ',mapComThis(num,laranja));

console.log('resultado Map: ',mapthis(num));
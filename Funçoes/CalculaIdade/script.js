// calcula a idade

function calculaIdade(anos){
    return `Daqui ha ${anos} anos, ${this.nome} tera ${
        this.idade + anos
    } anos de idade. `;
}

const pessoa1 = {
    nome: 'Joao',
    idade: 20
}

const pessoa2 = {
    nome: 'Antonio',
    idade: 25
}

const pessoa3 = {
    nome: 'Maria',
    idade: 15
}

console.log(calculaIdade.call(pessoa3,20))
console.log(calculaIdade.apply(pessoa3,[20]))
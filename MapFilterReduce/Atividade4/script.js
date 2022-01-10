// crie uma funçao qe recebe uma lista de preços, e um numero representando o saldo disponivel, calcular qual sera o valor apos subtrair tds os preços da lista enviada

const lista = [
    {
        nome: 'sabao',
        preco: 12.00,
    },
    {
        nome: 'arroz',
        preco: 15.00,
    },
    {
        nome: 'feijao',
        preco: 6.00,
    },
    {
        nome: 'açucar',
        preco: 10.00,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada: ',index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));

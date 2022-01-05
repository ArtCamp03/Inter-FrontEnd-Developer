const alunos = [
    {
        nome: 'Antonio',
        nota: 10,
        turma: 'A'
    },
    {
        nome: 'Andre',
        nota: 5,
        turma: 'B'
    },
    {
        nome: 'Maria',
        nota: 8,
        turma: 'A'
    },
    {
        nome: 'Luis',
        nota: 3,
        turma: 'B'
    }
];

function alunoAprovado(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nome, nota} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunoAprovado(alunos, 5));
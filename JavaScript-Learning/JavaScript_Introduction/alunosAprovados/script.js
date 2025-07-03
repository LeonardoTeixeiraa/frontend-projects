const alunos = [
    {
        nome: 'João',
        turma: '1B',
        nota: 5,
    },
    {
        nome: 'Sofia',
        turma: '1C',
        nota: 9,
    },
    {
        nome:  'Paulo',
        turma: '2A',
        nota: 10,
    },
];

function alunosAprovados(alunos, media){
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        //Object Desestruturing
        const {nome, nota} = alunos[i];

        if(nota>= media){
            console.log(`Aluno(a): ${nome} - APROVADO(a)`);
            aprovados.push(nome, nota);
        }
        else{
            console.log("REPROVADO(a)")
        }
    }
    return aprovados;
}

alunosAprovados(alunos, 6);
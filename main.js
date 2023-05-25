var Alunos = [
    {
        nome: "Matheus",
        nota: 5
    },
    {
        nome: "Joao",
        nota: 3
    },
    {
        nome: "Bianca",
        nota: 9
    },
    {
        nome: "Pedro",
        nota: 8
    },
];

function filtrarNotasAlta(alunos) {

    return alunos.filter(function(aluno) {
    return aluno.nota >= 6;
    });
    }

    const notasAltas = filtrarNotasAlta(Alunos);
    console.log(notasAltas);
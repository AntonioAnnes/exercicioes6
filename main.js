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

Alunos.sort(function() {
    if(nota > 7) {
        return nome;
    }
    else {
        return false;
    } 
})

console.log(Alunos)
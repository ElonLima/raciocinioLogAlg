// Faça um programa que receba a idade e o peso de uma pessoa. De acordo com a
// tabela a seguir, verifique e mostre em qual grupo de risco essa pessoa se encaixa.

// IDADE (anos)        até 60kg          entre 60kg e 90kg(inclusive)        acima de 90kg
// menores de 20           9                       8                               7
// de 20 a 50              6                       5                               4
// maiores de 50           3                       2                               1

var idade, peso, grupoDeRisco;

idade = parseInt(prompt("Digite sua idade"));
peso = parseInt(prompt("Digite seu peso"));

if (idade < 20) {
    if (peso < 60) {
        grupoDeRisco = 9;
    } else if (peso >= 60 && peso <= 90) {
        grupoDeRisco = 8;
    } else {
        grupoDeRisco = 7;
    }
} else if (idade >= 20 && idade <= 50) {
    if (peso < 60) {
        grupoDeRisco = 6;
    } else if (peso >= 60 && peso <= 90) {
        grupoDeRisco = 5;
    } else {
        grupoDeRisco = 4;
    }
} else {
    if (peso < 60) {
        grupoDeRisco = 3;
    } else if (peso >= 60 && peso <= 90) {
        grupoDeRisco = 2;
    } else {
        grupoDeRisco = 1;
    }
}

document.write("Essa pessoa pertence ao grupo " + grupoDeRisco + ".");
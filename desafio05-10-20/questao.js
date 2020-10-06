// Fazer um programa que leia média de 20 alunos. O programa 
// deve informar quantos alunos obbtiveram média igual ou
// superior a 6.

var media;
var cont = 0;

for (let i=0;i<20;i++) {
    media = parseFloat(prompt("Qual a média do "+ (i+1) +"º aluno"))
    if (media>=6) {
        cont += 1;
    }
}

document.write(cont + " alunos tem média igual ou superior a 6.")
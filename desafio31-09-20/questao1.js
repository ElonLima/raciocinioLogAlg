// Escrever um programa que faça a leitura de duas notas de
// um aluno e calcule a média dele. O programa deve indicar
// se está aprovado ou reprovado, considerando a média como 6.
// O programa deve ser executado 20 vezes de forma automática.

var n1, n2, media, aprovadoOuReprovado;

for (let i = 0; i < 20; i++) {
var n1 = parseFloat(prompt("Digite a primeira nota do aluno " + (i+1)));
var n2 = parseFloat(prompt("Digite a segunda nota do aluno " + (i+1)));
media = (n1+n2)/2;
if (media >= 6) {
    aprovadoOuReprovado = "aprovado";
} else {aprovadoOuReprovado = "reprovado"}
document.write("A média do aluno " + (i+1) + " foi " + media.toFixed(1) + ".<br>O aluno está " + aprovadoOuReprovado + ".<br><br>");
}
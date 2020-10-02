// Escreva um programa que leia dois valores e realize a divisão entre else. O 
// programa deve apresentar a divisão. O programa deve avaliar se a divisão 
// pode ser realizada, pois a linguagem Javascript não é capaz de apresentar 
// resultado de divisão por zero.

var n1, n2, divisao;

n1 = parseFloat(prompt("Digite o primeiro valor"));
n2 = parseFloat(prompt("Digite o segundo valor"));

if (n2 != 0) {
    divisao = (n1/n2);
    Document.write("A divisão entre " + n1 + " e " + n2 + " é " + divisao + ".");
} else {
    document.write("A divisão não pode ser realizada.");
}

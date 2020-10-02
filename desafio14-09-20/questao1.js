// Escreva um programa que leia o peso e altura de uma pessoa. O programa deve 
// calcular e apresentar o IMC da pessoa. O programa deve ainda informar se a 
// pessoa está saudável ou acima do peso. Valor de referência - 25. IMC = p/(a*a)

var peso, altura, imc;

peso = parseFloat(prompt("Informe seu peso"));
altura = parseFloat(prompt("Informe sua altura"));
imc = peso/(altura*altura)

if (imc < 25) {
    document.write("Você está saudável.");
} else {document.write("Você está acima do peso.")}

// Faça um programa que leia duas notas, calcule e mostre a média ponderada dessas
// notas, considerando peso 2 para a primeira e peso 3 para a segunda.

var mediaPonderada;
var n1 =  parseFloat(prompt("Digite a primeira nota"));
var n2 = parseFloat(prompt("Digite a segunda nota"));

n1 = n1*2;
n2 = n2*3;

mediaPonderada = (n1+n2)/5;

document.write("A média ponderada é "+ mediaPonderada);

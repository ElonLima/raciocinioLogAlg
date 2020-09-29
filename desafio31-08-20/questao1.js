//Escrever um programa para calcular o volume de uma esfera sendo fornecido
// o valor de seu raio. 

 // Declaração de variáveis
var volume, raio;
var pi = 3.14

// Entrada de dados
raio = parseFloat(prompt("Para saber o volume de uma esfera, digite o raio: "));

// Processamento de dados 
volume = (4*pi*(raio*raio*raio))/3

// Saída de dados
document.write("O volume dessa esfera é " + volume);
// document.write("O volume dessa esfera é " + volume.toFixed(2));

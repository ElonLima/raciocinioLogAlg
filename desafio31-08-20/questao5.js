// Escreva um programa que leia a duração em segundos de um evento, calcule e 
// apresente essa mesma duração no formato hora:minuto:segundo

var dias, meses, anos;

dias = parseInt(prompt("Digite a quantidade de dias vividos."));
anos = parseInt(dias/365);
dias = dias%365;
meses = parseInt(dias/30);
dias = dias%30;

document.write("A pessoa viveu " + anos + " anos, " + meses + " meses, e " + dias + " dias.");

// Escrever um programa que leia o nome de um aluno e as notas das 3 provas
// que ele obteve no semestre. No final informar o nome do 
// aluno e a sua média (aritmética).

// Declaração de variáveis
var nome;
var n1 ,n2 ,n3, media;

// Entrada de dados
nome = prompt("Digite seu nome: ");
n1 = parseFloat(prompt("digite sua 1ª nota: "));
n2 = parseFloat(prompt("digite sua 2ª nota: "));
n3 = parseFloat(prompt("digite sua 3ª nota: "));

// Processamento de dados 
media = (n1+n2+n3)/3

// Saída de dados
document.write(nome + ", sua média é " + media);
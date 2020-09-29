// Escrever um programa que leia o nome do vendedor, o seu salário fixo e o total de vendas
// efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de
// comissão sobre suas vendas efetuadas, informar o seu salário no final do mês. 

// Declaração de variáveis
var nome;
var salarioFixo, vendasEfetuadas, salarioTotal;

// Entrada de dados
nome = prompt("Digite seu nome: ");
salarioFixo = parseFloat(prompt("Digite seu salário: "));
vendasEfetuadas =  parseFloat(prompt("Digite o valor de suas vendas efetuadas: "));

// Processamento de dados 
salarioTotal = salarioFixo + (vendasEfetuadas*0.15);

// Saída de dados
document.write(nome + ", seu salário esse mês é " + salarioTotal);

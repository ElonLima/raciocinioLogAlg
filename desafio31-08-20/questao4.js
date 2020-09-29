// O custo ao consumidor de um carro novo é a soma de custo de fábrica com a percentagem
// do distribuidor e dos impostos (aplicados ao custo de fábrica).
// Supondo que a percentagem do distribuidor seja de 28% e os impostos 45%,
// escrever um programa que leia o custo de fábrica de um carro e informe o custo
// ao consumidor do mesmo.

// Declaração de variáveis
var custoFabrica, custoConsumidor;

// Entrada de dados
custoFabrica = parseFloat(prompt("Digite o custo de fábrica: "));

// Processamento de dados 
custoConsumidor = custoFabrica + (custoFabrica*0.28) + (custoFabrica*0.45);

// Saída de dados
document.write("Esse carro custará R$" + custoConsumidor.toFixed(2) + " ao consumidor.");

// O preço ao consumidor de um carro novo é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos, ambos aplicados ao custo de fábrica. As porcentagens
// encontram-se na tabela a seguir. Faça um programa que receba o custo de fábrica de um carro e apresente o preço ao consumidor final.

// Custo de Fábrica                    % do Distribuidor         % dos impostos
// Até R$ 12.000,00                            5                    Isento
// Entre R$ 12.000,00 e R$ 25.000,00          10                     15
// Acima de R$ 25.000,00                      15                     20

var custoFabrica, valorFinal;

custoFabrica = parseFloat(prompt("Digite o custo de fábrica desse carro"));

if (custoFabrica <= 12000) {
    valorFinal = custoFabrica + (custoFabrica*0.05) 
} else if (custoFabrica > 12000 && custoFabrica <= 25000) {
    valorFinal = custoFabrica + (custoFabrica*0.05) + (custoFabrica*0.15)
} else {
    valorFinal = custoFabrica + (custoFabrica*0.05) + (custoFabrica*0.20)
}

document.write("O valor final do carro é " + valorFinal.toFixed(2) + ".");

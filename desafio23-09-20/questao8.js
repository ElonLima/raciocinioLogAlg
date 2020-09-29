// 8. Suponha que o valor a pagar em uma conta de energia mensal seja função da
// quantidade de KWh consumidos e que, conforme mostra a tabela abaixo, a tarifa paga
// por KWh possui diferentes valores para cada classe consumidora.

// Classe                   Tarifa por KWh
//Consumidora  
// 1      >>>>>>>>>>>>>         1 real
// 2      >>>>>>>>>>>>>       80 centavos
// 3      >>>>>>>>>>>>>       50 centavos

// Sabendo que sobre o valor a pagar pela energia consumida incide um imposto de 30%,
// faça um programa que:
// a) Solicite que o usuário digite seu consumo de energia em KWh e armazena-o em UMA
// variável adequada;
// b) Solicite que o usuário digite a classe consumidora à qual pertence (1,2 ou 3) e
// armazena-a em UMA variável adequada;
// c) Atribua o valor correto da tarifa de acordo com a tabela acima;
// d) Calcule o valor total a pagar levando em conta o consumo total, o valor da tarifa e o
// acréscimo de 30% sobre o valor a pagar pela energia consumida e imprima na tela
// corretamente o valor total a pagar.

    var consumoTotal, classeConsumidora, valorPagar, precoEnergia, valorTarifa;

    consumoTotal = parseFloat(prompt("Digite qual foi seu consumo de energia (em KWh)"));
    classeConsumidora = parseInt(prompt("Digite a qual classe consumidora você pertence (1, 2 ou 3)"));

    if (classeConsumidora === 1 || classeConsumidora === 2 || classeConsumidora === 3) {
        if (classeConsumidora === 1) {
            valorTarifa = 1;
        } else if (classeConsumidora === 2) {
            valorTarifa = 0.8;
        } else {
            valorTarifa = 0.5
        }

        precoEnergia = consumoTotal * valorTarifa;
        valorPagar = precoEnergia + (0.3 * precoEnergia);

        document.write("O total a ser pago é R$" + valorPagar);

    } else {
        document.write("A pergunta sobre a classe consumidora do cliente só pode ser respondida com os números 1, 2 ou 3.<br>Você digitou " + classeConsumidora + ".<br>Por favor, reinicie o programa.");
    }
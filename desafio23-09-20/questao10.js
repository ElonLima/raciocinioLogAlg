// Uma metalúrgica possui meta anual de produção de 100mil chapas de aço e 50mil barras de alumínio. Quando a meta de ambos os produtos é ultrapassada, o valor excedente é repartido entre todos os funcionários. Quando apenas a produção das chapas é ultrapassada, o valor
// excedente é reduzido pela metade e repartido por todos os funcionários. Se apenas a produção
// das barras foi ultrapassada, nada acontece. Escreva um programa que receba como entrada:
// quantidade de funcionários, quantidade de chapas e de barras produzidas no ano. Como
// saída, esse algoritmo deve informar se houve ou não divisão do lucro e quanto cada funcionário recebeu. Para o cálculo do valor, considere que cada chapa rende R$5,00 e cada barra
// R$2,50

    // DECLARAÇÃO DE VARIÁVEIS
    var quantidadeDeFuncionarios, quantidadeDeChapas, quantidadeDeBarras, chapasExedentes, barrasExedentes;
    var valorExedenteChapas, valorExedenteBarras, valorExedenteTotal;

    // LEITURA DE DADOS
    quantidadeDeFuncionarios = parseInt(prompt("Digite a quantidade de funcionários"));
    quantidadeDeChapas = parseInt(prompt("Digite a quantidade de chapas de aço produzidas esse ano"));
    quantidadeDeBarras = parseInt(prompt("Digite a quantidade de barras de aluminio produzidas esse ano"));

    // PROCESSAMENTO DE DADOS

    if (quantidadeDeChapas > 100000 && quantidadeDeBarras > 50000) {
        chapasExedentes = (quantidadeDeChapas - 100000);
        valorExedenteChapas = (chapasExedentes * 5);

        barrasExedentes = (quantidadeDeBarras - 50000);
        valorExedenteBarras = (barrasExedentes * 2.5);
        
        valorExedenteTotal = (valorExedenteChapas + valorExedenteBarras);

    } else if (quantidadeDeChapas > 100000 && quantidadeDeBarras <= 50000) {
            chapasExedentes = (quantidadeDeChapas - 100000);
            valorExedenteTotal = (chapasExedentes * 5) / 2;
        
    } else {
        valorExedenteTotal = 0;
    }

    // SAÍDA DE DADOS
    if (valorExedenteTotal > 0) {
        document.write("Houve divisão de lucros.<br>Cada funcionário recebeu R$" + valorExedenteTotal.toFixed(2)+".");

    } else {
        document.write("Nenhuma das metas foram batidas, por isso não houve divisão de lucros.");
    }

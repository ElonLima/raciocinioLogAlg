// Quando o cliente de um banco vai buscar financiamento para a construção de
// uma casa ou a compra de algum bem, existe uma regra que a prestação gerada pelo valor a ser
// financiado seja no máximo uma porcentagem específica do salário desse cliente. Faça um programa que receba o valor do salário de uma pessoa e o valor de um financiamento pretendido.
// Caso o financiamento seja menor ou igual a 5 vezes o salário da pessoa, o programa deverá escrever “Financiamento concedido”, caso contrário ele deverá escrever “Financiamento negado”.
// Importante indicar que, independente de conceder ou não o financiamento, o programa escreverá
// depois a frase “Obrigado por nos consultar!“.


    // DECLARAÇÃO DE VARIÁVEIS
    var salarioCliente, valorFinanciamento, calcSalario;
    
    alert("Bom dia! Bem vindo ao sistema de financiamento de nosso banco. Por favor, responda algumas perguntas para que possamos avaliar se será possível lhe conceder o financiamento desejado.");
    
    // LEITURA DE DADOS
    salarioCliente = parseFloat(prompt("Digite seu salário"));
    valorFinanciamento = parseFloat(prompt("Digite o valor do financiamento pretendido"));

    // PROCESSAMENTO DE DADOS
    calcSalario = (salarioCliente*5);

    if (valorFinanciamento <= calcSalario) {
        document.write("Financiamento concedido!")
    } else {
        document.write("Financiamento negado.")
    }

    document.write("<br>Obrigado por nos consultar!")

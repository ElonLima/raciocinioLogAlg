// Um caixa eletrônico possui cédulas de 2, 5, 10, 20, 50 e 100 reais. Escreva um
// programa que leia o valor a ser sacado e mostre a quantidade de cada cédula a ser
// utilizada de modo que o mínimo de notas seja retirado.

    // DECLARAÇÃO E LEITURA DE VARIÁVEL
    var valor = parseInt(prompt("Digite o valor que deseja sacar"));
    
    // SAÍDA DE INÍCIO DA MENSAGEM.
    // A OUTRA PARTE DA MENSAGEM SERÁ IMPRESSA DEPENDENDO DOS VALORES OBTIDOS NAS CONDICIONAIS.
    document.write("Serão utilizadas ");
    
    // CONDIÇÕES DE EXISTÊNCIA

    if (valor >= 100) {
        n100 = Math.trunc(valor/100);
        valor = valor % 100;
        document.write(n100 + " nota");
        if (n100 > 1) {
            document.write("s");
        }
        document.write(" de 100 reais");
    } else if (valor >= 50) {
        n50 = Math.trunc(valor/50);
        valor = valor % 50;
        if (valor != 0) { 
            document.write(", ");
        } else {
            document.write(" e ");
        }
        document.write(n50 + " nota");
        if (n50 > 1) {
            document.write("s");
        }
        document.write(" de 50 reais");
    } else if (valor >= 20) {
        n20 = Math.trunc(valor/20);
        valor = valor % 20;
        if (valor != 0) { 
            document.write(", ");
        } else {
            document.write(" e ");
        }
        document.write(n20 + " nota");
        if (n20 > 1) {
            document.write("s");
        }
        document.write(" de 20 reais");
    } else if (valor >= 10) {
        n10 = Math.trunc(valor/10);
        valor = valor % 10;
        if (valor != 0) { 
            document.write(", ");
        } else {
            document.write(" e ");
        }
        document.write(n10 + " nota");
        if (n10 > 1) {
            document.write("s");
        }
        document.write(" de 10 reais");
    } else if (valor >= 5) {
        n5 = Math.trunc(valor/5);
        valor = valor % 5;
        if (valor != 0) { 
            document.write(", ");
        } else {
            document.write(" e ");
        }
        document.write(n5 + " nota");
        if (n5 > 1) {
            document.write("s");
        }
        document.write(" de 5 reais");
    } else if (valor >= 2) {
        n2 = Math.trunc(valor/2);
        valor = valor % 2;
        if (valor != 0) { 
            document.write(", ");
        } else {
            document.write(" e ");
        }
        document.write(n2 + " nota");
        if (n2 > 1) {
            document.write("s");
        }
        document.write(" de 2 reais");
    }
    // PROFESSORA, TESTEI ESSA QUESTÃO E PERCEBI QUE ALGUNS VALORES NÃO CONSEGUEM SER CONTEMPLADOS
    // POR FALTAR A OPÇÃO DE 1 REAL.
    else if (valor >= 1) {
        n1 = Math.trunc(valor/1);
        valor = valor % 1;
        if (valor != 0) { 
            document.write(", ");
        } else {
            document.write(" e ");
        }
        document.write(n1 + " moeda");
        if (n1 > 1) {
            document.write("s");
        }
        document.write(" de 1 reais");
    }
    
    document.write(".");

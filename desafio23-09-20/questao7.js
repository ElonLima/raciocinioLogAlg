// 7. Uma loja paga a seus estagiários 30 reais por dia trabalhado. A mesma loja paga a
// seus vendedores 600 reais mais uma comissão de 10% sobre seu total de vendas (em
// reais). Escreva um programa que:

// a) Solicite que o usuário digite “e” caso seja estagiário ou “v” caso seja vendedor,
// armazenando o valor digitado no tipo adequado de variável; 

// b) Solicite que usuário digite o total de vendas (em reais) e calcule corretamente o salário
// de um vendedor se, E SOMENTE SE, o usuário houver digitado “v”;

// c) Solicite que usuário digite a quantidade de dias trabalhados e calcule corretamente o
// salário de um estagiário se, E SOMENTE SE, o usuário houver digitado “e”;
// d) Imprima na tela corretamente o salário do usuário de acordo com seu cargo. 

    var vendedorOuEstagiário, totalDeVendas, salario, diasTrabalhados;
    var erro = 0;

    var vendedorOuEstagiario = prompt("Digite 'e' se você for estagiário ou 'v' se você for vendedor.").toLocaleLowerCase();

    if (vendedorOuEstagiario === 'e') {
        diasTrabalhados = parseInt(prompt("Digite quantidade de dias trabalhados"));
        salario = diasTrabalhados*30;

    } else if (vendedorOuEstagiario === 'v') {
        totalDeVendas = parseFloat(prompt("Digite o total de vendas (em R$)"))
        salario = 600 + (0.1*totalDeVendas);
        
    } else {
        erro = 1;
        document.write("ERRO!<br>Esse programa só aceita as letras 'e' ou 'v' como respostas para essa pergunta.<br>Por favor, reinicie o programa.")
    }

    if (erro === 0) {
        document.write("Seu salário é R$" + salario.toFixed(2));
    }
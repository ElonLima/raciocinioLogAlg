// Genericamente, uma equação do segundo grau é representada da seguinte
// forma: 𝑎𝑥² + 𝑏𝑥 + 𝑐 = 0. Uma equação do segundo grau pode possuir até
// duas soluções, chamadas de raízes ou zeros da equação. Dado o valor 𝛥 =
// (𝑏² − 4𝑎𝑐), as raízes são: (𝑥1// −𝑏+√𝛥/ 2𝑎) e (𝑥2// −𝑏−√𝛥/ 2𝑎).
// Faça um programa que receba os valores para 𝑎, 𝑏 e 𝑐, associados aos
// coeficientes da equação do segundo grau, e retorne as correspondentes
// raízes.
// Observações: para garantir a existência de uma equação do segundo
// grau, 𝑎 ≠ 0; para garantir a existência de raízes reais, 𝛥 ≥ 0; utilize
// Math.sqrt() para retornar o valor da raiz quadrada de um número. Exemplo
// de uso: num = Math.sqrt(4).
// No caso acima, o valor 2, raiz quadrada de 4, é atribuído à variável num

    // DECLARAÇÃO DE VARIÁVEIS
    var a, b, c, bNegativo, x1, x2, delta, raizDelta;

    // LEITURA DE DADOS
    a = parseFloat(prompt("Digite o valor de A"));
    b = parseFloat(prompt("Digite o valor de B"));
    c = parseFloat(prompt("Digite o valor de C"));

    // PROCESSAMENTO DO DADOS IMPORTANTES PARA DENTRO DE OUTRAS VARIÁVEIS
    bNegativo = b*(-1);
    delta = (b*b) - (4*a*c);
    raizDelta = Math.sqrt(delta);

    // O PRÓXIMO "IF" CONFERE, A PARTIR DE "A", SE TEMOS UMA EQUAÇÃO DO SEGUNDO GRAU
    if (a != 0) {
        // ENTRA AQUI SE FOR EQUAÇÃO DO SEGUNDO GRAU
        if (delta >= 0) {
            // ENTRA AQUI SE HOUVEREM RAÍZES REAIS
            x1 = (bNegativo + raizDelta)/(2*a);
            x2 = (bNegativo - raizDelta)/(2*a);
            document.write("As raízes dessa equação são " + x1 + " e " + x2 + ".");
        }/* CASO NÃO */ else {
            document.write("Não é possível obter raízes reais.")
        }
    } /*SE O VALOR DE "a" FOR ZERO*/ else {
        document.write("Não é uma equação do segundo grau.")
    }
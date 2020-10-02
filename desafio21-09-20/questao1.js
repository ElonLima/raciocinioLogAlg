// // Faça um programa que receba o salário atual de um funcionário e, usando 
// // a tabela a seguir, calcule e mostre o valor do aumento e o novo salário.
// salário atual                       percentual de aumento
// até 300 reais           >>>>            15%
// entre 300 e 600 reais   >>>>            10%
// entre 600 e 900 reais   >>>>            5%
// acima de 900 reais      >>>>            0%

var salarioAtual, aumento, novoSalario;

salarioAtual = parseFloat(prompt("Informe seu salário atual"));

if (salarioAtual <= 300) {
    aumento = (salarioAtual*0.15);
} else if (salarioAtual <= 300) {
    aumento = (salarioAtual*0.1)
} else if (salarioAtual <= 300) {
    aumento = (salarioAtual*0.05)
} else {
    aumento = 0;
}

novoSalario = (salarioAtual + aumento);

if (aumento > 0) {
document.write("O salário atual é " + salarioAtual.toFixed(2) + " e seu aumento será de " + aumento.toFixed(2) +".<br>Seu novo salário será " + novoSalario.toFixed(2))
} else {
    document.write("Seu salário é " + salarioAtual + ". Dessa forma, não é possível lhe oferecer aumento.")
}
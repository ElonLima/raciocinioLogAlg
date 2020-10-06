// faça um programa que leia o salário de várias pessoas 
// até que seja lido o valor 0 (zero). O programa deve calcular
// e informar a média salarial do grupo, excetuando o último. 
var media;
var total = 0;
var cont = 1;
var salario = parseFloat(prompt("Informe o salário da primeira pessoa: "));

while (salario > 0) {
    total += salario;
    salario = parseFloat(prompt("informe o salário da próxima pessoa: "));
    
    salario>0 ? (cont += 1) : cont +=0;
}

media = total/cont

document.write("A média salarial é R$" + media.toFixed(2));
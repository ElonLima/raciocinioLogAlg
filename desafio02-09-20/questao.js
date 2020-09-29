// Faça um programa que receba o número de horas trabalhadas e o valor do
// salário mínimo da região, calcule e mostre o salário a receber, seguindo estas
// regras:
// a) A hora trabalhada vale um terço do salário mínimo
// b) O salário bruto equivale ao número de horas trabalhadas multiplicado pelo valor
// da hora trabalhada
// c) O imposto equivale a 6% do salário bruto
// d) O salário a receber equivale ao salário bruto menos o imposto

	// DECLARAÇÃO DE VARIÁVEIS
	var horasTrabalhadas;
	var valorHoraTrabalhada;
	var salarioBruto;
	var salarioMinimo;
	var salarioFinal;
	var imposto;
	
	// ENTRADA DE DADOS
	horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas: "));
	salarioMinimo = parseFloat(prompt("Digite o salário mínimo de sua região: "));
	
	// PROCESSAMENTO DE DADOS
	valorHoraTrabalhada = salarioMinimo/3;
	salarioBruto = horasTrabalhadas*valorHoraTrabalhada;
	imposto = 0.06*salarioBruto;
	salarioFinal = salarioBruto - imposto;
	
	// SAÍDA DE DADOS
	document.write("o funcionário trabalhou "+ horasTrabalhadas + " horas e o valor do salário mínimo é R$"+ salarioMinimo.toFixed(2) + ".<br>");
	document.write("Assim, seu salário será R$"+salarioFinal.toFixed(2)+".<br>");
	document.write("Esse funcionário tem o salário bruto de R$"+salarioBruto.toFixed(2)+" e pagou R$"+imposto.toFixed(2)+" de imposto.");

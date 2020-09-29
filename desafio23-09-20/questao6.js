// Cícero, Prático e Heitor construíram 3 casas, uma para cada. Cada casa é capaz de
// suportar rajadas de vento de até certa velocidade. Escreva um programa que leia (em
// km/h) as velocidades máximas das rajadas de vento que cada casa é capaz de suportar
// e:
// a) Informe a maior velocidade suportada.
// b) Informe o nome do dono da casa que suporta a rajada de vento mais violenta

	var casaDeCicero, casaDePratico, casaDeHeitor, donoDaCasa, maiorVelocidade;

	casaDeCicero = parseFloat(prompt("Qual a velocidade máxima que de rajadas de vento que a casa de Cícero suporta? (em km/h)"));
	casaDePratico = parseFloat(prompt("Qual a velocidade máxima que de rajadas de vento que a casa de Prático suporta? (em km/h)"));
	casaDeHeitor = parseFloat(prompt("Qual a velocidade máxima que de rajadas de vento que a casa de Heitor suporta? (em km/h)"));

	if (casaDeCicero == casaDeHeitor || casaDeCicero == casaDePratico || casaDePratico == casaDeHeitor) {
		document.write("Pelo menos duas casas têm surporte às mesmas rajadas de vento. <br>Por favor, reinicie usando três números diferentes.<br><br>PROGRAMA FINALIZADO.");
	} else {
		if (casaDeCicero > casaDePratico && casaDeCicero > casaDeHeitor) {
			donoDaCasa = "Cícero";
			maiorVelocidade = casaDeCicero;
		} else if (casaDePratico > casaDeCicero && casaDePratico > casaDeHeitor) {
			donoDaCasa = "Prático";
			maiorVelocidade = casaDePratico;
		} else {
			donoDaCasa = "Heitor";
			maiorVelocidade = casaDeHeitor;
		}
		document.write("A maior velocidade de vento suportada é " + maiorVelocidade.toFixed(0) + "km/h.<br>");
		document.write("A casa de " + donoDaCasa + " é a que suporta vento em maiores velocidades.");
	}
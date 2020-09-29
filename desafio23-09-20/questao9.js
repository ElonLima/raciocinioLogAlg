// Sabe-se que, para iluminar de maneira correta os cômodos de uma casa, para cada
// m2
// , deve-se usar 18 W de potência. Faça um programa que receba as duas dimensões de um
// cômodo (em metros), calcule e mostre a sua área (em m2
// ) e a potência de iluminação que deverá
// ser utilizada. O programa deverá calcular ainda quantas lâmpadas de 6W deverão ser necessárias
// para iluminar todo o espaço.


    var metrosLado1, metrosLado2, metrosQuadrados, quantidadeDeLampadas, potenciaNecessaria;

    alert("Olá, eu irei lhe ajudar a calcular quantos metros quadrados tem seu comôdo, a potência necessária para ilumina-lo e a quantidade mínima de lâmpadas necessárias para fazer isso.");

    // LEITURA DE DADOS
    metrosLado1 = parseFloat(prompt("Digite quantos metros tem um dos lados de seu cômodo"));
    metrosLado2 = parseFloat(prompt("Digite quantos metros tem o outro lado de seu cômodo"));

    // PROCESSAMENTO DE DADOS
    metrosQuadrados = (metrosLado1*metrosLado2);
    potenciaNecessaria = (metrosQuadrados*18);
    quantidadeDeLampadas = (potenciaNecessaria/6);

    // SAÍDA DE DADOS
    document.write("A área desse cômodo é " + metrosQuadrados.toFixed(2)+" metros quadrados.<br>");
    document.write("A potência necessária para iluminar esse cômodo é de " + potenciaNecessaria + "W.<br>");
    document.write("Serão necessárias " + quantidadeDeLampadas + " lâmpadas de 6W para iluminar esse cômodo.");

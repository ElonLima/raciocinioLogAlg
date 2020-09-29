// Escrever um programa que leia três comprimentos de reta e
// verifique se eles formam um triângulo. Para formar um 
// triângulo, os três lados precisam atender à seguinte
// condição: a soma de quaisquer dois lados deve ser maior
// que o lado restante. Depois que for verificado que os lados
// formam um triângulo, o programa deve indicar que tipo de
// triângulo, se equilátero, isósceles ou escaleno.
// (a+b>c E a+c>b E b+c>a)

// DECLARAÇÃO E LEITURA DE VARIÁVEIS
var tipo;
reta1 = parseFloat(prompt("Digite o comprimento da primeira reta"));
reta2 = parseFloat(prompt("Digite o comprimento da segunda reta"));
reta3 = parseFloat(prompt("Digite o comprimento da terceira reta"));

// PROCESSAMENTO DE DADOS
if (reta1+reta2 > reta3 && reta1+reta3 > reta2 && reta2+reta3 > reta1) {
    // É possível formar um triângulo.
    // para isósceles
    if (reta1 != reta2 && reta2 != reta3 && reta1 != reta3) {
        tipo = "escaleno";
    }
    //para equilátero
    else if (reta1==reta2 && reta2==reta3 && reta1==reta3) {
        tipo = "equilátero";
    }
    // para escaleno
    else {
        tipo = "isósceles";
    }
    document.write("É possível formar um triângulo e esse triângulo é "+ tipo + ".")
} else {
    document.write("Não é possível formar um triângulo.");
}
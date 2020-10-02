// Escreva um programa que leia os dias de vida de uma pessoa e imprima na tela 
// a quantidade de dias, meses e anos que essa pessoa viveu. 

var leituraDias, dias, meses, anos;

leituraDias = parseInt(prompt("Informe quantos dias foram vividos"));

if (leituraDias >= 365) {
    anos = parseInt(leituraDias/365)
    leituraDias = leituraDias%365;
} else if (leituraDias >= 30) {
    meses = parseInt(leituraDias/30)
    leituraDias = leituraDias%30;    
} else {
    dias = leituraDias;
}

document.write("Esse pessoa viveu:<br>")
if (anos > 0) {
    document.write("anos: " + anos + ".<br>");
} else if (meses > 0) {
    document.write("meses: " + meses +".<br>")
} else {
    document.write("Dias: " + dias + ".")
}
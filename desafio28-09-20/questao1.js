// Suponha que você trabalhe em uma obra de construção civil onde não ocorrem acidentes há 1000 horas e lhe é dada a tarefa de exibir em um letreiro esta quantidade convertida para
// semanas, dias e horas (5 semanas, 6 dias e 16 horas). Escreva um programa que realize a conversão solicitada para qualquer valor de entrada. O programa deve ler pelo teclado a quantidade
// de horas sem acidentes e imprimir na tela o valor correspondente em semanas inteiras, dias inteiros avulsos e horas avulsas. 

var semanas, dias, entradaDeHoras;

entradaDeHoras = parseInt(prompt("Digite aqui a quantidade de horas sem acidentes"));

if (entradaDeHoras > 0) {
    document.write("Esta obra encontra-se há ");

    if (entradaDeHoras >= 168) {
        semanas = parseInt(entradaDeHoras/168);
        entradaDeHoras = (entradaDeHoras%168);
        document.write(semanas + " semanas");
    } else if (entradaDeHoras >= 24) {
        dias = parseInt(entradaDeHoras/24);
        entradaDeHoras = (entradaDeHoras%24);
        if (semanas > 0) {
            document.write(" e ")
        }
        document.write(dias + " dias");
    }

    document.write(" sem acidentes.")
} else {document.write("A obra encontra-se há menos de uma hora sem acidentes.")}

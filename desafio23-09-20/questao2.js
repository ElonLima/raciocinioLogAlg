// Sabe-se que, no Brasil, o alistamento militar é obrigatório para homens maiores de
// idade e brasileiros natos, caso o país esteja em paz, e para qualquer brasileiro nato e
// maior de idade, caso o país esteja em guerra. Escreva um programa que leia o sexo, a
// idade, a nacionalidade de um indivíduo e o estado em que se encontra a nação (guerra
// ou paz) e mostre 1, se o indivíduo for obrigado a se alistar, ou 0, caso contrário.

    var alistamentoObrigatorio;
    var bloqueiaMensagemFinal = "NÃO";
    var sexo = prompt("Digite seu sexo (M para masculino e F para feminino)").toUpperCase();
    var idade = parseInt(prompt("Digite sua idade"));
    var nacionalidade = prompt("Digite sua nacionalidade").toLowerCase();
    var guerraOuPaz =  prompt("Seu estado está em guerra ou paz?").toLowerCase();

    if (idade > 17) {
        if (guerraOuPaz === "guerra") {
            if (nacionalidade === "brasileiro" || nacionalidade === "brasileira") {
                alistamentoObrigatorio = "1";
            } else {
                alistamentoObrigatorio = "0";
            }
        } else if (guerraOuPaz === "paz") {
            if (sexo === "M") {
                if (nacionalidade === "brasileiro") {
                    alistamentoObrigatorio = "1";
                } else {
                    alistamentoObrigatorio = "0";
                }
            } else {
                alistamentoObrigatorio = "0";
            }
        } else {
            bloqueiaMensagemFinal = "SIM";
            document.write("Esse programa só aceita as palavras 'GUERRA' ou 'PAZ' como resposta.<br>Você digitou "+guerraOuPaz+".<br>Por favor, reinicie o programa.")
        }
    } else if (idade <= 17) {
        alistamentoObrigatorio = "0";
    } else {
        bloqueiaMensagemFinal = "SIM";
        document.write("Por favor, reiniciar o programa e digitar sua idade utilizando números.");
    } 

    if (bloqueiaMensagemFinal === "NÃO") {
        document.write("O programa mostrará o número zero, em caso de alistamento obrigatório, e o número um, caso contrário.<br>Resultado: " + alistamentoObrigatorio + ".");
    }
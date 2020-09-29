// O sistema de notas da Unifor possui 3 etapas chamadas AV1, AV2, e AV3. Para o
// aluno estar apto a cursar a AV3, ele precisa ter atingido média 4 entre AV1 e AV2. Para
// o aluno obter aprovação, ele precisa ter nota mínima de 4 na AV3, e a média entre a
// nota da AV3 e a média da AV1 e AV2 precisa ser pelo menos 5. Faça um programa que
// leia as notas da AV1 e AV2, avalie se o aluno está apto a seguir para a AV3. Caso
// esteja, o aluno deve solicitar a nota da AV3 e verificar se o aluno obteve aprovação.

var av1, av2, av3, mediaDeAcesso, mediaFinal;

av1 = parseFloat(prompt("Digite a nota da AV1"));
av2 = parseFloat(prompt("Digite a nota da AV2"));

mediaDeAcesso = (av1 + av2)/2;

if (mediaDeAcesso >= 4) {
	av3 = parseFloat(prompt("Digite a nota da AV3"));
	
	if (av3 >= 4) {
		mediaFinal = (mediaDeAcesso + av3)/2
		if (mediaFinal >= 5) {
			document.write("O aluno foi aprovado. <br> Sua média final é "+ mediaFinal.toFixed(1)+".");
		} else {
		document.write("Infelizmente a nota do aluno não foi suficiente para sua aprovação. <br>Sua nota foi "+ mediaFinal.toFixed(1)+"." );
		}
	} else {
		document.write("O aluno não atingiu a nota mínima na AV3.");
	}
} else {
	document.write("Infelizmente a média de suas duas primeiras notas é suficiente para que o aluno tenha acesso à AV3.<br>");
	document.write("Sua média (considerando AV1 e AV2) foi inferior a 4.0, que é o mínimo necessário é 4.0.");
}
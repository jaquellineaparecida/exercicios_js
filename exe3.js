/*

1) Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima
a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:

- Média menor que 5, reprovado;
- Media entre 5 e 7, recuperação;
- Media acima de 7, aprovado

*/

console.log('---- CONFIRME A SUA NOTA ----');

const nota1 = 8;
const nota2 = 6;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('O aluno foi reprovado com a média de: ' + media)
}
else if (media >= 5 && media <= 7) {
    console.log('O aluno ficou de recuperação com a média de: ' + media)
}
else {
    console.log('O aluno foi aprovado com a média de: ' + media)
}

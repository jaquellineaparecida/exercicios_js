/*

3) Elabore um algortimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição do pagamento 
Utilize os codigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequado 

Código condição de pagamento:
1 - A vista Débito, recebe 10% de desconto;
2 - A vista no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de 2 vezes, preço normal de etiqueta, com 10% de juros;
*/

console.log('---- CALCULO DE PRODUTOS ----');
const precoProduto = 100;
const formaPagemento = 4;

if (formaPagemento == 1 ) {
    precoTotal = (precoProduto - (precoProduto * (10 / 100)));
    console.log('O preço do seu produto é de: ' + precoTotal)
}
else if (formaPagemento == 2) {
    precoTotal = (precoProduto - (precoProduto * (15 / 100)));
    console.log('O preço do seu produto é de: ' + precoTotal)
}
else if (formaPagemento == 3) {
    console.log('O preço do seu produto é de: ' + precoTotal)
}
else if (formaPagemento == 4) {
    precoTotal = (precoProduto + (precoProduto * (10 / 100)));
    console.log('O preço do seu produto é de: ' + precoTotal)
}
else {
    console.log('Forma de pagamento não encontrada!')
}
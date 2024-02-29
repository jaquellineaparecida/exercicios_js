/*  2) Elabore um algoritmo que dado o peso e a altura de um adulto mostre a sua condição 
conforme a tabela abaixo 

IMC em adultos Condição 
-  Abaixo de 18.5 Abaixo do peso
- Entre 18.5 e 25 Peso normal
- Entre 25 e 30 Acima do peso
- Entre 30 e 40 Obeso 
- Acima de 40 Obesidade Grave

IMC = peso / (altura * altura)

*/

const peso = 70
const altura = 1.75
imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Abaixo do peso')
}
else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal')
}
else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso')
}
else {
    console.log('Obesidade grave')
}
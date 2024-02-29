/* 
    3. Faça um programa que solicite ao usuário para informar o valor da umidade atual do ambiente, 
    correspondente a porcentagem de umidade no ar, este programa deverá mostrar apenas uma das seguintes frases abaixo
    O ar está úmido quando a umidade for maior que 60
    O ar está seco quando a umidade for maior igual a 30 e menor igual a 60
    O ar está muito seco quando a umidade for menor que 30

    Utilize o if encadeado para resolver esta questão
*/ 

var umidadeAtual = 20;

if (umidadeAtual > 60 ) {
    console.log('O ar está úmido');
} else if (umidadeAtual >= 30 && umidadeAtual <= 60) {
    console.log('O ar está seco');
} else if (umidadeAtual < 30) {
    console.log('O ar está muito seco');
} 
 
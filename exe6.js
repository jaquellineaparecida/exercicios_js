
/* Organizando um exercício em uma função

*/

function calcularImc (peso, altura) {
    return peso / (altura * altura);
}

function classificarImc (imc) {
    if (imc < 18.5) {
       return 'Abaixo do peso';
    }
    else if (imc >= 18.5 && imc <= 25) {
        return 'Peso normal';
    }
    else if (imc >= 25 && imc <= 30) {
       return 'Acima do peso';
    }
    else {
        return 'Obesidade grave';
    }
}

function main() {
    const peso = 67
    const altura = 1.64

    imc = calcularImc(peso, altura)
    console.log(classificarImc(imc));
}


main();

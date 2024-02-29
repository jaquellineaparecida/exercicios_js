/*
    1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de gasolina por km rodado.
    Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar esse percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(distancia, precoCombustivel) {
        const result = distancia * this.gastoMedioPorKm * precoCombustivel;
        return result;
    }
}

const uno = new Carro ('Fiat', 'Branco', 1 /12 );
console.log(uno.calcularGasto(70, 5));
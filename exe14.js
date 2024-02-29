/* 
    2-) Crie uma classe para representar pessoas. Para cada pessoa teremos como atributos nome, peso e altura. As pessoas devem ter a capacidade 
    de dizer o seu IMC (IMC = peso / (altura * altura)); 
    Instancie uma pessoa chamada Lucas que tenha 70kg e 1.75 de altura e peça ao Lucas para dizer o valor do seu IMC

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    classificarImc (imc) {
        if (imc < 18.5) {
           const classific = 'Abaixo do peso';
           return classific;
        }
        else if (imc >= 18.5 && imc <= 25) {
            const classific = 'Peso normal';
            return classific;
        }
        else if (imc >= 25 && imc <= 30) {
            const classific = 'Acima do peso';
            return classific;
        }
        else {
            const classific = 'Obesidade grave';
            return classific;
        }
    }
}

const lucas = new Pessoa('Lucas',70, 1.75);
const imc = lucas.calcularImc();
const classificacao = lucas.classificarImc(imc);

console.log(`IMC: ${imc}`);
console.log(`Classificação: ${classificacao}`);
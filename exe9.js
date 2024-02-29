// Praticando objetos com javascript

// Criando classes 

class Pessoa {
    nome;
    idade;

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const jaquelline = new Pessoa();
console.log(jaquelline);
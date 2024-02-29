class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const vitor = new Pessoa('Vitor', 23);

console.log(vitor);
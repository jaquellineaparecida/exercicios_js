// Faça uma função para que verifique se você é maior de idade 

function calculaIdade (anoNascimento) {
    idade = 2023 - anoNascimento;
    return idade 
}

function verificaIdade (idade) {
    if (idade >= 18) {
        result = 'maior de idade'
        return result
    }
    else {
        result = 'menor de idade'
        return result
    }
}

(function () {
    anoNascimento = 2004
    calculaIdade(anoNascimento)
    verificaIdade(idade);
    console.log('Você é ' + result)
}) ()
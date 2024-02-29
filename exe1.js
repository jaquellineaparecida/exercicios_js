// Desafio 1 - Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis, sendo elas: valor do combustível, gasto médio do combustível do carro por KM, distância de KM da viagem.
// Imprima no console o valor que será gasto para realizar esta viagem.

console.log('---- CALCULANDO O VALOR DE VIAGENS ----');

const precoCombustivel = 5.79;
const gastoMedioKm = 10
const distanciaKm = 100

const result = (distanciaKm/gastoMedioKm) * precoCombustivel;

console.log('O valor que você precisará gastar por esta viagem é de: ' + result.toFixed(2));
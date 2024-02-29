// Faça um programa para calcular o valor de uma viagem, Tendo 5 variáveis, preço do ethanol, preço da gasolina, tipo de combustível que está no seu carro, gasto médio ded combustível do carro por KM, distancia em KM da viagem.
// Imprima no console o valor que será gasto para realizar esta viagem.

console.log('---- CALCULANDO O VALOR DE VIAGENS ----');

const precoGasolina = 5.80;
const precoEthanol = 3.64;
const gastoMedioKm = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Gasolina'

if (tipoCombustivel === 'Ethanol') {
    const result = (distanciaKm/gastoMedioKm) * precoEthanol;
    console.log('O valor que você precisará gastar por esta viagem é de: ' + result.toFixed(2));
} else {
    const result = (distanciaKm/gastoMedioKm) * precoGasolina;
    console.log('O valor que você precisará gastar por esta viagem é de: ' + result.toFixed(2));
}




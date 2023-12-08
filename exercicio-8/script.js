// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let numero1 = Number(prompt('Digite o primeiro numero'));
let numero2 = Number(prompt('Digite o segundo numero'));

if (numero1 == numero2) {
    console.log('Os dois numeros são iguais!');
    document.write('Os dois numeros são iguais!');
} else if (numero1 > numero2) {
    console.log('Numero 1 maior que o numero 2!');
    document.write('Numero 1 maior que o numero 2!');
} else {
    console.log('Numero 2 maior que o numero 1!');
    document.write('Numero 2 maior que o numero 1!');
}
// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let numeroInteiroPositivo = Number(prompt('Digite um numero inteiro positivo'));
let numeroResultado = numeroInteiroPositivo%2;
if(numeroResultado == 0){
    console.log('Numero é par!');
    document.write('Numero é par!');
}else{
    console.log('Numero é impar!');
    document.write('Numero é impar!');
}
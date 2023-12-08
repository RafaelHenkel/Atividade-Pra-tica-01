// 12. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = Number(prompt('Digite o ano atual'));
let anoNascimento = Number(prompt('Digite o ano de nascimento'));
let calculoAno = anoAtual-anoNascimento;

console.log(calculoAno);
if(calculoAno>=18){
    console.log('Você podera votar!');
    document.write('Você podera votar!');
}else{
    console.log('Você não pode votar!!');
    document.write('Você não pode votar!!');
}
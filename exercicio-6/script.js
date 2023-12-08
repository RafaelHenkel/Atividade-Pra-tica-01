// 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
// atribuições entre variáveis) troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final,
// escrever os valores que ficaram armazenados nas variáveis.

let variavelA = 10;
let variavelB = 20;
let temporaria = variavelA;

console.log(`Variavel A ${variavelA}, Variavel B ${variavelB}`);
document.write(`Variavel A ${variavelA}, Variavel B ${variavelB} <br>`);


variavelA = variavelB;
variavelB = temporaria;

console.log(`Variavel A ${variavelA}, Variavel B ${variavelB}`);
document.write(`Variavel A ${variavelA}, Variavel B ${variavelB}`);


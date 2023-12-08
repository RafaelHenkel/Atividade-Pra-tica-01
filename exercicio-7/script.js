// 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.


let votosBrancos = Number(prompt('Digite a quantidade de votos brancos'));
let votosNulos = Number(prompt('Digite a quantidade de votos nulos'));
let votosValidos = Number(prompt('Digite a quantidade de votos validos'));
let eleitores = votosBrancos + votosNulos + votosValidos;
let percentualBrancos = (votosBrancos / eleitores) * 100;
let percentualNulos = (votosNulos / eleitores) * 100;
let percentualValidos = (votosValidos / eleitores) * 100;

console.log(`Quantidade de votos ${eleitores} votos brancos ${percentualBrancos.toFixed(2)}%, votos nulos ${percentualNulos.toFixed(2)}%, votos validos ${percentualValidos.toFixed(2)}%`);
document.write(`Quantidade de votos ${eleitores} votos brancos ${percentualBrancos.toFixed(2)}%, votos nulos ${percentualNulos.toFixed(2)}%, votos validos ${percentualValidos.toFixed(2)}%`);
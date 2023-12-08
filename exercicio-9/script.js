// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let menosDeUmaDuzia = 0.30;
let maisDeUmaDuzia = 0.25;
let quantidadeDeMaca = Number(prompt('digite a quantidade de maças compradas:'));

if (quantidadeDeMaca >= 12) {
    let valorTotal = maisDeUmaDuzia * quantidadeDeMaca;
    console.log(`Valor total da compra ${valorTotal.toFixed(2)}`);
    document.write(`Valor total da compra ${valorTotal.toFixed(2)}`);
} else {
    let valorTotal = menosDeUmaDuzia * quantidadeDeMaca;
    console.log(`Valor total da compra ${valorTotal.toFixed(2)}`);
    document.write(`Valor total da compra ${valorTotal.toFixed(2)}`);
}

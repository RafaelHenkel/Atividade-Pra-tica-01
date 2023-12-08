// 3. Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

let compra = 149.9;
let parcelas = 2;
let valorParcela = 74.95;

console.log(`O valor total da compra foi R$${compra.toFixed(2)}`);
console.log(`Forma de pagamento: ${parcelas} parcelas de R$${valorParcela}`);

document.write(`O valor total da compra foi R$${compra.toFixed(2)}<br>`);
document.write(`Forma de pagamento: ${parcelas} parcelas de R$${valorParcela}`);

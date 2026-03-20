/*
    Atalho p/ comentário: 
    alt + shift + a
*/

/* 
    Desafio: criar uma função que receba
    preço e desconto em % e mostrar o 
    valor final com desconto.
    Criar outra função que receba preço
    e mostre o valor total da compra.
*/

function valorDesconto(preco, desconto){
    const valorFinal = preco - (preco * (desconto / 100));
    console.log(`O valor final é: ${valorFinal}`);

}

valorDesconto(1000, 5);

function total(preco, quantidade){
    const valorTotal = preco * quantidade;
    return (`O valor total é: ${valorTotal}`);
}

total(100, 12);


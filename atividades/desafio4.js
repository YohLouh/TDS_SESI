let preco = 200;
let final = preco > 100 ? preco - (preco * 0.10) : preco;

console.log(`O valor final será de: ${final}`);

/*  
    Aplicação de desconto para valores acima
    de 100, manntendo caso seja menor.
    Como o desconto seria de 0,10 (10%), será 
    diminuido esse tanto do valor original, 
    nesse caso 200, e o valor final ficará
    igual a 180!
*/
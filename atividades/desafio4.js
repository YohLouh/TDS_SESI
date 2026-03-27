let preco = 150;
let final = preco > 100 ? preco - (preco * 0.10) : preco;

console.log(final);

/*  
    Como o desconto será de 0,10 (10%), será 
    diminuido esse tanto do valor original, 
    nesse caso 150, e ficará igual a 135!
*/
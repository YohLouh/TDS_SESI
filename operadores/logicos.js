let  temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;

let resultadoAND = "#AND Você vai ao shopping?\n";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR Você vai ao shopping?\n";
resultadoOR += temDinheiro || carroEstaNaGaragem;
console.log(resultadoOR);


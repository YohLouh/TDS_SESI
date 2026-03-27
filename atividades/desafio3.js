let idade = 7;
let possuiConvite = true;

if (idade >= 18 && possuiConvite == true){
    console.log("Você está autorizado a entrar!");
} else {
    console.log("Você NÃO está autorizado a entrar.");
}

// Com operador ternário
let mensagem = idade > 18 && possuiConvite == true ? "Pode entrar!" : "NÃO pode entrar!";

console.log(mensagem);
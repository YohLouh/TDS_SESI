let nota1 = 10.0;
let nota2 = 8.0;
let media = (nota1 + nota2)/2;
console.log(`A média é: ${media}`);

if(media > 10){
    console.log("Inválidas as notas!");
} else if (media >= 7){
    console.log("Aprovado!");
} else if (media <= 6.9 && media >= 5){
    console.log("Recuperação.");
} else {
    console.log("Reprovado...");
} 
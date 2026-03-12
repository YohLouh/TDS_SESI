// Desafio

let nota1 = 3.0;
let nota2 = 1.0;
let mediaAluno = (nota1 + nota2)/2;
const media = 7.5;

console.log("Média é: " + mediaAluno);

if (mediaAluno > media) {
    console.log("Aprovado!");
} else if (mediaAluno < media && mediaAluno > 3){
    console.log("Recuperação...");
} else {
    console.log("Reprovado.");
}
var nota1;
var nota2;
var nota3;
var nome;
var media;

nome = prompt("Digite seu nome: ");
nota1 = prompt("Digite a nota da primeira prova: ");
nota2 = prompt("Digite a nota da segunda prova: ");
nota3 = prompt("Digite a nota da terceira prova: ");

media = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) / 3;

alert("Media do aluno " + nome + " e: " + media.toFixed);


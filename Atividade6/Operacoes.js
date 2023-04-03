var Numero1;
var Numero2;
var soma;
var subtracao;
var protudo;
var divisao;
var resto;


Numero1 = prompt("Digite o primeiro número: ");
Numero2 = prompt("Digite o segundo número: ");

soma = parseFloat(Numero1) + parseFloat(Numero2);
subtracao = parseFloat(Numero1) - parseFloat(Numero2);
protudo = parseFloat(Numero1) * parseFloat(Numero2);
divisao = parseFloat(Numero1) / parseFloat(Numero2);
resto = parseFloat(Numero1) % parseFloat(Numero2);


alert("A Soma dos números é: " + soma);
alert("A Subtração dos números é: " + subtracao);
alert("O produto dos números é: " + protudo);
alert("A divisão dos números é: "  + divisao);
alert("O resto dos números é: " + resto);


var num1 = prompt("Digite numero 1:" );
var num2 = prompt("Digite numero 2:" );
var num3 = prompt("Digite numero 3:" );

function encontrarMaiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
  

  function ordenarNumeros(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
      return a - b;
    });
    return numeros;
  }
  
import { encontrarMaiorNumero, ordenarNumeros } from './funcoes.js';

let maiorNumero = encontrarMaiorNumero(num1, num2, num3);
alert("O maior número é " + maiorNumero);

let numerosOrdenados = ordenarNumeros(num1, num2, num3);
alert("Os números em ordem crescente são " + numerosOrdenados.join(", "));

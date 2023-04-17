let idadeTotal = 0; 
let idadeMaisVelha = 0;
let idadeMaisNova = 0; 
let qtdPessimo = 0; 
let qtdOtimoBom = 0; 
let qtdMulheres = 0; 
let qtdHomens = 0; 

for (let i = 0; i < 45; i++) {
    let idade = prompt("Qual é a sua idade?");
    let sexo = prompt("Qual é o seu sexo? Responda M para mulher ou H para homem.");
    let opiniao = prompt("Qual é a sua opinião sobre o filme? Responda 1 para péssimo, 2 para regular, 3 para bom ou 4 para ótimo.");
  

    idade = parseInt(idade);
  

    idadeTotal += idade;
  

    if (idade > idadeMaisVelha) {
      idadeMaisVelha = idade;
    }
    if (idade < idadeMaisNova || idadeMaisNova === 0) {
      idadeMaisNova = idade;
    }
  

    if (opiniao === "1") {
      qtdPessimo++;
    }
  

    if (opiniao === "3" || opiniao === "4") {
      qtdOtimoBom++;
    }
  

    if (sexo === "M") {
      qtdMulheres++;
    } else if (sexo === "H") {
      qtdHomens++;
    }
  }
  

  let mediaIdade = idadeTotal / 45;
  

  let porcentagemOtimoBom = (qtdOtimoBom / 45) * 100;
  
  alert(`Média da idade das pessoas que responderam ao questionário: ${mediaIdade}
  Idade da pessoa mais velha: ${idadeMaisVelha}
  Idade da pessoa mais nova: ${idadeMaisNova}
  Quantidade de pessoas que responderam péssimo: ${qtdPessimo}
  Porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOtimoBom}%
  Número de mulheres que responderam ao questionário: ${qtdMulheres}
  Número de homens que responderam ao questionário: ${qtdHomens}`);

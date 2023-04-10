
const pedraButton = document.getElementById("pedra");
const papelButton = document.getElementById("papel");
const tesouraButton = document.getElementById("tesoura");
const resultadoElement = document.getElementById("resultado");


pedraButton.addEventListener("click", () => playGame("pedra"));
papelButton.addEventListener("click", () => playGame("papel"));
tesouraButton.addEventListener("click", () => playGame("tesoura"));


function playGame(userChoice) {

    const choices = ["pedra", "papel", "tesoura"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];


    let resultado;
    if (userChoice === computerChoice) {
        resultado = "Empate!";
    } else if (
        (userChoice === "pedra" && computerChoice === "tesoura") ||
        (userChoice === "papel" && computerChoice === "pedra") ||
        (userChoice === "tesoura" && computerChoice === "papel")
    ) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Você perdeu!";
    }


    resultadoElement.textContent = `Você escolheu ${userChoice}. O computador escolheu ${computerChoice}. ${resultado}`;
}
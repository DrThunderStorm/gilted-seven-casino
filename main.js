// main.js

// Variables globales
let playerMoney = 100;

// Fonction pour jouer à la machine à sous
function playSlotMachine() {
    // Récupérer la mise du joueur
    const betInput = document.getElementById("bet");
    const bet = parseInt(betInput.value);

    // Vérifier la mise
    if (isNaN(bet) || bet < 1 || bet > playerMoney) {
        alert("Invalid bet.");
        return;
    }

    // Soustraire la mise de l'argent du joueur
    playerMoney -= bet;

    // Générer le tirage de symboles
    const reels = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        reels.push(symbols[randomIndex]);
    }

    // Afficher le tirage de symboles
    const reelsDisplay = document.getElementById("reels");
    reelsDisplay.textContent = reels.join(" ");

    // Vérifier les gains
    let winAmount = 0;
    if (reels[0] === reels[1] && reels[1] === reels[2]) {
        winAmount = symbolValues[reels[0]] * 2 * bet;
    } else if (reels[0] === reels[1] || reels[1] === reels[2] || reels[0] === reels[2]) {
        winAmount = symbolValues[reels[1]] * bet;
    }

    // Ajouter les gains à l'argent du joueur
    playerMoney += winAmount;

    // Afficher les résultats
    const resultsDisplay = document.getElementById("results");
    if (winAmount > 0) {
        resultsDisplay.textContent = `You won ${winAmount}$!`;
    } else {
        resultsDisplay.textContent = "You didn't win this round.";
    }

    // Mettre à jour l'argent du joueur
    const moneyDisplay = document.getElementById("money");
    moneyDisplay.textContent = playerMoney + "$";
}

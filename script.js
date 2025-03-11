function updateProbability() {
    let veerWins = Math.floor(Math.random() * 100);
    let aryanWins = 100 - veerWins;

    document.getElementById("veerProb").innerText = veerWins;
    document.getElementById("aryanProb").innerText = aryanWins;
}

function rollDice() {
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const diceValues = { '⚀': 1, '⚁': 2, '⚂': 3, '⚃': 4, '⚄': 5, '⚅': 6 };
    
    const randomFace1 = diceFaces[Math.floor(Math.random() * diceFaces.length)];
    const randomFace2 = diceFaces[Math.floor(Math.random() * diceFaces.length)];
    
    document.getElementById("dice1").innerText = randomFace1;
    document.getElementById("dice2").innerText = randomFace2;
    
    const score1 = diceValues[randomFace1];
    const score2 = diceValues[randomFace2];
    const totalScore = score1 + score2;
    
    document.getElementById("result").innerText = `Total Score: ${totalScore}`;
    
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML += `🎲 ${randomFace1} - ${randomFace2} (Total: ${totalScore})<br>`;
    
    let audio = new Audio('https://www.myinstants.com/media/sounds/dice-roll.mp3');
    audio.play();
}
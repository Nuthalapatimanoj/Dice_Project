let player1Roll = 0;
let player2Roll = 0;

function rollPlayer1() {
  player1Roll = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + player1Roll + ".jpg";
  var randomImageSource = "images/" + randomDiceImage;
  
  var player1Image = document.getElementById("player1Dice");
  player1Image.setAttribute("src", randomImageSource);
  
  document.getElementById("h1").innerHTML = "Player 1 has rolled. Now, Player 2 roll!";
}

function rollPlayer2() {
  player2Roll = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + player2Roll + ".jpg";
  var randomImageSource = "images/" + randomDiceImage;
  
  var player2Image = document.getElementById("player2Dice");
  player2Image.setAttribute("src", randomImageSource);
  
  document.getElementById("h1").innerHTML = "Player 2 has rolled. Click 'Determine Winner' to see the result!";
}

function determineWinner() {
  if (player1Roll === 0 || player2Roll === 0) {
    document.getElementById("h1").innerHTML = "Both players need to roll their dice first!";
    return;
  }

  let resultMessage = "";

  if (player1Roll > player2Roll) {
    resultMessage = "🚩 Player 1 Wins!";
  } else if (player2Roll > player1Roll) {
    resultMessage = "Player 2 Wins! 🚩";
  } else {
    resultMessage = "It's a draw! Try again.";
  }

  document.getElementById("h1").innerHTML = resultMessage;
}

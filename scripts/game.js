let game = {
    score: 0,
    curretGame : [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.curretGame = [];
    showScore();
};

function showScore() {
    document.getElementById("score").innerText = game.score;
};


module.exports = { game, newGame, showScore };
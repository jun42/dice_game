const startGame = () => {
  let currentPlayer = "player1";
  const player_data = {
    player1: {
      name: "player1",
      score: 0,
    },
    player2: {
      name: "player2",
      score: 0,
    },
  };
  const initGame = () => {
    location.reload();
  };
  const changeTurn = () => {
    const players = document.querySelectorAll(".player");
    players.forEach((element) => {
      element.classList.toggle("player--turn");
    });

    if (currentPlayer === "player1") {
      currentPlayer = "player2";
    } else {
      currentPlayer = "player1";
    }
    console.log(currentPlayer);
  };

  const rollDiceBtnHandler = () => {
    const turn = document.querySelector(".player--turn");
    const dice = document.querySelector(".play-button__dice-number");
    const currentScore = turn.querySelector(".player__current-info__score");
    const smallNumber = 2;
    const num = Math.floor(Math.random() * 6) + 1;
    dice.innerText = String(num);
    if (num <= smallNumber) {
      currentScore.innerText = "0";
      changeTurn();
    } else {
      currentScore.innerText = `${Number(currentScore.innerText) + num}`;
    }
  };
  const endGame = () => {
    const turn = document.querySelector(".player--turn");
    turn.classList.add("player--win");
    holdBtn.removeEventListener("click", holdBtnHandler);
    rollDiceBtn.removeEventListener("click", rollDiceBtnHandler);
  };
  const holdBtnHandler = () => {
    const turn = document.querySelector(".player--turn");
    const currentScore = turn.querySelector(".player__current-info__score");
    const playerScore = turn.querySelector(".player__info__score");
    const recordScore = () => {
      player_data[currentPlayer].score += Number(currentScore.innerText);
      playerScore.innerText = player_data[currentPlayer].score;
      currentScore.innerText = "0";
    };
    const isWin = (score, goal = 50) => {
      return score > goal;
    };
    recordScore();
    if (isWin(player_data[currentPlayer].score, 10)) {
      endGame();
    } else {
      changeTurn();
    }
  };
  const newGameBtn = document.querySelector(".play-button__new-game");
  newGameBtn.addEventListener("click", initGame);

  const rollDiceBtn = document.querySelector(".bottom-nav__roll-dice-btn");
  rollDiceBtn.addEventListener("click", rollDiceBtnHandler);

  const holdBtn = document.querySelector(".bottom-nav__hold-btn");
  holdBtn.addEventListener("click", holdBtnHandler);
};

startGame();

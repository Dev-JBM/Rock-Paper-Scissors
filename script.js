let HumanScore = 0;
let ComputerScore = 0;
let roundCount = 1;

document
  .getElementById("rock-btn")
  .addEventListener("click", () => playGame(0));
document
  .getElementById("paper-btn")
  .addEventListener("click", () => playGame(1));
document
  .getElementById("scissors-btn")
  .addEventListener("click", () => playGame(2));

function getHumanChoice(HumanChoice) {
  if (HumanChoice === 0) {
    document.getElementById("humanImg").src = "rock.png";
    return "ROCK";
  } else if (HumanChoice === 1) {
    document.getElementById("humanImg").src = "paper.png";
    return "PAPER";
  } else if (HumanChoice === 2) {
    document.getElementById("humanImg").src = "scissors.png";
    return "SCISSORS";
  }
  return "error";
}

function getComputerChoice() {
  let CompChoice = Math.random();

  if (CompChoice >= 0.66) {
    document.getElementById("computerImg").src = "rock.png";
    return "ROCK";
  } else if (CompChoice >= 0.33) {
    document.getElementById("computerImg").src = "paper.png";
    return "PAPER";
  } else {
    document.getElementById("computerImg").src = "scissors.png";
    return "SCISSORS";
  }
}

function playGame(humanChoiceNumber) {
  const humanSelection = getHumanChoice(humanChoiceNumber);
  const computerSelection = getComputerChoice();

  setTimeout(() => {
    if (humanSelection === computerSelection) {
      alert("DRAW!");
    } else if (
      (humanSelection === "ROCK" && computerSelection === "PAPER") ||
      (humanSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (humanSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
      ComputerScore++;
      alert(`You Lose! ${computerSelection} beats ${humanSelection}.`);
    } else {
      HumanScore++;
      alert(`You Win! ${humanSelection} beats ${computerSelection}.`);
    }

    if (confirm("Next Round?")) {
      roundCount++;
      document.getElementById("computerImg").src = "rock.png";
      document.getElementById("humanImg").src = "rock.png";
    } else {
      alert("Thanks for playing!");
    }

    document.getElementById("roundCount").textContent = roundCount;
    document.getElementById("computerScore").textContent = ComputerScore;
    document.getElementById("humanScore").textContent = HumanScore;
  }, 800);
}

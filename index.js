var level = 0;

function selectDice() {
  document.querySelector(".computer-selected").classList.remove('scissors', 'lizard', 'paper', 'rock', 'spock');

  var dices = [
    'lizard',
    'paper',
    'scissors',
    'rock',
    'spock'
  ];

  var randomNumber = (Math.floor(Math.random() * 5));
  var randomDice = dices[randomNumber];

  if (randomDice === "scissors") {
    document.querySelector(".computer-selected").classList.add('scissors');
  }
  if (randomDice === "lizard") {
    document.querySelector(".computer-selected").classList.add('lizard');
  }
  if (randomDice === "paper") {
    document.querySelector(".computer-selected").classList.add('paper');
  }
  if (randomDice === "rock") {
    document.querySelector(".computer-selected").classList.add('rock');
  }
  if (randomDice === "spock") {
    document.querySelector(".computer-selected").classList.add('spock');
  }

  var diceName = "images/icon-" + randomDice + ".svg";
  document.querySelector(".icon-computer").setAttribute("src", diceName);

  return randomDice;
}

function whoWins(userChoice, computerChoice) {
  console.log(userChoice);
  console.log(computerChoice);
  console.log('========');


  if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "rock" && computerChoice === "lizard") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "lizard" && computerChoice === "spock") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "spock" && computerChoice === "scissors") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "scissors" && computerChoice === "lizard") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "paper" && computerChoice === "spock") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "lizard" && computerChoice === "paper") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === "spock" && computerChoice === "rock") {
    console.log("User wins");
    document.querySelector('.win').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.user-selected').classList.add('shadow');
    level++;
    document.querySelector('.level-number').innerText=level;
  } else if (userChoice === computerChoice) {
    console.log("Nobody wins");
    document.querySelector('.nobody').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
  } else {
    console.log("Computer wins");
    document.querySelector('.loose').classList.remove('hidden');
    document.querySelector('.btn').classList.remove('hidden');
    document.querySelector('.computer-selected').classList.add('shadow');
    level--;
    document.querySelector('.level-number').innerText=level;
  }
}

const circlesList = document.querySelectorAll('.circles');
for (const value of circlesList) {
  value.onclick = function(event) {
    var userChoice = this.id;
    var userIcon = 'images/icon-' + userChoice + '.svg';

    document.querySelector(".user-selected").classList.remove('scissors', 'lizard', 'paper', 'rock', 'spock');
    document.querySelector(".user-selected").classList.add(userChoice);
    document.querySelector(".icon-user").setAttribute("src", userIcon);

    var computerChoice = selectDice();

    document.querySelector('#pentagon-box').classList.add('hidden');
    document.querySelector('.choice-box').classList.remove('hidden');

    whoWins(userChoice, computerChoice);
  };
}

document.querySelector('.btn').onclick = function() {
  document.querySelector('#pentagon-box').classList.remove('hidden');
  document.querySelector('.choice-box').classList.add('hidden');
  document.querySelector('.loose').classList.add('hidden');
  document.querySelector('.btn').classList.add('hidden');
  document.querySelector('.win').classList.add('hidden');
  document.querySelector('.nobody').classList.add('hidden');
  document.querySelector('.computer-selected').classList.remove('shadow');
  document.querySelector('.user-selected').classList.remove('shadow');
}

document.querySelector('.rules').onclick = function() {
  document.querySelector('.popup-background').classList.remove('hidden');
}

document.querySelector('.popup-background').onclick = function() {
  document.querySelector('.popup-background').classList.add('hidden');
}

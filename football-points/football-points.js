//Calculate points
function calculatePoints(wins, draws, losses) {
  return wins * 3 + draws + losses * 0;
}

//Get and validate input
function getInput() {
  const input = [
    (wins = Number(prompt('Enter the first number: '))),
    (draws = Number(prompt('Enter the second number: '))),
    (losses = Number(prompt('Enter the second number: '))),
  ];

  const isInputValid = input.every((el) => {
    return /\d/g.test(el) && el >= 0;
  });

  return isInputValid ? input : null;
}

//Output
function output(score) {
  console.log(`Total points: ${score}`);
}

//Run the program
(function () {
  let input;

  do {
    input = getInput();
    if (!input) alert('Enter only numbers greater than zero!');
  } while (!input);

  const [wins, draws, losses] = input;
  output(calculatePoints(wins, draws, losses));
})();

//Sum numbers
function sumTwoNumbers(n1, n2) {
  return n1 + n2;
}

//Get and validate input
function getInput() {
  const n1 = Number(prompt('Enter the first number: '));
  const n2 = Number(prompt('Enter the second number: '));

  const isInputValid = /\d/g.test(n1) && /\d/g.test(n2);

  return isInputValid ? [n1, n2] : null;
}

//Output
function output(n1, n2, total) {
  console.log(`The sum of ${n1} and ${n2} is ${total}.`);
}

//Run the program
(function () {
  let input;

  do {
    input = getInput();
    if (!input) alert('Enter only numbers!');
  } while (!input);

  const [n1, n2] = input;
  output(n1, n2, sumTwoNumbers(n1, n2));
})();

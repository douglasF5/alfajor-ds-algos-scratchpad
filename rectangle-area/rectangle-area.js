//Calculate rectangle area
function calculateArea(base, height) {
  const areArgumentsInvalid = [base, height].some((el) => el <= 0);

  if (areArgumentsInvalid) return -1;

  return base * height;
}

//Get and validate input
function getInput() {
  const input = [
    (base = Number(prompt('Enter the first number: '))),
    (height = Number(prompt('Enter the second number: ')))
  ];

  const isInputValid = input.every(el => {
    return /\d/g.test(el) && el > 0;
  });

  return isInputValid ? input : null;
}

//Output
function output(area) {
  console.log(`The area of this rectangle is ${area}.`);
}

//Run the program
(function () {
  let input;

  do {
    input = getInput();
    if (!input) alert('Enter only numbers greater than zero!');
  } while (!input);

  const [base, height] = input;
  output(calculateArea(base, height));
})();

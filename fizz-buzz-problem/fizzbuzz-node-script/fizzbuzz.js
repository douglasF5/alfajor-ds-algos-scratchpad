//GENERATE ARRAY NUMBERS
const generateNumbersArray = (upperLimit) => {
	let counter = 1;
	let numbersArray = [];

	while(counter <= upperLimit) {
    numbersArray.push(counter);
    counter++;
  }
  
  return numbersArray;
}

//GENERATE FIZZBUZZ
const fizzBuzz = (upperLimit) => {
  const numbersArray = generateNumbersArray(upperLimit);
  
  const fizz = (num) => !(num % 3) ? "Fizz" : "";
  const buzz = (num) => !(num % 5) ? "Buzz" : "";

  const fizzBuzzArray = numbersArray.map(num => {
    return fizz(num) + buzz(num) || String(num);
  });

  return fizzBuzzArray;
}

module.exports = fizzBuzz;

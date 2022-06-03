//Generate array of numbers
const generateNumbersArray = (upperLimit) => {
	let counter = 1;
	let numbersArray = [];

	while(counter <= upperLimit) {
    numbersArray.push(counter);
    counter++;
  }
  
  return numbersArray;
}

//Helper functions for string generation based on divisibility
const fizz = (num) => !(num % 3) ? "Fizz" : "";
const buzz = (num) => !(num % 5) ? "Buzz" : "";

//Generate the final array
const fizzBuzz = (upperLimit) => {
  const numbersArray = generateNumbersArray(upperLimit);
  let finalArray = [];
  
  numbersArray.forEach(num => {
	const displayValue = fizz(num) + buzz(num) || String(num);
	finalArray.push(displayValue);
  })
  
  return finalArray;
 }

//Print the final array
console.log(fizzBuzz(100));

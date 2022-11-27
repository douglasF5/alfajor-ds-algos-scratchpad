//Reverse array
function reverseArray(inputArray) {
  if (inputArray.length === 0) return inputArray;

  const reversedArray = [...inputArray];
  const lim = reversedArray.length - 1;

  for (let i = 0; i < lim / 2; i++) {
    [reversedArray[i], reversedArray[lim - i]] = [
      reversedArray[lim - i],
      reversedArray[i],
    ];
  }

  return reversedArray;
}

//Get and validate input
function getInput() {
  const inputArrays = [
    [1, 2, 3, 4],
    [5, 6, 7],
    [9, 9, 2, 3, 4],
    [3, 3],
    [-1, -1, -1],
    [],
  ];

  const randomIndex = Math.floor(Math.random() * (inputArrays.length - 1));
  return inputArrays[randomIndex];
}

//Output
function output(reversedArray) {
  console.log(reversedArray);
}

//Run the program
(function () {
  const input = getInput();
  output(reverseArray(input));
})();

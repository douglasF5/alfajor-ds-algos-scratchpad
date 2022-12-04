function decodeString(numberOfRows, encodedString) {
  // Write your code here
  const rowLen = encodedString.length / numberOfRows;
  const arr = encodedString.split('');
  let decodedString = '';

  for (let i = 0; i < rowLen; i++) {
    decodedString += arr[i];

    for (let j = 1; j < numberOfRows; j++) {
      let idx = i + rowLen * j + j;

      if (arr[idx] === undefined) break;
      decodedString += arr[idx];
    }
  }

  return decodedString.replace(/_/g, ' ').trim();
}

console.log(decodeString(3, 'mnes__ya_____mi'));//=> my name is

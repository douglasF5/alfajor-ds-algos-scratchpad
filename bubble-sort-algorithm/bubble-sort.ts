const arr = [2, 19, 1, 5, 8, 32, 6];

//ATTEMPT 1 => ALWAYS O(N^2)
function bubbleSort1(arr: number[]) {
  const sortedArr = [...arr];
  const arrLen = sortedArr.length;
  let temp: number;
  let runningCounter = 0;

  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      runningCounter++;
      if (sortedArr[j] > sortedArr[j + 1]) {
        temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  console.log(runningCounter);
  return sortedArr;
}

//ATTEMPT 2 => ONLY WORST CASE SCENARIO IS O(N^2)
function bubbleSort2(arr: number[]) {
  const sortedArr = [...arr];
  const arrLen = sortedArr.length;
  let swap: boolean;
  let runningCounter = 0;

  do {
    swap = false;

    for (let i = 0; i < arrLen; i++) {
      runningCounter++;
      if (sortedArr[i] > sortedArr[i + 1]) {
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);

  console.log(runningCounter);
  return sortedArr;
}

console.log(bubbleSort2(arr)); //=> [1, 2, 5, 6, 8, 19, 32]

const averageArr = [2, 19, 1, 5, 8, 32, 6];

function selectionSort(inputArr: number[]) {
  const arr = [...inputArr];
  const len = arr.length;
  let runningCounter = 0;

  for (let i = 0; i < len - 1; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < len; j++) {
      runningCounter++;

      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }

      if (smallestIndex !== i) {
        [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
      }
    }
  }

  console.log(runningCounter);
  return arr;
}

console.log(selectionSort(averageArr)); //=> [1, 2, 5, 6, 8, 19, 32]

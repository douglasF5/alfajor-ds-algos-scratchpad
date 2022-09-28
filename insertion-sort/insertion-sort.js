const averageArr = [2, 19, 1, 5, 8, 32, 6];
const worstArr = [32, 19, 8, 6, 5, 2, 1];

//APPROACH 1
function insertionSort1(inputArr: number[]) {
  const arr = [...inputArr];
  const len = arr.length;
  let runningCounter = 0;

  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        runningCounter++;
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }

  console.log(runningCounter);
  return arr;
}

//APPROACH 2
function insertionSort2(inputArr: number[]) {
  const arr = [...inputArr];
  const len = arr.length;
  let runningCounter = 0;
  let temp: number, j: number;

  for (let i = 1; i < len; i++) {
    temp = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      runningCounter++;
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = temp;
  }

  console.log(runningCounter);
  return arr;
}

console.log(insertionSort1(worstArr)); //=> [1, 2, 5, 6, 8, 19, 32]

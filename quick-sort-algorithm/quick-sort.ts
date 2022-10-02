let averageArr = [2, 19, 1, 5, 8, 32, 6];

//CORE IMPLEMENTATION
function quickSorting(inputArray: number[], lower: number, upper: number) {
  if (lower >= upper) {
    return;
  }

  let pivot: number = partition(inputArray, lower, upper);
  quickSorting(inputArray, lower, pivot - 1);
  quickSorting(inputArray, pivot + 1, upper);
}

function partition(inputArray: number[], lower: number, upper: number) {
  let pivot = inputArray[lower];
  let left: number = lower;
  let right: number = upper;

  while (left < right) {
    while (inputArray[left] <= pivot && left < upper) left++;
    while (inputArray[right] > pivot && right > lower) right--;

    if (left < right) {
      swapValues(inputArray, left, right);
      left++;
      right--;
    }
  }

  swapValues(inputArray, right, lower);
  return right;
}

function swapValues(arr: number[], idx1: number, idx2: number) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//WRAPPER FUNCTION
function quickSort(inputArray: number[]) {
  quickSorting(inputArray, 0, inputArray.length - 1);
}

quickSort(averageArr);
console.log(averageArr);
//=> [1, 2, 5, 6, 8, 19, 32]

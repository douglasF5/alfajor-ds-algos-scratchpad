function insertionSort(inputArr: number[]) {
  const arr = [...inputArr];
  const len = arr.length;
  let temp: number, j: number;

  for (let i = 1; i < len; i++) {
    temp = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = temp;
  }
  return arr;
}

function sumFour(arr: number[]) {
    return arr.reduce((acc, curr) => {
        return acc + curr;
    });
}

function miniMaxSum(arr: number[]): void {
    const len = arr.length;
    
    //sort the array
    const sortedArr = insertionSort(arr);
    
    //sum
    const min = sumFour(sortedArr.slice(0, len - 1));
    const max = sumFour(sortedArr.slice(len - 4, len));
    
    //printing results
    console.log(`${min} ${max}`);

    //TODO
    //[x] sort the array
    //[x] sum the first four and the last four elements
    //[x] print the result
}
    
//TESTING THE ALGORITHM
miniMaxSum([1, 2, 3, 4, 5]); //=> 10 14

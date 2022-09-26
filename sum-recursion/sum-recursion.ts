type NumbersList = number[];

const arr = [1, 2, 3];

//USING SIMPLE RECURSION
function sumRec(arr: NumbersList) {

  if(arr.length === 0) return 0;
  if(arr.length === 1) return arr[0];
  
  return arr[0] + sumRec(arr.slice(1, arr.length));
}

//USING TAIL RECURSION
function sumTailRec(arr: NumbersList, count: number = 0) {

  if(arr.length === 0) return count;
  if(arr.length === 1) {
    return arr[0] + count;
  };
  
  const last = arr.length - 1;
  return sum(arr.slice(0, last), arr[last] + count);
}

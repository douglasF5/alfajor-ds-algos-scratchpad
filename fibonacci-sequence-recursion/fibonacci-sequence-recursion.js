const generateFibonacciSequence = (len, i=0, arr=[1]) => {
  
  if(arr.length <= len){
    arr.push(arr.at(-1) + i);
    i = arr.at(-2);
    generateFibonacciSequence(len, i, arr);
  }
  
  return arr;
};

const fibonacciSequence = generateFibonacciSequence(5);

console.log(fibonacciSequence); // [1, 1, 2, 3, 5]

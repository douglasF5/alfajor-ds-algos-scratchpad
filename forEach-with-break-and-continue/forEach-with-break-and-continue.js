function forEvery(array, cb) {
  const arrayLen = array.length;
    
  for(let i = 0; i < arrayLen; i++) {
    let controlFlag = null;
    controlFlag = cb(array[i], i);
    
    if(controlFlag === true) {
      break;
    } else if(controlFlag === false) {
      continue;
    }
  }
}

const myArray = ["a", "b", "c", "d", "e"];

forEvery(myArray, (el) => {
  if(el === "c") {
    return true;
  }
  
  console.log("element: ", el);
});

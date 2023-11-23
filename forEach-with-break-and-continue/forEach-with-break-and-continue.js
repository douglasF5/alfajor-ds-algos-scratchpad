type NextIteration = 'break' | 'skip' | 'proceed';
type CallBackReturn = NextIteration | void;

function forEvery<TArray>(
  array: TArray[],
  cb: (element: TArray, index: number) => CallBackReturn
) {
  const arrayLen = array.length;

  for (let i = 0; i < arrayLen; i++) {
    const nextIteration: NextIteration = cb(array[i], i) || 'proceed';

    if (nextIteration === 'break') {
      break;
    }

    if (nextIteration === 'skip') {
      continue;
    }
  }
}

const myArray = ['a', 'b', 'c', 'd', 'e'];

forEvery(myArray, (el) => {
  if (el === 'c') {
    return 'skip';
  }

  console.log('element: ', el);
});

const input = `4
0 1 1 0
2`;

function useEnergy(e: number, tile: number) {
  e--;
  if (tile === 1) e -= 2;
  return e;
}

function stepThrough(input: string) {
  const arr = input.split('\n');
  const len = Number(arr[0]);
  const tiles = arr[1].split(' ').map(Number);
  const step = Number(arr[2]);
  let e = 100;
  let currIndex = 0 + step;

  do {
    e = useEnergy(e, tiles[currIndex]);
    currIndex = (currIndex + step) % len;
  } while (currIndex !== 0);

  e = useEnergy(e, tiles[currIndex]);

  return e;
}

console.log(stepThrough(input)); //=> 96

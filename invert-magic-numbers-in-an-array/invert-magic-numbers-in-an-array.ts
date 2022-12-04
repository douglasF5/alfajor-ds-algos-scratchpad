const input = `4
1 3 8 6 12`;

const arr2 = input.split('\n')[1].split(' ').map(Number);
const arrLen = Number(input2.split('\n')[0]) - 1;

function checkForMagic(n: number) {
  return n % 2 == 0 && n < 20;
}

function invertWithMagic(arr: number[]) {
  let magicIndices = [];

  for (let i = 0; i <= arrLen + 1; i++) {
    if (checkForMagic(arr[i])) magicIndices.push(i);
  }

  for (let i = 0; i < magicIndices.length / 2; i++) {
    let lim = magicIndices.length - 1;
    let temp = arr[magicIndices[i]];
    arr[magicIndices[i]] = arr[magicIndices[lim - i]];
    arr[magicIndices[lim - i]] = temp;
  }

  return arr.join(' ');
}

console.log(invertWithMagic(arr)); //=> "1 3 12 6 8"

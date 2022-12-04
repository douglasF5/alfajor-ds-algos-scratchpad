const input = `10
1 9 2 3 4 7 5 4 2 1`;

const arr = input.split('\n')[1].split(' ').map(Number);

function getFirstUnique(arr: number[]) {
  let uniqueSet = [];
  let duplicatesSet = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (!uniqueSet.includes(item)) {
      uniqueSet.push(item);
    } else {
      duplicatesSet.push(item);
    }
  }

  const firstUnique = uniqueSet.filter((item) => !duplicatesSet.includes(item));

  return arr.indexOf(firstUnique[0]);
}

console.log(getFirstUnique(arr)); //=> 1

const input = `3
1 30 1 1`;
const arr = input.split('\n')[1].split(' ').map(Number);

function getProfit(arr: number[]) {
  let price = 0;
  let profit = 0;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (price === 0) {
      price = item;
      continue;
    }

    if (item > price) {
      profit += item - price;
      price = 0;
    }
  }

  return profit;
}

console.log(getProfit(arr)); //=> 30

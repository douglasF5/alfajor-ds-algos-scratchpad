function smallestNegativeBalance(debts: string[][]) {
  // Write your code here
  const EMPTY_MESSAGE = 'Nobody has a negative balance';
  const stats = {};

  //calculate the balance for each person
  debts.forEach(([debtor, payer, amount]) => {
    if (debtor in stats) {
      stats[debtor] += Number(amount) * -1;
    } else {
      stats[debtor] = Number(amount) * -1;
    }

    if (payer in stats) {
      stats[payer] += Number(amount);
    } else {
      stats[payer] = Number(amount);
    }
  });

  //get the smallest value
  const smallestValue = Object.values(stats).reduce((acc, curr) => {
    return acc <= curr ? acc : curr;
  });

  //return names
  let result: string[] = [];

  for (let name in stats) {
    let value = stats[name];
    if (value < 0 && value === smallestValue) result.push(name);
  }

  return result.length === 0 ? [EMPTY_MESSAGE] : result.sort();

  //TODO
  //[x] extract all names
  //[x] calculate each person's balance
  //[x] return the result
}

const arr = [
  ['Alex', 'Blake', '2'],
  ['Blake', 'Alex', '2'],
  ['Casey', 'Alex', '5'],
  ['Blake', 'Casey', '7'],
  ['Alex', 'Blake', '4'],
  ['Alex', 'Casey', '4'],
];

console.log(smallestNegativeBalance(arr));

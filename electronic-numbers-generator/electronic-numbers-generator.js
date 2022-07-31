//UTILITIES
const STICK_DIGITS_MAP = {
  0: [" _ ", "| |", "|_|"],
  1: ["   ", "  |", "  |"],
  2: [" _ ", " _|", "|_ "],
  3: [" _ ", " _|", " _|"],
  4: ["   ", "|_|", "  |"],
  5: [" _ ", "|_ ", " _|"],
  6: [" _ ", "|_ ", "|_|"],
  7: [" _ ", "  |", "  |"],
  8: [" _ ", "|_|", "|_|"],
  9: [" _ ", "|_|", " _|"]
};
const CHAR_IDS = {
  space: "0",
  "|": "1",
  _: "2"
};
const IDS_MAP = {
  "020101121": 0,
  "000001001": 1,
  "020021120": 2,
  "020021021": 3,
  "000121001": 4,
  "020120021": 5,
  "020120121": 6,
  "020001001": 7,
  "020121121": 8,
  "020121021": 9
};

//GENERATE ACCOUNT NUMBER
const generateAccountNumber = (len) => {
  let accountNumber = "";

  for (let i = 0; i < len; i++) {
    accountNumber += String(Math.floor(Math.random() * 10));
  }

  return accountNumber;
};

//CONVERTING FUNCTIONS
const toStickDigits = (number) => {
  let mountedNumber = "";

  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    mountedNumber += "\n";

    for (let fragIdx = 0; fragIdx < number.length; fragIdx++) {
      let frag = STICK_DIGITS_MAP[number[fragIdx]];
      mountedNumber += frag[rowIdx];
    }
  }

  return mountedNumber;
};
const toRegularDigits = (stickNumber) => {
  let numberKeys = [];
  let rows = stickNumber.split("\n");
  rows.shift();

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i].match(/.{3}/g);

    for (let j = 0; j < row.length; j++) {
      let fragment = row[j];
      let key = "";

      for (let k = 0; k < fragment.length; k++) {
        let char = fragment[k];

        if (char === " ") {
          key += "0";
        } else {
          key += CHAR_IDS[char];
        }
      }

      if (numberKeys[j] === undefined) {
        numberKeys[j] = key;
      } else {
        numberKeys[j] += key;
      }
    }
  }

  let numbers = numberKeys.map((key) => {
    return IDS_MAP[key];
  });

  return numbers;
};

//TESTING THE ALGORITHM
const accountNumber = generateAccountNumber(9);

// const stickNumber = toStickDigits(accountNumber);
// console.log(stickNumber);

const randomStickNumber = `
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|`;

const regularNumber = toRegularDigits(randomStickNumber);
console.log(regularNumber);


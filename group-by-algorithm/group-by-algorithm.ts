// Function definition
type RawArray<T> = Array<T>;
type Callback<T> = (el: T, i: number) => string;
type GroupedMap<T> = Map<string, T[]>;

function groupBy<T>(array: RawArray<T>, cb: Callback<T>): GroupedMap<T> {
  let groupedMap = {} as GroupedMap<T>;

  for (let i = 0; i < array.length; i++) {
    const key = cb(array[i], i);

    if (key in groupedMap) {
      groupedMap[key].push(array[i]);
      continue;
    }

    groupedMap[key] = [array[i]];
  }

  return groupedMap;
}

// Grouping numbers by even and odd
const numbersArray: number[] = [1, 2, 3, 4, 5];
const groupedNumbers = groupBy(numbersArray, (el, i) => {
  return el % 2 === 0 ? 'even' : 'odd';
}); // => { even: [2, 4], odd: [1, 3, 5] }

// Grouping animals by gender
type Animal = {
  species: string;
  gender: string;
};

const animalsArray: Animal[] = [
  {
    species: 'dog',
    gender: 'female',
  },
  {
    species: 'cat',
    gender: 'female',
  },
  {
    species: 'owl',
    gender: 'female',
  },
  {
    species: 'fish',
    gender: 'male',
  },
];

const animalsGroupedByGender = groupBy(animalsArray, (el, i) => {
  return el.gender === 'male' ? 'male' : 'female';
}); /* => {
  female: [
    {
      species: 'dog',
      gender: 'female',
    },
    {
      species: 'cat',
      gender: 'female',
    },
    {
      species: 'owl',
      gender: 'female',
    },
  ],
  male: [
    {
      species: 'fish',
      gender: 'male',
    },
  ]
}
*/

// Grouping animals by species
const animalsGroupedBySpecies = groupBy(animalsArray, (el, i) => {
  return el.species;
}); /* => {
  dog: [
    {
      species: 'dog',
      gender: 'female',
    },
  ],
  cat: [
    {
      species: 'cat',
      gender: 'female',
    },
  ],
  owl: [
    {
      species: 'owl',
      gender: 'female',
    },
  ],
  fish: [
    {
      species: 'fish',
      gender: 'male',
    },
  ],
}
*/

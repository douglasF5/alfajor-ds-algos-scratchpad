# Group-by algorithm

It takes an array, divides its elements into groups, and returns them as new arrays inside a map. Each key in the map represents a group of elements. The logic that defines if an element belongs in a certain group and what key represents that group is returned by the provided callback function.

<br>

```typescript
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
```

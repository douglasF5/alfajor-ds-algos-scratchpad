# To-title-case function

The function returns a `string` in title case (first character of each word in uppercase), `object` or `array` depending on the provided input. It also uses recursion to process nested data.

```TypeScript
const string = 'hello world!';
toTitleCase(string); // => 'Hello World!'

//DATA COLLECTIONS
const object = {a: 'apple', b: 'banana', c: 'coconut'};
toTitleCase(object); // => {a: 'Apple', b: 'Banana', c: 'Coconut'}

const array = ['alligator', 'bee', 'cat'];
toTitleCase(array); // => ['Alligator', 'Bee', 'Cat']

//NESTED DATA
const user = {
  firstName: 'john',
  lastName: 'doe',
  favoriteFruits: ['apple', 'banana', 'coconut']
};

toTitleCase(user); // => {firstName: 'John', lastName: 'Doe', favoriteFruits: ['Apple', 'Banana', 'Coconut']};
```

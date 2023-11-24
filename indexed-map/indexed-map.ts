type IndexedMapInput = [key: string, value: {}];
type TuplesCollection = IndexedMapInput[];
type LookupMap = Map<string, [index: number, value: IndexedMapInput]>;

class IndexedMap {
  #values: TuplesCollection;
  #lookupMap: LookupMap;

  constructor() {
    this.#values = [];
    this.#lookupMap = new Map();
  }

  set(input: IndexedMapInput) {
    const newIndex = this.#values.length;

    /** Add new item to the values array */
    this.#values.push(input);

    /** Update lookup map */
    this.#lookupMap.set(input[0], [newIndex, this.#values[newIndex]]);
  }

  get size() {
    return this.#values.length;
  }

  /** Getting values */
  getAt(index: number) {
    const value = this.#values[index][1];
    return value;
  }

  getBy(key: string) {
    const valueRef = this.#lookupMap.get(key)[1];
    const value = valueRef[1];

    return value;
  }

  get asArray() {
    const array = this.#values.map((value) => value[1]);

    return array;
  }

  get asObject() {
    const object = {};

    Array.from(this.#lookupMap).forEach((item) => {
      const key = item[0];
      const value = item[1][1][1];

      object[key] = value;
    });

    return object;
  }

  get asTuples() {
    const tuples = this.#values;

    return tuples;
  }

  /** Getting indices */
  getIndexByKey(key: string) {
    const index = this.#lookupMap.get(key)[0];
    return index;
  }

  getIndicesByValue(inputValue: {}) {
    const indices = this.#values
      .filter((value) => value[1] === inputValue) //shallow comparison, might update this to use deep comparison
      .map((_, index) => index);

    return indices;
  }

  get indices() {
    const indices = this.#values.map((_, index) => index);

    return indices;
  }

  /** Getting keys */
  getKeyByIndex(inputIndex: number) {
    const key = this.#values[inputIndex][0];

    return key;
  }

  getKeysByValue(inputValue: {}) {
    const keys = this.#values
      .filter((value) => value[1] === inputValue) //shallow comparison, might update this to use deep comparison
      .map((value) => value[0]);

    return keys;
  }

  get keys() {
    const keys = this.#values.map((value) => value[0]);

    return keys;
  }
}

// Basic example
const aDude = new IndexedMap();

aDude.set(['name', 'Joey']);
aDude.set(['age', '30']);
aDude.set(['catchPhrase', "how you doin'?"]);

//Methods for retrieving values, keys, and indices
console.log(aDude.getAt(1)); //30
console.log(aDude.getBy('name')); //Joey
console.log(aDude.asArray); //["Joey", "30", "how you doin'?"]
console.log(aDude.asObject); //{name: "Joey", age: 30, catchPhrase: "how you doin'?"}
console.log(aDude.asTuples); //[["name", "Joey"], ["age", "30"], ["catchPhrase", "how you doin'?"]]

console.log(aDude.getIndexByKey('catchPhrase')); //2
console.log(aDude.getIndicesByValue("how you doin'?")); //[0]
console.log(aDude.indices); //[0, 1, 2]

console.log(aDude.getKeyByIndex(2)); //"catchPhrase"
console.log(aDude.getKeysByValue('30')); //["age"]
console.log(aDude.keys); //["name", "age", "catchPhrase"]

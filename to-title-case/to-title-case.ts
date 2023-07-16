type InputType = string | Array<string> | Object;

function toTitleCase(input: InputType) {
  const type = Array.isArray(input) ? 'array' : typeof input;

  switch (type) {
    case 'string':
      const chunks = (input as string).split(' ');
      const newString = chunks
        .map((chunk) => {
          return uppercaseFirstChar(chunk);
        })
        .join(' ');

      return newString;

    case 'object':
      const keys = Object.keys(input as Object);
      let newObj = {};

      for (let key of keys) {
        newObj[key] = toTitleCase(input[key]);
      }

      return newObj;
    case 'array':
      const newArray = (input as Array<string>).map((chunk) => {
        return toTitleCase(chunk);
      });

      return newArray;
    default:
      return null;
  }
}

function uppercaseFirstChar(string: string, offset: number = 0) {
  if (string.length <= offset || typeof string !== 'string') return string;

  const firstChar = string.slice(0, 1);
  const rest = string.substring(1);

  return firstChar.toUpperCase() + rest;
}

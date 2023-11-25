type TruncateMode = 'start' | 'middle' | 'end';

function truncate(
  string: string,
  maxLength: number,
  mode: TruncateMode = 'end'
) {
  if (maxLength < 0)
    throw new Error('The max length of a string should be greater than zero.');

  const length = string.length;

  if (length <= maxLength) return string;

  const elipsis = '...';

  switch (mode) {
    case 'start': {
      const offset = (maxLength - elipsis.length) * -1;
      const truncatedString = string.slice(offset).trim();
      return elipsis + truncatedString;
    }
    case 'middle': {
      const [quotient, remainder] = usePreciseDivision(
        maxLength - elipsis.length,
        2
      );

      const firstFragment = string.slice(0, quotient + remainder).trim();
      const lastFragment = string.slice(quotient * -1).trim();

      return firstFragment + elipsis + lastFragment;
    }
    case 'end': {
      const offset = maxLength - elipsis.length;
      const truncatedString = string.slice(0, offset).trim();
      return truncatedString + elipsis;
    }
    default:
      return string;
  }
}

/** This helper function divides numbers and returns an array the whole part and the remainder. It never returns floating point numbers. */
function usePreciseDivision(dividend: number, divisor: number) {
  if (divisor === 0) throw new Error("Can't divide by zero.");

  const remainder = dividend % divisor;

  if (remainder === 0) {
    return [dividend / divisor, remainder];
  }

  return [(dividend - remainder) / divisor, remainder];
}

const sentence = 'abcdefghijklmnopq';
const truncatedSentence = truncate(sentence, 10, 'middle');
console.log(truncatedSentence, truncatedSentence.length);

const word = 'understand';
const truncatedWord = truncate(word, 10, 'start');
console.log(truncatedWord, truncatedWord.length);

const greeting = 'Hello!';
const truncatedGreeting = truncate(greeting, 10, 'start');
console.log(truncatedGreeting, truncatedGreeting.length);

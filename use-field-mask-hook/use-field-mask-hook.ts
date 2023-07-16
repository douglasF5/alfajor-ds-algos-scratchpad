//STRING PARSING
function unmaskValue(str: string) {
  const unmaskedStr = str.replace(/\D/g, '');
  return unmaskedStr;
}

function sizeString(str: string, len: number) {
  let trimmedStr: string;

  if (str.length > len) {
    trimmedStr = str.slice(str.length - len, str.length);
  } else {
    trimmedStr = str.padStart(len, '0');
  }

  return trimmedStr;
}

function maskValue(str: string, opt: MaskOptions): string {
  let maskedString: string;

  switch (opt.type) {
    case 'time':
      maskedString = convertToTimeString(sizeString(str, 4));
      break;
    case 'currency':
      maskedString = convertToCurrencyString(str.padStart(3, '0'), opt?.prefix);
      break;
    default:
      maskedString = str;
  }

  return maskedString;
}

function convertToCurrencyString(str: string, prefix: string) {
  const integer = Number(str.slice(0, str.length - 2));
  const decimal = Number(str.slice(str.length - 2, str.length));

  const currencyString = [
    addIntegerSeparator(String(integer)),
    String(decimal).padStart(2, '0'),
  ].join('.');

  return prefix + ' ' + currencyString;
}

function addIntegerSeparator(str: string) {
  if (!str) return 0;
  let chunks = [];
  const arr = str.split('');

  for (let i = arr.length - 1; i >= 0; i--) {
    let chunk = arr[i];

    if (chunks.length > 0 && chunks.length % 3 === 0) chunk += ',';

    chunks.push(chunk);
  }

  const newStr = chunks.reverse().join('');

  return newStr;
}

function convertToTimeString(str: string) {
  const duration =
    Number(str.slice(0, 2)) * 60 + Number(str.slice(2, str.length));

  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}

//USE FIELD MASK
type MaskState = {
  current: string;
  prev: string | null;
};
type SetMaskStateType = (value: string) => void;
type UseMaskStateType = [state: State, setState: SetMaskStateType];

interface MaskOptions {
  type: 'time' | 'currency';
  prefix?: string;
}

export function useMask(options: MaskOptions): UseMaskStateType {
  let maskedValue = { current: '', prev: '' };

  function setMaskedValue(value: string) {
    let newMaskedValue: MaskState;

    const newVal = unmaskValue(value);
    newMaskedValue = {
      current: maskValue(newVal, options),
      prev: maskedValue.current,
    };

    Object.assign(maskedValue, newMaskedValue);
  }

  return [maskedValue, setMaskedValue];
}

# useFieldMask hook

The `useFieldMask` returns an array with two elements:
```TypeScript
const [maskedValue, setMaskedValue] = useFieldMask({ type: 'time' });

//Object containing the current and previous values
console.log(maskedValue); //{current: '', prev: ''}

//Function for updading the state
setMaskedValue('1254');
console.log(maskedValue); //{current: '12:54', prev: ''}

//...

setMaskedValue('324');
console.log(maskedValue); //{current: 03:24', prev: '12:54'}

input.value = maskedValue.current //'03:24'

```

### Example
```TypeScript
const [maskedValue, setMaskedValue] = useFieldMask({ type: 'currency', prefix: '$' });

input.oninput = ({ data, target }: InputEvent) => {
  const input = target as HTMLInputElement;
  let newValue: string;

  if (/\D/.test(data) && data !== null) {
    newValue = maskedValue.prev;
  } else {
    setMaskedValue(input.value);
    newValue = maskedValue.current;
  }

  h1.innerHTML = newValue;
  input.value = newValue;
};
```

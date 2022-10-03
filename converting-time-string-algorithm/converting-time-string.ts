function timeConversion(s: string): string {
  // Write your code here
  const [hour, min, rest] = s.split(':');
  const sec = rest.slice(0, 2);
  const flag = rest.slice(2);
  let newHour: string;

  switch (flag) {
    case 'AM':
      newHour = Number(hour) === 12 ? '00' : hour;
      break;
    case 'PM':
      newHour =
        Number(hour) === 12 ? '12' : String(Number(hour) + 12).padStart(2, '0');
      break;
  }

  return `${newHour}:${min}:${sec}`;

  //TODO
  //[x] get the hour part
  //[x] get the AM-PM part
  //[x] calculate the new hour representation
  //[x] combine everything in a time string
  //[x] return the converted time string
}

//TEXTING THE ALGORITHM
console.log(timeConversion('07:05:45PM')); //=> 19:05:45

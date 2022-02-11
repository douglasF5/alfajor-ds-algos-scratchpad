function generateId(n, id = '') {
  if(n <= 0) return `#${id}`;
  
  return generateId(n - 1, id += Math.floor(Math.random() * 10));
}

console.log(generateId(12));

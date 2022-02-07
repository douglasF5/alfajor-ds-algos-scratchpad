function toTitleCase(content) {
	if(Array.isArray(content)) {
  	let array = [];
    
  	content.forEach(element => {
    	if(typeof element === 'string') {
      	array.push(toTitleCaseWord(element));
      }
      return;
    });
    
   	if(array.length !== 0) {
    	return array;
    } else {
    	returnDefault();
    }
  }
  
  switch (typeof content) {
  	case 'string':
    	let array = content.split(" ");
      let string = '';
      let i = array.length;
      
      array.forEach(element => {
      	i !== 1 ? string += toTitleCaseWord(element) + " " : string += toTitleCaseWord(element);
        i--
      });
      
      return string;
      
      case 'object':
    	let obj = {};
      
      Object.keys(content).map((key, index) => {
  			if(typeof content[key] === 'string') {
        	obj[key] = toTitleCaseWord(content[key]);
        }
        
        return;
			});
      
      if(Object.keys(obj).lenght !== 0) {
      	return obj;
      } else {
      	returnDefault();
      }
      
      break;
      
      default:
      	returnDefault();
  }
}

function toTitleCaseWord(word) {
	let first = word[0];
  let rest = word.substr(1, word.length + 1);
  return first.toUpperCase() + rest;
}

function returnDefault() {
	console.log('It\'s not possible to parse the content.');
	return null;
}

//Testing the function
console.log(toTitleCase({a:'hi', b: 'hello', c: 'howdy'}));

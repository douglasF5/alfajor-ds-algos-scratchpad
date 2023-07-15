  # Dom manipulation utilities

## Creating elements
```TypeScript
//CREATING AN ELEMENT
const title = create(`<h1>Hello world!</h1>`);

//INTERPOLATING VARIABLES
const isSelected = true;
const classList = isSelected ? 'form-option selected' : 'form-option';
const input = create(`<input type="radio" class="${classList}" />`);

//CREATING LISTS
const data = [...];
const list = create(`<ul ...></ul>`);
const listItems = data.map(item => {
  return create(`<li>...</li>`);
});

append(list, listItems);
```
<br>

## Getting elements
```TypeScript
//GETTING ONE ELEMENT
const featuredPost = get('#featured');

//GETTING MULTIPLE ELEMENTS
const posts = get('[data-post]', true);
```
<br>

## Appending elements
```TypeScript
//APPENDING ONE ELEMENT
const container = get('#app');
const heading = create(`<h1>Hello world</h1>`);

append(app, [heading]);

//APPENDING MULTIPLE ELEMENTS
const title = create(`<h2>Hello world</h2>`);
const button = create(`<button>Click me</button>`);

append(app, [title, button]);
```

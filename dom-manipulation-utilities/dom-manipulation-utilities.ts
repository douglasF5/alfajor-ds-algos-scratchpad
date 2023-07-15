//GETTING ELEMENTS
export function get(
  query: string,
  getAll: boolean = false
): HTMLElement | NodeList {
  if (getAll) {
    const elementCollection = document.querySelectorAll(query) as NodeList;
    return elementCollection;
  } else {
    const element = document.querySelector(query) as HTMLElement;
    return element;
  }
}

//APPENDING ELEMENTS
export function append(
  parent: HTMLElement,
  children: HTMLElement[],
  cleanup = false
): void {
  if (cleanup) {
    parent.innerHTML = '';
  }

  children.forEach((el) => {
    parent.append(el);
  });
}

//CREATING ELEMENTS
export function create(str: string): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = str;
  const newElement = wrapper.firstElementChild as HTMLElement;

  return newElement;
}

//DEMO
const app = get('#app');
const title = create(`<h1>Hello world!</h1>`);
const input = create(`<input type="text" />`);
const button = create(`<button type="button">Click me</button>`);

append(app, [title, input, button]);

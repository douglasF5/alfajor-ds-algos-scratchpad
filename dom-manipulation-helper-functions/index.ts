function get(query: string): HTMLElement {
  return document.querySelector(query);
}

function append(parent: HTMLElement, elmsArray: HTMLElement[]): void {
  elArr.forEach(el => {
    parent.append(el);
  });
}

function create(str: string): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = str;
  
  return wrapper.firstElementChild;
};

const app = get('#app');
const list = create(
  `<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>`
);

append(app, [list]);

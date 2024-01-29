const grid = document.querySelector('.grid');
const eraseBtn = document.querySelector('.eraseBtn')

let selectedSize = "32";
let selectedColor = "black"

const createGrid = (size) => {

  let squareSize = document.querySelector('.grid').clientWidth / size;
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    grid.appendChild(square);
    square.classList.add('grid-square');
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
  }

  return;
};

const colorGrid = (elem, color) => {
  if (elem.buttons == 1) {
    if (elem.target.classList == 'grid-square') {
      let square = elem.target
      square.style.backgroundColor = color;
    }
  } else { return }
};

const eraseGrid = () => {
  grid.innerHTML = ''
  createGrid(selectedSize)
};

eraseBtn.addEventListener('click', () => {
  eraseGrid();
});

grid.addEventListener('mousedown', e => {
  if (e.buttons == 1) {
    window.addEventListener('mouseover', event => {
      colorGrid(event, selectedColor);
    })
  }
})

createGrid(selectedSize);
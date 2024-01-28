const grid = document.querySelector('.grid');

let selectedSize = "16";

const buildGrid = (size) => {

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
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

function handleColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
};

btn.addEventListener('click', handleColor);
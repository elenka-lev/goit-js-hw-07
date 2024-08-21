function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input'),
  create = document.querySelector('[data-create]'),
  destroy = document.querySelector('[data-destroy]'),
  boxes = document.querySelector('#boxes');
  

function createBoxes(amount) {
  let size = 30;
  let box = '';

  for (let i = 0; i < amount; i++) {
    let color = getRandomHexColor();
    box += `<div class="new" style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
    size += 10;
  };
  boxes.innerHTML = box;
};

function handleCreate() {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
      alert('Please enter a number between 1 and 100.');
  }
}
function handleDestroy() {
  boxes.innerHTML = '';
}
create.addEventListener('click', handleCreate);
destroy.addEventListener('click', handleDestroy);





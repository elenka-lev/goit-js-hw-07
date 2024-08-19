const nameInput = document.querySelector('#name-input'),
    nameOutput = document.querySelector('#name-output');


function updateName() {
    const trimName = nameInput.value.trim();
    nameOutput.textContent = trimName === '' ? 'Anonymous' : trimName;
}

nameInput.addEventListener('input', updateName);
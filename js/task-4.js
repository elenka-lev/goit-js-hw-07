const form = document.querySelector('.login-form');

function handleFormSubmit(e) {
   e.preventDefault();

    const usermail = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (usermail === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        usermail,
        password,
    };

    console.log(formData);
    
    form.reset();
};

form.addEventListener('submit', handleFormSubmit);
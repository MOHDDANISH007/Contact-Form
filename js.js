const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const message = document.querySelector('#message');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const messageError = document.querySelector('#message-error');

function validateForm() {
    clearMessages();

    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.innerHTML = "Name cannot be empty";
        nameInput.classList.add('error-border');
        valid = false;
    }
    if (!emailIsValid(emailInput)) {
        emailError.innerHTML = "Invalid email address";
        emailInput.classList.add('error-border');
        valid = false;
    }
    if (phoneInput.value.length < 10 || phoneInput.value.length > 10) {
        phoneError.innerHTML = "Phone number should be at least 10 digits";
        phoneInput.classList.add('error-border');
        valid = false;
    }
    if (message.value.trim() === '') {
        messageError.innerHTML = "Message cannot be empty";
        message.classList.add('error-border');
        valid = false;
    }

    if (valid) {
        document.getElementById('success').innerText = 'Form submitted successfully!';
    }
}

function emailIsValid(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email.value);
}

function clearMessages() {
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    phoneError.innerHTML = '';
    messageError.innerHTML = '';

    nameInput.classList.remove('error-border');
    emailInput.classList.remove('error-border');
    phoneInput.classList.remove('error-border');
    message.classList.remove('error-border');
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classList = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

function isEmail(item) {
    /* eslint-disable-next-line */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        item
    );
}

function checkInputs() {
    // trim to remove the white spaces especially at the beginning
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (passwordCheckValue === '') {
        setErrorFor(passwordCheck, 'Password cannot be blank');
    } else if (passwordValue !== passwordCheckValue) {
        setErrorFor(passwordCheck, `Passwords do not match`);
    } else {
        setSuccessFor(passwordCheck);
    }
}

function validateForm() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });
}

export default validateForm;

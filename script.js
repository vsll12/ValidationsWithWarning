function CheckForm() {
    let validEndings = ['.com', '.ru', '.az'];

    const btn = document.getElementById('registerButton');
    let isValid = true;

    const login = document.getElementById("login").value;
    const loginError = document.getElementById("login-error");
    if (login.length <= 8 || /\d/.test(login) || !/^[a-z]/i.test(login)) {
        loginError.style.display = "block";
        loginError.textContent = "Login must start with a letter, be longer than 8 characters, and contain no digits.";
        isValid = false;
    } else {
        loginError.style.display = "none";
    }

    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    if (password.length <= 8 || !/^[A-Z]/.test(password) || (!password.includes('.') && !password.includes('_')) || !/\d/.test(password)) {
        passwordError.style.display = "block";
        passwordError.textContent =
            "Password must start with an uppercase letter, include '.', '_', and a number, and be longer than 8 characters.";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    if (!email.includes('@') || !validEndings.some(ending => email.endsWith(ending))) {
        emailError.style.display = "block";
        emailError.textContent = "Email must include '@' and end with '.com', '.ru', or '.az'.";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    const genderError = document.getElementById("gender-error");
    const genderSelected = document.querySelector('input[name="gender"]:checked') !== null;
    if (!genderSelected) {
        genderError.style.display = "block";
        genderError.textContent = "Please select a gender.";
        isValid = false;
    } else {
        genderError.style.display = "none";
    }

    const checkBox = document.getElementById("checkBox").checked;
    const checkboxError = document.getElementById("checkbox-error");
    if (!checkBox) {
        checkboxError.style.display = "block";
        checkboxError.textContent = "You must agree to the terms.";
        isValid = false;
    } else {
        checkboxError.style.display = "none";
    }

    btn.disabled = !isValid;
}

document.getElementById("login").addEventListener("input", CheckForm);
document.getElementById("password").addEventListener("input", CheckForm);
document.getElementById("email").addEventListener("input", CheckForm);
document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener("change", CheckForm);
});
document.getElementById("checkBox").addEventListener("change", CheckForm);


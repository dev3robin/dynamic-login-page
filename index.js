const container = document.querySelector('.container');
const registerBtn = document.querySelector('.SIGN-UP');
const loginBtn = document.querySelector('.SIGN-IN');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
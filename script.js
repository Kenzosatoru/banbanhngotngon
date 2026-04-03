const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const linkToRegister = document.getElementById('linkToRegister');
const linkToLogin = document.getElementById('linkToLogin');

// Chuyển sang form Đăng ký
function showRegister() {
    loginForm.classList.add('hidden-form');
    loginForm.classList.remove('active-form');
    registerForm.classList.add('active-form');
    registerForm.classList.remove('hidden-form');
    
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
}

// Chuyển sang form Đăng nhập
function showLogin() {
    registerForm.classList.add('hidden-form');
    registerForm.classList.remove('active-form');
    loginForm.classList.add('active-form');
    loginForm.classList.remove('hidden-form');
    
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
}

registerBtn.addEventListener('click', showRegister);
loginBtn.addEventListener('click', showLogin);
linkToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
});
linkToLogin.addEventListener('click', showLogin);

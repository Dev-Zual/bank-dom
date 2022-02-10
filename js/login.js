document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('input-email');
    const password = document.getElementById('input-password');
    if (email.value == 'mymail@gmail.com' && password.value == 'mypassword') {
        window.location.href = "bank.html";
    }
    else {
        alert('your password & eamil are incorrect');
    }
})
const password = document.getElementById("password");
const eye = document.getElementById("eye")

eye.addEventListener('click', function() {
    
    if (password.type === 'password') {
        password.type = 'text';
    }

    else {
        password.type = 'password';
    }
});

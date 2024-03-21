document.addEventListener("DOMContentLoaded", function() {
  
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        document.getElementById("playerId").readOnly = true;
        generatePlayerId();
        registrationForm.addEventListener("submit", function(event) {
            validateRegistrationForm(event);
        });
    }


    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            validateLoginForm(event);
        });
    }
});

function generatePlayerId() {
    let playerId = "";
    for (let i = 0; i < 12; i++) {
        playerId += Math.floor(Math.random() * 10);
        if (i % 4 === 3 && i !== 11) {
            playerId += " ";
        }
    }
    document.getElementById("playerId").value = playerId;
}

function validateRegistrationForm(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        event.preventDefault();
        return false;
    }

    return true;
}

function validateLoginForm(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;



    if (email === 'example@example.com' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password. Please try again.');
    }

    event.preventDefault();
}

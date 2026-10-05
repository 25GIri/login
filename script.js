document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Simple validation example
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Example authentication check (replace with real authentication logic)
    if (username === 'admin' && password === 'password123') {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login successful!';
        // Redirect or perform further actions here
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Invalid username or password.';
    }
});

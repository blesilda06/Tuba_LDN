
        const adminCredentials = {
            username: 'admin@gmail.com.ph',
            password: 'padayao123'
        };
    
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
    
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
    
            const usernameError = document.getElementById('usernameError');
            const passwordError = document.getElementById('passwordError');
    
            usernameError.textContent = '';
            usernameError.style.display = 'none';
            passwordError.textContent = '';
            passwordError.style.display = 'none';
    
            if (username === adminCredentials.username && password === adminCredentials.password) {
                window.location.href = 'padayao.html'; 
            } else {
                usernameError.textContent = 'Invalid username or password. Please try again.';
                usernameError.style.display = 'block';
            }
        });
    
            function togglePasswordVisibility() {
                 const passwordInput = document.getElementById('password');
                const toggleIcon = document.getElementById('toggleIcon');
        
       
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.textContent = '🙈'; 
            } else {
                passwordInput.type = 'password';
                toggleIcon.textContent = '👁️';
            }
        }
    
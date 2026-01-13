const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);

    const username = formData.get('username');
    const password = formData.get('password');

    const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error('Error while fetching data');
    }

    window.location.href = '/';    
});
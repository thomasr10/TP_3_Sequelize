const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => register(e));

const register = async (e) => {
    e.preventDefault()
    const formData = new FormData(registerForm);

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        
        const response = await fetch('http://localhost:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            throw new Error(`${response.status} : Error while registering user`);
        }

        window.location.href = '/';

    } catch(e) {
        console.error(e);
    }
}
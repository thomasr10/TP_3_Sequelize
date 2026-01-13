const logout = async (e) => {
    e.preventDefault()

    try {
        const response = await fetch('http://localhost:8000/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }

        window.location.href = '/';

    } catch (e) {
        console.error(e)
    }
}

export default logout;
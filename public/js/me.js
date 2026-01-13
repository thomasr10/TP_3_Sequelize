const me = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/auth/me', {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });

        if (!response.ok) {
            return false
        }

        const data = await response.json();
        return data;

    } catch (e) {
        console.error(e);
        return false
    }
}

export default me;

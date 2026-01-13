const deleteArticle = async (id) => {

    try {
        const response = await fetch(`http://localhost:8000/api/articles/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`${response.status} : Error while deleting article`);
        }

        window.location.href = '/';
    } catch (e) {
        console.error(e);
    }
}

export default deleteArticle;
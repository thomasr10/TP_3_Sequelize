const fetchArticleById = async () => {

    try {
        const id = window.location.pathname.split('/').pop();

        const response = await fetch(`http://localhost:8000/api/articles/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error while fetching data');
        }

        const data = await response.json();

        document.title = `TP 3 | ${data.data.title}`

        return data;

    } catch (e) {
        console.error(e);
    }

}

export default fetchArticleById;
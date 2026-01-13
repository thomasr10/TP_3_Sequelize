import fetchArticleById from "./fetchArticleById.js";

const contentInput = document.getElementById('content');
const titleInput = document.getElementById('title');
const updateForm = document.getElementById('update-form');
let articleId;

fetchArticleById().then((data) => {
    document.title = `TP 3 | Update ${data.data.title}`;

    titleInput.value = data.data.title;
    contentInput.value = data.data.content;
    articleId = data.data.id;
});

const updateArticle = async (e) => {

    e.preventDefault();

    const formData = new FormData(updateForm);

    const title = formData.get('title');
    const content = formData.get('content');

    try {

        const response = await fetch(`http://localhost:8000/api/articles/update/${articleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });

        if (!response.ok) {
            throw new Error(`${response.status} : Error while updating article`);
        }

        window.location.reload();

    } catch(e) {
        console.error(e);
    }
}

updateForm.addEventListener('submit', (e) => updateArticle(e));
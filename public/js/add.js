import me from './me.js';

const addForm = document.getElementById('add-form');
const addResponse = document.getElementById('add-response');
let userId;

me().then((data) => {
    userId = data.data.id;
}).catch((e) => console.error(e));

addForm.addEventListener('submit', async (e) => {

    e.preventDefault();
    const formData = new FormData(addForm);

    const title = formData.get('title');
    const content = formData.get('content');
    
    const response = await fetch('http://localhost:8000/api/articles/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, userId })
    });

    if(!response.ok) {
        addResponse.textContent = 'Error while adding article'
        throw new Error(`${response.status} : Error while adding article`);
    }

    addResponse.textContent = 'Article add successfully';

    return;
});

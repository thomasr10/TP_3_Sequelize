import deleteArticle from "./delete.js";
import me from './me.js';
import fetchArticleById from "./fetchArticleById.js";

const section = document.getElementById('container');

me().then((userInfos) => {
    
    fetchArticleById().then((data) => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const author = document.createElement('p');

        title.textContent = data.data.title;
        content.textContent = data.data.content;
        author.textContent = data.data.user.username;
        article.append(title);
        article.append(content);
        article.append(author);
        section.append(article);

        article.classList.add('article-container')

        if (userInfos.data.id === data.data.userId) {
            const updateBtn = document.createElement('a');
            const deleteBtn = document.createElement('button');

            deleteBtn.textContent = 'Delete';
            updateBtn.textContent = 'Update';
            updateBtn.href = `http://localhost:8000/article/update/${data.data.id}`;
            deleteBtn.addEventListener('click', () => deleteArticle(data.data.id));

            const buttonContainer = document.createElement('div');
            buttonContainer.append(updateBtn);
            buttonContainer.append(deleteBtn);
            buttonContainer.classList.add('submit-container');
            deleteBtn.classList.add('delete-btn');
            updateBtn.classList.add('update-btn');

            article.append(buttonContainer);

            deleteBtn.addEventListener('click', () => deleteArticle());
        }
    });
})

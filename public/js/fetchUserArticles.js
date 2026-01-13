import me from "./me.js";
const section = document.getElementById('articles-container');

const fetchUserArticles = async (userId) => {

    try {
        const response = await fetch(`http://localhost:8000/api/articles/user/${userId}`);

        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText} : Error while fetching articles`);
        }

        const data = await response.json();
        return data;

    } catch (e) {
        console.error(e);
    }
}

me().then(async (data) => {

    const id = data.data.id;
    const responseDate = await fetchUserArticles(id);

    return responseDate.data;

}).then((articles) => displayArticles(articles)).catch((e) => console.error(e));

const displayArticles = (articles) => {
    console.log(articles)
    articles.forEach((art) => {
        const articleContainer = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const author = document.createElement('p');
        const date = document.createElement('p');

        articleContainer.setAttribute('id', art.id);

        articleContainer.classList.add('article-container');
        title.textContent = art.title;
        content.textContent = art.content;
        author.textContent = art.user.username;

        const articleDate = new Date(art.createdAt);
        const min = (articleDate.getMinutes() == 0) ? '00' : articleDate.getMinutes();

        date.textContent = `${articleDate.getDate()}/${articleDate.getMonth() + 1}/${articleDate.getFullYear()} - ${articleDate.getHours()}:${min}`;

        articleContainer.append(title);
        articleContainer.append(content);
        articleContainer.append(author);
        articleContainer.append(date);
        section.append(articleContainer);

        articleContainer.addEventListener('click', () => openArticle(art.id));
    })

}

const openArticle = (id) => {
    window.location.href = `http://localhost:8000/article/${id}`
}
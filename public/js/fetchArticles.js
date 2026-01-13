const section = document.getElementById('container');

const fetchAllArticle = async () => {

    try {
        const response = await fetch('http://localhost:8000/api/articles', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if(!response.ok) {
            throw new Error('Error while fetching data');
        }
    
        const data = await response.json();
    
        return data;
      
    } catch(e) {
        console.error(e);
    }
}

fetchAllArticle()
.then((data) => {
    
    data.data.forEach(art => {
        console.log(art)
        const articleContainer = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        articleContainer.setAttribute('id', art.id);
        const author = document.createElement('p');
        const date = document.createElement('p');

        articleContainer.classList.add('article-container');
        title.textContent = art.title;
        content.textContent = art.content;
        author.textContent = art.user.username;
        
        const articleDate = new Date(art.createdAt);
        const min = (articleDate.getMinutes() == 0) ? '00' : articleDate.getMinutes();

        date.textContent = `${articleDate.getDate()}/${articleDate.getMonth()+ 1}/${articleDate.getFullYear()} - ${articleDate.getHours()}:${min}`;

        articleContainer.append(title);
        articleContainer.append(content);
        articleContainer.append(author);
        articleContainer.append(date);
        section.append(articleContainer);

        articleContainer.addEventListener('click', () => openArticle(art.id))
    });
})
.catch((e) => console.error(e));

const openArticle = (id) => {
    window.location.href = `http://localhost:8000/article/${id}`
}
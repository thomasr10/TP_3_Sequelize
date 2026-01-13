import me from "./me.js";
import logout from "./logout.js";

const userLink = document.getElementById('user-link');
const navList = document.getElementById('nav-list');

me().then((user) => {
    if (!user) {
        userLink.textContent = 'Login';
        userLink.href = 'http://localhost:8000/login';
        return;
    };

    const addLi = document.createElement('li');
    const addLink = document.createElement('a');
    const myArticleLi = document.createElement('li');
    const myArticleLink = document.createElement('a');

    addLink.href = 'http://localhost:8000/article/add';
    myArticleLink.href = 'http://localhost:8000/article/my-articles';

    addLink.textContent = 'Add';
    myArticleLink.textContent = 'My articles'

    addLi.append(addLink);
    myArticleLi.append(myArticleLink);

    navList.prepend(addLi);
    navList.prepend(myArticleLi);

    userLink.textContent = 'Logout';
    userLink.addEventListener('click', logout);
});

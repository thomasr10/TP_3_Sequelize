import db from '../models/index.cjs';

const getAllArticles = async (req, res) => {

    try {
        const articles = await db.Article.findAll({ include: { model: db.User, as: 'user' } });

        if (!articles) {
            return res.status(404).json({ message: 'No article found', data: [] });
        }

        return res.status(200).json({ message: 'Articles fetch', data: articles });

    } catch (e) {
        res.status(500).json({ message: 'Error while fetching articles', data: [] });
    }
}

const getArticleById = async (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id <= 0) return res.status(404).json({ message: 'Invalid article ID', data: [] });

    try {
        const article = await db.Article.findByPk(id, { include: { model: db.User, as: 'user' } });
        res.status(200).json({ message: 'Article fetch', data: article });

        if (!article) return res.status(404).json({ message: 'Article not found', data: [] });

    } catch (e) {
        res.status(500).json({ message: 'Error while fetching article', data: [] });
    }

}

const getUserArticles = async (req, res) => {

    const userId = parseInt(req.params.id);

    if (isNaN(userId) || userId <= 0) return res.status(404).json({ message: 'Invalid user ID', data: [] });

    try {
        const articles = await db.Article.findAll({
            where: {
                userId: userId
            },
            include: { model: db.User, as: 'user' }
        });

        if (!articles) return res.status(400).json({ message: 'No article found for this user', data: [] });

        return res.status(200).json({ message: 'Data fetch successfully', data: articles });

    } catch (e) {
        res.status(500).json({ message: 'Error whil fetching article', data: [] });
    }
}

const add = async (req, res) => {

    const { title, content, userId } = req.body;

    if (!title || !content || !userId) {
        return res.status(401).json({ message: 'All fields are required', data: [] });
    }

    try {
        const newArticle = await db.Article.create({
            title,
            content,
            userId
        });

        return res.status(201).json({ message: 'Article created successfully', data: newArticle });

    } catch (e) {
        res.status(500).json({ message: 'Error whil fetching article', data: [] });
    }
}

const deleteArticle = async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) return res.status(404).json({ message: 'Invalid article ID', data: [] });

    try {
        await db.Article.destroy({ where: { id: id } });
        return res.status(200).json({ message: 'Article deleted successfully', data: [] });

    } catch (e) {
        return res.status(500).json({ message: 'Error while trying to delete article', date: [] });
    }
}

const updateArticle = async (req, res) => {

    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    if (isNaN(id) || id <= 0) return res.status(404).json({ message: 'Invalid article ID', data: [] });

    if (!title || !content) {
        return res.status(401).json({ message: 'All fields are required', data: [] });
    }

    try {
        const updatedArticle = await db.Article.update(
            { title, content },
            { where: { id } }
        );

        return res.status(204).json({ message: 'Article updated successfully', data: updatedArticle });

    } catch (e) {
        res.status(500).json({ message: 'Server error while updating article', data: [] });
    }
}

export { getAllArticles, getArticleById, getUserArticles, add, deleteArticle, updateArticle }
import express from "express";
import { getAllArticles, getArticleById, getUserArticles, add, deleteArticle, updateArticle } from '../controllers/articleController.js';
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.get('/user/:id', authMiddleware, getUserArticles);
router.post('/add', authMiddleware, add);
router.delete('/delete/:id', authMiddleware, deleteArticle);
router.put('/update/:id', authMiddleware, updateArticle);

export default router;
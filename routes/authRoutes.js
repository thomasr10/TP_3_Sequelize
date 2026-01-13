import express from 'express';
import { login, me, logout, register } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/login', login);
router.get('/me', me);
router.post('/logout', authMiddleware, logout);
router.post('/register', register);

export default router;
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'
import { connectDatabase } from './db.js';
import articleRoutes from './routes/articleRoutes.js';
import cookieParser from 'cookie-parser';
import logger from './middlewares/logger.js';

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(logger);

app.listen(PORT, async () => {
    await connectDatabase();
    console.log(`App listening on : http://localhost:${PORT}`);
});


// Pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'register.html'));
});
app.get('/article/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'add-article.html'));
});
app.get('/article/my-articles', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'my-articles.html'));
});
app.get('/article/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'article.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'register.html'));
});
app.get('/article/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'update.html'));
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
import db from '../models/index.cjs'
import { Op } from 'sequelize';
import jwt from 'jsonwebtoken';
import passwordMatch from '../utils/passwordMatch.js';
import passwordHasher from '../utils/passwordHasher.js';

const login = async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required', data: [] });
    }

    const user = await db.User.findOne({
        where: {
            [Op.or]: [
                { username: username },
                { email: username }
            ],
        }
    });

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials', data: [] });
    }

    const isPasswordValid = await passwordMatch(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials', data: [] });
    }

    const token = jwt.sign({
        username: user.username,
        email: user.email,
        id: user.id
    }, process.env.JWT_SECRET, {
        expiresIn: '2h'
    });

    res.cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
        // secure: true
    });

    res.status(200).json({ success: true, accessToken: token });
}

const me = async (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: 'User is not authenticated', data: [] });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await db.User.findByPk(decoded.id);
        return res.status(200).json({ message: 'User authenticated', data: user });

    } catch (e) {
        return res.status(401).json({ message: `Invalid or expired token - ${e}` });
    }
}

const logout = (req, res) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        sameSite: 'strict',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
}

const register = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) return res.status(401).json({ message: 'All fields are required', data: [] });

    try {

        const hashedPassword = await passwordHasher(password);
        const newUser = await db.User.create({ username, email, password: hashedPassword });
        
        return res.status(201).json({ message: 'User created successfully', data: newUser });

    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({
                message: 'Email or username already exists',
                data: []
            });
        }

        return res.status(500).json({
            message: 'Server error while registering user',
            data: []
        });

    }
}

export { login, me, logout, register }
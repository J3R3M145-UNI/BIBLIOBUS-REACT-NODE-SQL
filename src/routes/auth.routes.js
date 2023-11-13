import { Router } from 'express';
import { register, login, logout, profile, verifyToken } from '../controllers/auth.controller';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verifyToken', verifyToken);
router.get('/profile', authRequired, profile);

export default router;
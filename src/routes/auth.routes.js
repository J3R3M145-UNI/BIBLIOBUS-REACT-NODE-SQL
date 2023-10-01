import { Router } from 'express';

const router = Router();
router.post('/register' , post_register);
router.post('/login' , post_login);

export default router;
import { Router } from 'express';
import {get_prestamos, post_prestamos, get_prestamoByID, delete_prestamo, update_prestamoByID} from '../controllers/task.controller';
import {authRequired} from '../middlewares/validateToken.js';

const router = Router();
router.get('/prestamos', authRequired, get_prestamos);
router.get('/prestamos/:id' , get_prestamoByID);
router.post('/prestamos' , post_prestamos);
router.delete('/prestamos/:id' , delete_prestamo);
router.put('/prestamos/:id' , update_prestamoByID);

export default router;
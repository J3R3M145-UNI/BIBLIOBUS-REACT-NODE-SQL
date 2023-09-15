import { Router } from 'express';
import {get_prestamos, post_prestamos} from '../controllers/prestamos.controller';
const router = Router();
router.get('/prestamos' , get_prestamos);
router.get('/prestamos' , get_prestamos);
router.post('/prestamos' , post_prestamos);
router.delete('/prestamos' , get_prestamos);
router.put('/prestamos' , get_prestamos);

export default router;

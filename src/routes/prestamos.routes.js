import { Router } from 'express';
import {post_task, get_prestamoByID, delete_task, update_prestamoByID, getItemsFromTable, insertItemIntoTable} from '../controllers/task.controller';
import {authRequired} from '../middlewares/validateToken.js';

const router = Router();
router.get('/datos/:tableName', authRequired, getItemsFromTable);
router.get('/datos/prestamo/:id' , get_prestamoByID);
router.post('/datos/:tableName' , authRequired, insertItemIntoTable);
router.delete('/datos/prestamo/:id' , delete_task);
router.put('/datos/prestamo/:id' , update_prestamoByID);

export default router;
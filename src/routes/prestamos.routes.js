import { Router } from 'express';
import { post_task, getItemsFromTableByID, deleteItem, update_prestamoByID, getItemsFromTable, insertItemIntoTable } from '../controllers/task.controller';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();
router.get('/datos/:tableName', authRequired, getItemsFromTable);
router.get('/datos/:tableName/:id', authRequired, getItemsFromTableByID);
router.post('/datos/:tableName', authRequired, insertItemIntoTable);
router.delete('/datos/prestamo/:id', deleteItem);
router.put('/datos/prestamo/:id', update_prestamoByID);

export default router;
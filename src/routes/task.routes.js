import { Router } from 'express';
import { getItemsFromTableByID, deleteItem, getItemsFromTable, insertItemIntoTable, updateItemByID, getPrestamoItems } from '../controllers/task.controller';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();
router.get('/datos/:tableName', authRequired, getItemsFromTable);
router.get('/prestamo', authRequired, getPrestamoItems);

router.get('/datos/:tableName/:id', authRequired, getItemsFromTableByID);
router.post('/datos/:tableName', authRequired, insertItemIntoTable);
router.delete('/datos/:tableName/:id', authRequired, deleteItem);
router.put('/datos/:tableName/:id', authRequired, updateItemByID);

export default router;
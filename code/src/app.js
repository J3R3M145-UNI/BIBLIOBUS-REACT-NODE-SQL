import express from 'express';
import config from './config';
import prestamosRoutes from './routes/prestamos.routes';
const app = express();

//CONFIGURACIONES
app.set('port',config.port);

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
export default app;
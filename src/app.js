import express from 'express';
import morgan from 'morgan';
import config from './config';
import prestamosRoutes from './routes/prestamos.routes';
import auth from './routes/auth.routes';
const app = express();

//CONFIGURACIONES
app.set('port', config.port)

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//ROUTES
app.use(prestamosRoutes)
app.use("/api",auth)

export default app;
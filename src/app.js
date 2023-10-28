import express from 'express';
import morgan from 'morgan';
import config from './config';
import task from './routes/task.routes';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.routes';
const app = express();

//CONFIGURACIONES
app.set('port', config.port)

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

//ROUTES
app.use("/api", task)
app.use("/api", auth)

export default app;
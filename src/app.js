import express from 'express';
import morgan from 'morgan';
import config from './config';
import task from './routes/task.routes';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.routes';
import cors from 'cors';
const app = express();

//CONFIGURACIONES
app.set('port', config.port)

//MIDDLEWARES
app.use(cors({
    origin: 'http://localhost:5173', // <-- location of the react app were connecting to
    credentials: true
}));
app.use(morgan('dev')) //Muestra por consola las peticiones que se hacen al servidor
app.use(express.json()) //Permite que el servidor entienda los formatos json
app.use(express.urlencoded({extended:false}))
app.use(cookieParser()) //Permite que el servidor entienda las cookies

//ROUTES
app.use("/api", task)
app.use("/api", auth)

export default app;
import {config} from 'dotenv';
config();


console.log(process.env.DB_USUARIO);

export const TOKEN_SECRET = process.env.TOKEN_SECRET;

export default {    
    port: process.env.PORT || 3000
}
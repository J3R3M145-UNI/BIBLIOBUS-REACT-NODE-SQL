import {config} from 'dotenv';
config();

console.log(process.env.DB_USUARIO);

export const TOKEN_SECRET = 'token123';

export default {    
    port: process.env.PORT || 3000
}
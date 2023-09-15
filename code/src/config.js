import {config} from 'dotenv';
config();

console.log(process.env.DB_USUARIO);

export default {    
    port: process.env.PORT || 3000
}
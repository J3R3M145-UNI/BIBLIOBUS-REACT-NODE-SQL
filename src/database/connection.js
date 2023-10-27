import sql from 'mssql';
import { config } from 'dotenv';
config();
const dbsettings =
{
    user: process.env.DB_USUARIO,
    password: process.env.DB_CONTRA,
    database: process.env.DB_NOMBRE,
    server: process.env.DB_HOST, // You can use 'localhost\\instance' to connect to named instance
    options: {
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export { sql }
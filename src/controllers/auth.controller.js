import { getConnection, sql, queries } from '../database';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { username, email, password, nombre, apellido, tipo_usuario } = req.body

    try {
        //Encriptar contraseña
        const passwordHash = await bcrypt.hash(password, 10)

        //Crear usuario
        const newUser = {
            username,
            email,
            nombre,
            apellido,
            tipo_usuario
        }

        const pool = await getConnection() //Se conecta a la base de datos
        await pool.request(). //Se hace la consulta

            input('username', sql.VarChar, username).
            input('email', sql.VarChar, email).
            input('password', sql.VarChar, passwordHash).
            input('nombre', sql.VarChar, nombre).
            input('apellido', sql.VarChar, apellido).
            input('tipo_usuario', sql.Int, tipo_usuario).

            query(queries.regUsuario) //ºSe ejecuta la consulta

        const token = await createAccessToken({ id: newUser.username })//Se crea el token

        //Crear token
        res.cookie('token', token)
        res.json({
            message: "Usuario creado correctamente",
            newUser
        })

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const login = async (req, res) => {
    const { username, email, password, tipo_usuario } = req.body

    try {

        const userfound = await pool.request(). //Se hace la consulta

            input('username', sql.VarChar, username).
            input('email', sql.VarChar, email).

            query(queries.login) //ºSe ejecuta la consulta

        if (!userfound) return res.status(400).json({ message: "Usuario no encontrado" })

        const matchPassword = await bcrypt.compare(password, userfound.password)

        if (!matchPassword) return res.status(401).json({ message: "Contraseña incorrecta" })

        const token = await createAccessToken({ id: userfound.username })//Se crea el token

        //Crear token
        res.cookie('token', token) 
        res.json({
            message: "Bienvenido",
            userfound
        })


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
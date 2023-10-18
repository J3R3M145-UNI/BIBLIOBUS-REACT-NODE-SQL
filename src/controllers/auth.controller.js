import { getConnection, queries, sql } from '../database';
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

            query(queries.regUsuario); //Se ejecuta la consulta

        const token = await createAccessToken({ id: newUser.username})//Se crea el token

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

    const { username, password } = req.body

    try {

        const pool = await getConnection() //Se conecta a la base de datos
        const userfound = await pool.request(). //Se hace la consulta

            input('username', sql.VarChar, username).

            query(queries.login) //Se ejecuta la consulta

        if (!userfound.recordset[0]) return res.status(400).json({ message: "Usuario no encontrado" }) //Si no encuentra el usuario

        const matchPassword = await bcrypt.compare(password, userfound.recordset[0].password);

        if (!matchPassword) return res.status(401).json({ message: "Contraseña incorrecta" })

        const token = await createAccessToken({ id: userfound.recordset[0].username })//Se crea el token

        //Crear token
        res.cookie('token', token) //Se crea la cookie
        res.json({
            message: "Bienvenido",
            userfound: userfound.recordset[0]
        })



    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    res.status(200).json();
}

export const profile = async (req, res) => {

    try {
        const pool = await getConnection() //Se conecta a la base de datos
        const userfound = await pool.request(). //Se hace la consulta

            input('username', sql.VarChar, req.user.id).

            query(queries.profile) //Se ejecuta la consulta

        if (!userfound.recordset[0]) return res.status(400).json({ message: "Usuario no encontrado" }) //Si no encuentra el usuario

        return res.json({
            message: "Bienvenido",
            userfound: userfound.recordset[0]
        })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
import { getConnection } from '../database/connection';
export const get_prestamos = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM PRESTAMO')
    res.json(result.recordset)
}

export const post_prestamos = async (req, res) => {
    
    const {fecha_emi, vence, id_libro, id_lector, devolucion } = req.body
    console.log(fecha_emi, vence, id_libro, id_lector, devolucion)
    res.json('POST prestamos')

    /*const pool = await getConnection()
    await pool.request().input('fecha_emi', sql.date, 'req.body.id_libro')
    /*const { id_libro, id_usuario, fecha_prestamo, fecha_devolucion } = req.body
    const pool = await getConnection()
    const result = await pool.request().query(`INSERT INTO PRESTAMO VALUES (${id_libro}, ${id_usuario}, '${fecha_prestamo}', '${fecha_devolucion}')`)
    res.json(result)*/
}
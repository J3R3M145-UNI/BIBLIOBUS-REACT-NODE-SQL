import { getConnection, sql, queries } from '../database';

/* export const get_task = async (req, res) => {

    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllPrestamos)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
} */

export const getItemsFromTable = async (req, res) => {
    const tableName = req.params.tableName; // Asumiendo que el nombre de la tabla se pasa como un parámetro en la URL

    try {
        const pool = await getConnection();

        // Construir la consulta SQL dinámicamente
        const query = queries[`get${tableName}Items`];

        const result = await pool.request().query(query);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const post_task = async (req, res) => {

    const { FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, DEVOLUCION } = req.body

    console.log(FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, DEVOLUCION)

    try {
        const pool = await getConnection()
        await pool.request().

            input('FCHA_EMISION', sql.Date, FCHA_EMISION).
            input('VENCE', sql.Date, VENCE).
            input('ID_LIBRO', sql.NVarChar, ID_LIBRO).
            input('ID_LECTOR', sql.NVarChar, ID_LECTOR).
            input('DEVOLUCION', sql.Bit, DEVOLUCION).

            query(queries.postPrestamo)


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const insertItemIntoTable = async (req, res) => {
    const tableName = req.params.tableName; // Asumiendo que el nombre de la tabla se pasa como un parámetro en la URL
    const data = req.body;

    try {
        const pool = await getConnection();

        const query = queries.postItem(tableName, data);

        const result = await pool.request().query(query);

        res.json({ message: 'Registro insertado correctamente' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const get_prestamoByID = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('id', id)
            .query(queries.getPrestamoByID)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const delete_task = async (req, res) => {

    const { id } = req.params

    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('id', id)
            .query(queries.deletePrestamo)
        res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const update_prestamoByID = async (req, res) => {

    const { FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, DEVOLUCION } = req.body
    const { id } = req.params

    try {
        const pool = await getConnection()
        await pool.request()
            .input('ID_PRESTAMO', sql.Int, id)
            .input('FCHA_EMISION', sql.Date, FCHA_EMISION)
            .input('VENCE', sql.Date, VENCE)
            .input('ID_LIBRO', sql.NVarChar, ID_LIBRO)
            .input('ID_LECTOR', sql.NVarChar, ID_LECTOR)
            .input('DEVOLUCION', sql.Bit, DEVOLUCION)
            .query(queries.updatePrestamoByID)
        res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
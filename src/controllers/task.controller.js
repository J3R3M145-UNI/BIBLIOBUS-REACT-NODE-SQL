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
        const query = queries.getItemsFromTable(tableName);

        const result = await pool.request().query(query);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getPrestamoItems = async (req, res) => {
    try {
        const pool = await getConnection();

        // Construir la consulta SQL dinámicamente
        const query = queries.getPrestamoItems;

        const result = await pool.request().query(query);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getItemsFromTableByID = async (req, res) => {
    const tableName = req.params.tableName;
    const { id } = req.params

    try {
        const pool = await getConnection()
        const query = queries.getItemsFromTableByID(tableName);
        const result = await pool.request()
            .input('id', id)
            .query(query)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

/* export const post_task = async (req, res) => {

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
} */

export const insertItemIntoTable = async (req, res) => {
    const tableName = req.params.tableName; // Asumiendo que el nombre de la tabla se pasa como un parámetro en la URL
    const data = req.body;

    try {
        const pool = await getConnection();

        // Obtener la consulta de inserción desde el archivo "querys.js"
        const query = queries.postItem(tableName, data);

        const request = pool.request();

        // Asignar valores a los parámetros
        Object.keys(data).forEach(col => {
            request.input(col, data[col]);
        });

        const result = await request.query(query);

        res.json({ message: 'Registro insertado correctamente' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteItem = async (req, res) => {
    const tableName = req.params.tableName;
    const { id } = req.params

    try {
        const pool = await getConnection()
        const query = queries.deleteItem(tableName);
        const result = await pool.request()
            .input('id', id)
            .query(query)
        res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const updateItemByID = async (req, res) => {

    const tableName = req.params.tableName; // Asumiendo que el nombre de la tabla se pasa como un parámetro en la URL
    const { id } = req.params
    const data = req.body;

    try {
        const pool = await getConnection()

        // Obtener la consulta de inserción desde el archivo "querys.js"
        const query = queries.updateItemByID(tableName, data);

        const result = await pool.request()
            .input('id', id)
            .query(query)

        res.json({ message: 'Registro actualizado correctamente' });

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
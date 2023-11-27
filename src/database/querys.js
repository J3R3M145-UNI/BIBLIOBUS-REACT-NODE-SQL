
export const queries = {
    //PRESTAMOS CRUD
    getPrestamoItems: 'SELECT * FROM [BIBLIOBUSV2].[dbo].[vistaCargarTablaPrestamo]',

    //PRESTAMOS CRUD DEPRECATED
    postPrestamoItems: 'INSERT INTO PRESTAMO (FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, DEVOLUCION) VALUES (@FCHA_EMISION, @VENCE, @ID_LIBRO, @ID_LECTOR, @DEVOLUCION)',
    getPrestamoItemsByID: 'SELECT * FROM PRESTAMO WHERE ID_PRESTAMO = @id',
    deletePrestamoItem: 'DELETE FROM PRESTAMO WHERE ID_PRESTAMO = @id',
    updatePrestamoByID: 'UPDATE PRESTAMO SET FCHA_EMISION = @FCHA_EMISION, VENCE = @VENCE, ID_LIBRO = @ID_LIBRO, ID_LECTOR = @ID_LECTOR, DEVOLUCION = @DEVOLUCION WHERE ID_PRESTAMO = @ID_PRESTAMO',

    //CREAR USUARIO
    regUsuario: 'INSERT INTO USUARIO (username, email, password, nombre, apellido, tipo_usuario) VALUES (@username, @email, @password, @nombre, @apellido, @tipo_usuario)',
    //LOGIN
    login: 'SELECT * FROM USUARIO WHERE username = @username',
    //mostrarperfil
    profile: 'SELECT * FROM USUARIO WHERE username = @username',

    //get-querys
    getItemsFromTable: (tableName) => {
        var tableName2 = tableName.toUpperCase();
        return `SELECT * FROM [${tableName2}]`;
    },

    getItemsFromTableByID: (tableName) => {
        var tableName2 = tableName.toUpperCase();
        return `SELECT * FROM [${tableName2}] WHERE ID_${tableName2} = @id`;
    },

    //post-querys
    postItem: (tableName, data) => {
        var tableName2 = tableName.toUpperCase();
        const columns = Object.keys(data).map(col => `[${col}]`);
        const values = Object.values(data);

        return `INSERT INTO [${tableName2}] (${columns.join(', ')}) VALUES (${values.map(val => val).join(', ')})`;
    },

    //delete-querys
    deleteItem: (tableName) => {
        var tableName2 = tableName.toUpperCase();
        return `DELETE FROM [${tableName2}] WHERE ID_${tableName2} = @id`;
    }, 

    //update-querys
    updateItemByID: (tableName, data) => {
        var tableName2 = tableName.toUpperCase();
        const values = Object.values(data);
        const columns = Object.keys(data).map(col => `[${col}] = ${values[Object.keys(data).indexOf(`${col}`)]}`); // [col1] = val1, [col2] = val2, ...
        

        return `UPDATE [${tableName2}] SET ${columns.join(', ')} WHERE ID_${tableName2} = @id`;
    }
};
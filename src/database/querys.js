
export const queries = {
    //PRESTAMOS CRUD
    getPrestamoItems: 'SELECT * FROM PRESTAMO',
    postPrestamoItems: 'INSERT INTO PRESTAMO (FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, DEVOLUCION) VALUES (@FCHA_EMISION, @VENCE, @ID_LIBRO, @ID_LECTOR, @DEVOLUCION)',
    getPrestamoItemsByID: 'SELECT * FROM PRESTAMO WHERE ID_PRESTAMO = @id',
    deletePrestamoItem: 'DELETE FROM PRESTAMO WHERE ID_PRESTAMO = @id',
    updatePrestamoByID: 'UPDATE PRESTAMO SET FCHA_EMISION = @FCHA_EMISION, VENCE = @VENCE, ID_LIBRO = @ID_LIBRO, ID_LECTOR = @ID_LECTOR, DEVOLUCION = @DEVOLUCION WHERE ID_PRESTAMO = @ID_PRESTAMO',

    //CREAR USUARIO
    regUsuario: 'INSERT INTO USUARIOS (username, email, password, nombre, apellido, tipo_usuario) VALUES (@username, @email, @password, @nombre, @apellido, @tipo_usuario)',
    //LOGIN
    login: 'SELECT * FROM USUARIOS WHERE username = @username',
    //mostrarperfil
    profile: 'SELECT * FROM USUARIOS WHERE username = @username',

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
        const columns = Object.keys(data).map(col => `[${col}] = ${col}`);
        const values = Object.values(data);

        return `UPDATE [${tableName2}] SET ${columns.join(', ')} WHERE ID_${tableName2} = @ID_${tableName2}`;
    }
};
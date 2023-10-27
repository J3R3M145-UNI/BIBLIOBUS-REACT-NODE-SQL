import { sql } from 'index.js';

export const queries = {
    //PRESTAMOS CRUD
    getPrestamoItems: 'SELECT * FROM PRESTAMO',
    postPrestamoItems: 'INSERT INTO PRESTAMO (FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, DEVOLUCION) VALUES (@FCHA_EMISION, @VENCE, @ID_LIBRO, @ID_LECTOR, @DEVOLUCION)',
    getPrestamoByID: 'SELECT * FROM PRESTAMO WHERE ID_PRESTAMO = @id',
    deletePrestamo: 'DELETE FROM PRESTAMO WHERE ID_PRESTAMO = @id',
    updatePrestamoByID: 'UPDATE PRESTAMO SET FCHA_EMISION = @FCHA_EMISION, VENCE = @VENCE, ID_LIBRO = @ID_LIBRO, ID_LECTOR = @ID_LECTOR, DEVOLUCION = @DEVOLUCION WHERE ID_PRESTAMO = @ID_PRESTAMO',

    //CREAR USUARIO
    regUsuario: 'INSERT INTO USUARIOS (username, email, password, nombre, apellido, tipo_usuario) VALUES (@username, @email, @password, @nombre, @apellido, @tipo_usuario)',
    //LOGIN
    login: 'SELECT * FROM USUARIOS WHERE username = @username',
    //mostrarperfil
    profile: 'SELECT * FROM USUARIOS WHERE username = @username',

    //post-querys
    postItem: (tableName, data) => {
        let tableName2 = tableName.toUpperCase();
        return sql`INSERT INTO ${sql.identifier([tableName2])} (${sql.identifiers(Object.keys(data))}) VALUES (${sql.values(Object.values(data))})`;
    },
};
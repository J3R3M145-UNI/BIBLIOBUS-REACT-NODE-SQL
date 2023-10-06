﻿/****** Object:  Procedure [dbo].[NewSelectCommand]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].NewSelectCommand
AS
	SET NOCOUNT ON;
SELECT        PRESTAMO.ID_PRESTAMO, PRESTAMO.DEVOLUCION, PRESTAMO.FCHA_EMISION, PRESTAMO.VENCE, PRESTAMO.ID_LIBRO, LIBROS.TITULO, AUTOR.NOMBRE, PRESTAMO.ID_LECTOR, LECTORES.NOMBRE AS Expr1, 
                         LECTORES.APELLIDO
FROM            PRESTAMO INNER JOIN
                         LIBROS ON PRESTAMO.ID_LIBRO = LIBROS.ID_LIBRO INNER JOIN
                         AUTOR ON LIBROS.ID_AUTOR = AUTOR.ID_AUTOR INNER JOIN
                         LECTORES ON PRESTAMO.ID_LECTOR = LECTORES.ID_LECTOR

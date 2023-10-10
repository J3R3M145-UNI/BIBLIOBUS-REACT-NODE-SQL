﻿/****** Object:  Procedure [dbo].[SP_LibroInsertar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_InsertarLibro]
	-- Add the parameters for the stored procedure here
	@ID_LIBRO NVARCHAR(30),
	@ID_AUTOR NVARCHAR(30),
	@TITULO NVARCHAR(30),
	@EDICION NVARCHAR(30),
	@GENERO NVARCHAR(30),
	@ESTADO NVARCHAR(20),
	@ID_EDITORIAL NVARCHAR(30)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_LIBRO FROM LIBROS WHERE ID_LIBRO= @ID_LIBRO)
	BEGIN
		INSERT INTO LIBROS
		(ID_LIBRO, ID_AUTOR, TITULO, EDICION, GENERO, ESTADO, ID_EDITORIAL)
	
		VALUES (@ID_LIBRO, @ID_AUTOR, @TITULO, @EDICION, @GENERO, @ESTADO, @ID_EDITORIAL)
		RETURN 0
	END	
	ELSE
		RETURN 1
END

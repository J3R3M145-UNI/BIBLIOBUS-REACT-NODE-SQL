/****** Object:  Procedure [dbo].[CurLibrosSeleccionarTodos]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[CurLibrosSeleccionarTodos]
AS

BEGIN
	
	DECLARE @ID_LIBRO nvarchar(30),
			@ID_AUTOR nvarchar(30),
			@TITULO nvarchar(30),
			@EDICION nvarchar(30),
			@GENERO nvarchar(30),
			@ESTADO nvarchar(20),
			@ID_EDITORIAL nvarchar(30)

	CREATE TABLE #libros (
		[ID_LIBRO] [nvarchar](30),
	[ID_AUTOR] [nvarchar](30),
	[TITULO] [nvarchar](30),
	[EDICION] [nvarchar](30),
	[GENERO] [nvarchar](30),
	[ESTADO] [nvarchar](20),
	[ID_EDITORIAL] [nvarchar](30)
	)

	DECLARE CurLibros CURSOR FOR
			SELECT ID_AUTOR, ID_AUTOR, TITULO,
					EDICION, GENERO, ESTADO, ID_EDITORIAL
			FROM LIBROS 

	OPEN CurLibros
	FETCH Next FROM	CurLibros	-- Ubicarnos en el Primer Registro
		INTO		@ID_LIBRO,
			@ID_AUTOR,
			@TITULO,
			@EDICION,
			@GENERO,
			@ESTADO,
			@ID_EDITORIAL


		--PRINT 'ID_LIBRO - @ID_AUTOR - @TITULO - @EDICION - @GENERO - @ESTADO - @ID_EDITORIAL'

		WHILE (@@FETCH_STATUS = 0) 
		BEGIN

			--PRINT @ID_LIBRO+ ' - ' +@ID_AUTOR+ ' - ' +@TITULO+ ' - ' +@EDICION

			INSERT INTO #libros(ID_LIBRO, ID_AUTOR, TITULO, EDICION, GENERO, ESTADO, ID_EDITORIAL)
			VALUES (@ID_LIBRO, @ID_AUTOR, @TITULO, @EDICION, @GENERO, @ESTADO, @ID_EDITORIAL)
			FETCH Next FROM	CurLibros	-- Ubicarnos en el Primer Registro
			INTO @ID_LIBRO,
				@ID_AUTOR,
				@TITULO,
				@EDICION,
				@GENERO,
				@ESTADO,
				@ID_EDITORIAL

		END

		SELECT * FROM #libros

		Drop Table #libros

		Close	CurLibros
		DEALLOCATE CurLibros
END

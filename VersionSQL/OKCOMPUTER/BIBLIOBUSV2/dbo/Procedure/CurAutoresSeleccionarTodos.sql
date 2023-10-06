/****** Object:  Procedure [dbo].[CurAutoresSeleccionarTodos]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[CurAutoresSeleccionarTodos]
AS

BEGIN
	
	DECLARE 
			@ID_AUTOR nvarchar(30),
			@NOMBRE nvarchar(30),
			@NACIONALIDAD nvarchar(30)

	CREATE TABLE #autores(
	
	[ID_AUTOR] [nvarchar](30),
	[NOMBRE] [nvarchar](30),
	[NACIONALIDAD] [nvarchar](30)
	)

	DECLARE CurAutor CURSOR FOR	 -- declarar cursor
			SELECT ID_AUTOR, NOMBRE, NACIONALIDAD
			FROM AUTOR

	OPEN CurAutor
	FETCH Next FROM	CurAutor	-- Ubicarnos en el Primer Registro
		INTO
			@ID_AUTOR,
			@NOMBRE,
			@NACIONALIDAD

		WHILE (@@FETCH_STATUS = 0) 
		BEGIN

			INSERT INTO #autores (ID_AUTOR, NOMBRE, NACIONALIDAD)

			VALUES (
				@ID_AUTOR,
				@NOMBRE,
				@NACIONALIDAD)

			FETCH Next FROM	CurAutor	-- Ubicarnos en el Primer Registro
			INTO
				@ID_AUTOR,
				@NOMBRE,
				@NACIONALIDAD

		END

		SELECT * FROM #autores

		Drop Table #autores

		Close	CurAutor
		DEALLOCATE CurAutor
END

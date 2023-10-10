/****** Object:  Procedure [dbo].[CurPrestamosSeleccionarTodos]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[CurPrestamosSeleccionarTodos]
AS

BEGIN
	
	DECLARE @ID_PRESTAMO int,
			@FCHA_EMISION date,
			@VENCE date,
			@ID_LIBRO nvarchar(30),
			@ID_LECTOR nvarchar(30),
			@ID_AUTOR nvarchar(30)

	CREATE TABLE #prestamo(
	[ID_PRESTAMO] [int],
	[FCHA_EMISION] [date],
	[VENCE] [date],
	[ID_LIBRO] [nvarchar](30),
	[ID_LECTOR] [nvarchar](30),
	[ID_AUTOR] [nvarchar](30)
	)

	DECLARE CurPrestamo CURSOR FOR
			SELECT ID_PRESTAMO, FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, ID_AUTOR
			FROM PRESTAMO

	OPEN CurPrestamo
	FETCH Next FROM	CurPrestamo	-- Ubicarnos en el Primer Registro
		INTO
			@ID_PRESTAMO,
			@FCHA_EMISION,
			@VENCE,
			@ID_LIBRO,
			@ID_LECTOR,
			@ID_AUTOR

		WHILE (@@FETCH_STATUS = 0) 
		BEGIN

			INSERT INTO #prestamo (ID_PRESTAMO, FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR, ID_AUTOR)

			VALUES (@ID_PRESTAMO,
			@FCHA_EMISION,
			@VENCE,
			@ID_LIBRO,
			@ID_LECTOR,
			@ID_AUTOR)

			FETCH Next FROM	CurPrestamo	-- Ubicarnos en el Primer Registro
			INTO
				@ID_PRESTAMO,
				@FCHA_EMISION,
				@VENCE,
				@ID_LIBRO,
				@ID_LECTOR,
				@ID_AUTOR

		END

		SELECT * FROM #prestamo

		Drop Table #prestamo

		Close	CurPrestamo
		DEALLOCATE CurPrestamo
END

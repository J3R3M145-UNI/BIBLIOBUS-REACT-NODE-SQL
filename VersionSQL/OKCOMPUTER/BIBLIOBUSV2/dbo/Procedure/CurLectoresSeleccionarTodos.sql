/****** Object:  Procedure [dbo].[CurLectoresSeleccionarTodos]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[CurLectoresSeleccionarTodos]
AS

BEGIN
	
	DECLARE @ID_LECTOR nvarchar(30),
			@NOMBRE nvarchar(50),
			@APELLIDO nvarchar(50),
			@EDAD INT,
			@TELEFONO nvarchar(8),
			@SEXO nvarchar(10),
			@ESTADO nvarchar(15),
			@OCUPACION nvarchar(50),
			@DIRECCION nvarchar(60),
			@OBSERVACION nvarchar(60),
			@ID_cESTUDIO nvarchar(15),
			@ID_cTRABAJO nvarchar(10),
			@NIVEL_ESCOLARIDAD nvarchar(20)

	CREATE TABLE #lectores (
		[ID_LECTOR] [nvarchar](30),
		[NOMBRE] [nvarchar](50),
		[APELLIDO] [nvarchar](50),
		[EDAD] [int],
		[TELEFONO] [nvarchar](8),
		[SEXO] [nvarchar](10),
		[ESTADO] [nvarchar](15),
		[OCUPACION] [nvarchar](50),
		[DIRECCION] [nvarchar](60),
		[OBSERVACION] [nvarchar](60),
		[ID_cESTUDIO] [nvarchar](15),
		[ID_cTRABAJO] [nvarchar](10),
		[NIVEL_ESCOLARIDAD] [nvarchar](20)
	)

	DECLARE CurLectores CURSOR FOR
			SELECT ID_LECTOR, NOMBRE, APELLIDO,EDAD, TELEFONO, SEXO, ESTADO,
				   OCUPACION, DIRECCION, OBSERVACION, ID_cESTUDIO, ID_cTRABAJO, NIVEL_ESCOLARIDAD
			FROM LECTORES

	OPEN CurLectores
	FETCH Next FROM	CurLectores	-- Ubicarnos en el Primer Registro
		INTO
			@ID_LECTOR,
			@NOMBRE,
			@APELLIDO,
			@EDAD,
			@TELEFONO,
			@SEXO,
			@ESTADO,
			@OCUPACION,
			@DIRECCION,
			@OBSERVACION,
			@ID_cESTUDIO,
			@ID_cTRABAJO,
			@NIVEL_ESCOLARIDAD

		WHILE (@@FETCH_STATUS = 0) 
		BEGIN

			INSERT INTO #lectores (ID_LECTOR, NOMBRE, APELLIDO,EDAD, TELEFONO, SEXO, ESTADO,
				   OCUPACION, DIRECCION, OBSERVACION, ID_cESTUDIO, ID_cTRABAJO, NIVEL_ESCOLARIDAD)

			VALUES (@ID_LECTOR, @NOMBRE, @APELLIDO, @EDAD, @TELEFONO, @SEXO, @ESTADO,
			@OCUPACION, @DIRECCION, @OBSERVACION, @ID_cESTUDIO, @ID_cTRABAJO, @NIVEL_ESCOLARIDAD)

			FETCH Next FROM	CurLectores	-- Ubicarnos en el Primer Registro
			INTO
				@ID_LECTOR,
				@NOMBRE,
				@APELLIDO,
				@EDAD,
				@TELEFONO,
				@SEXO,
				@ESTADO,
				@OCUPACION,
				@DIRECCION,
				@OBSERVACION,
				@ID_cESTUDIO,
				@ID_cTRABAJO,
				@NIVEL_ESCOLARIDAD

		END

		SELECT * FROM #lectores

		Drop Table #lectores

		Close	CurLectores
		DEALLOCATE CurLectores
END

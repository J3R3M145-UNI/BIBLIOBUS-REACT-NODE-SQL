/****** Object:  Procedure [dbo].[SP_LectoresInsertar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_LectoresInsertar]
	-- Add the parameters for the stored procedure here
	@ID_LECTOR nvarchar,
	@NOMBRE nvarchar,
	@APELLIDO nvarchar,
	@EDAD int,
	@TELEFONO nvarchar,
	@SEXO nvarchar,
	@ESTADO nvarchar,
	@OCUPACION nvarchar,
	@DIRECCION nvarchar,
	@OBSERVACION nvarchar,
	@ID_cESTUDIO nvarchar,
	@ID_cTRABAJO nvarchar,
	@NIVEL_ESCOLARIDAD nvarchar

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_LECTOR FROM LECTORES WHERE ID_LECTOR= @ID_LECTOR)
	BEGIN
		INSERT INTO LECTORES
		(ID_LECTOR, NOMBRE, APELLIDO, EDAD, TELEFONO, SEXO, ESTADO,
		 OCUPACION, DIRECCION, OBSERVACION, ID_cESTUDIO, ID_cTRABAJO, NIVEL_ESCOLARIDAD)
	
		VALUES (@ID_LECTOR, @NOMBRE, @APELLIDO, @EDAD, @TELEFONO, @SEXO, @ESTADO,
				@OCUPACION, @DIRECCION, @OBSERVACION, @ID_cESTUDIO, @ID_cTRABAJO, @NIVEL_ESCOLARIDAD)
		RETURN 0
	END	
	ELSE
		RETURN 1
END

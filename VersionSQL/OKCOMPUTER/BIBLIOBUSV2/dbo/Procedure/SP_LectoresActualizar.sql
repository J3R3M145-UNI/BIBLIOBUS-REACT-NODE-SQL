/****** Object:  Procedure [dbo].[SP_LectoresActualizar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_LectoresActualizar]
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
		UPDATE LECTORES SET
		NOMBRE=@NOMBRE, APELLIDO=@APELLIDO, EDAD=@EDAD, TELEFONO=@TELEFONO, SEXO=@SEXO, ESTADO=@ESTADO,
		OCUPACION=@OCUPACION, DIRECCION=@DIRECCION, OBSERVACION=@OBSERVACION, ID_cESTUDIO=@ID_cESTUDIO, ID_cTRABAJO=@ID_cTRABAJO, NIVEL_ESCOLARIDAD=@NIVEL_ESCOLARIDAD
	
		WHERE ID_LECTOR= @ID_LECTOR
		RETURN 0
	END	
	ELSE
		RETURN 1
END

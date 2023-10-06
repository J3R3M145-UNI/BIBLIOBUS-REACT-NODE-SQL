/****** Object:  Procedure [dbo].[SP_CEstudioActualizar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_CEstudioActualizar]
	@ID_cESTUDIO nvarchar(15),
	@NOMBRE nvarchar(30),
	@TELEFONO nvarchar(8),
	@EMAIL nvarchar(50),
	@ID_COMUNIDAD nvarchar(20)
AS
BEGIN

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_cESTUDIO FROM CENTRO_ESTUDIO WHERE ID_cESTUDIO=@ID_cESTUDIO)
		RETURN 1
	ELSE
		BEGIN
		UPDATE CENTRO_ESTUDIO SET NOMBRE = @NOMBRE, TELEFONO = @TELEFONO, EMAIL = @EMAIL, ID_COMUNIDAD = @ID_COMUNIDAD
		WHERE ID_cESTUDIO = @ID_cESTUDIO
		RETURN 0
	END
END

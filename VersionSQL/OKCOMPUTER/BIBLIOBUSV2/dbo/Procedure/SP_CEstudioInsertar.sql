/****** Object:  Procedure [dbo].[SP_CEstudioInsertar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_CEstudioInsertar]
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
		INSERT INTO CENTRO_ESTUDIO(ID_cESTUDIO, NOMBRE, TELEFONO, EMAIL, ID_COMUNIDAD) 
		VALUES(@ID_cESTUDIO, @NOMBRE, @TELEFONO, @EMAIL, @ID_COMUNIDAD)
		RETURN 0
	END
END

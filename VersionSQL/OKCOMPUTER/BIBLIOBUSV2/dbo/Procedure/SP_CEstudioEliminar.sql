/****** Object:  Procedure [dbo].[SP_CEstudioEliminar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_CEstudioEliminar]
	@ID_cESTUDIO nvarchar(15)
AS
BEGIN

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_cESTUDIO FROM CENTRO_ESTUDIO WHERE ID_cESTUDIO=@ID_cESTUDIO)
		RETURN 1
	ELSE
		BEGIN
		DELETE FROM CENTRO_ESTUDIO
		WHERE ID_cESTUDIO = @ID_cESTUDIO
		RETURN 0
	END
END

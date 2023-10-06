/****** Object:  Procedure [dbo].[SP_LectoresEliminar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_LectoresEliminar]
	-- Add the parameters for the stored procedure here
	@ID_LECTOR nvarchar

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_LECTOR FROM LECTORES WHERE ID_LECTOR= @ID_LECTOR)
	BEGIN
		DELETE FROM LECTORES
		WHERE ID_LECTOR= @ID_LECTOR
		RETURN 0
	END	
	ELSE
		RETURN 1
END

/****** Object:  Procedure [dbo].[SP_EditorialEliminar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_EditorialEliminar]
	@ID_EDITORIAL nvarchar

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_EDITORIAL FROM EDITORIAL WHERE ID_EDITORIAL=@ID_EDITORIAL)
	BEGIN
		DELETE FROM EDITORIAL 
		WHERE ID_EDITORIAL= @ID_EDITORIAL
		RETURN 0
	END
	ELSE
		
		RETURN 1
END

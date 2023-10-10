/****** Object:  Procedure [dbo].[SP_EditorialActualizar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_EditorialActualizar]
	@ID_EDITORIAL nvarchar,
	@NOMBRE nvarchar,
	@TELEFONO nvarchar,
	@EMAIL nvarchar,
	@DIRECCION nvarchar
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_EDITORIAL FROM EDITORIAL WHERE ID_EDITORIAL=@ID_EDITORIAL)
	BEGIN
		UPDATE EDITORIAL SET NOMBRE= @NOMBRE, TELEFONO=@TELEFONO, EMAIL=@EMAIL, DIRECCION=@DIRECCION
		WHERE ID_EDITORIAL= @ID_EDITORIAL
		RETURN 0
	END
	ELSE
		
		RETURN 1
END

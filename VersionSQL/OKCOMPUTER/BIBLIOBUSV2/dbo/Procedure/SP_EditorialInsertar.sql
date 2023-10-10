/****** Object:  Procedure [dbo].[SP_EditorialInsertar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_EditorialInsertar]
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
		RETURN 1
	ELSE
		BEGIN
		INSERT INTO EDITORIAL(ID_EDITORIAL, NOMBRE, TELEFONO, EMAIL, DIRECCION) 
		VALUES(@ID_EDITORIAL, @NOMBRE, @TELEFONO, @EMAIL, @DIRECCION)
		RETURN 0
	END
END

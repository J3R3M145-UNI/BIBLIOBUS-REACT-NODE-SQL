/****** Object:  Procedure [dbo].[SP_AutorInsertar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_AutorInsertar]
	@ID_AUTOR int,
	@NOMBRE nvarchar(30),
	@NACIONALIDAD nvarchar(30)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_AUTOR FROM AUTOR WHERE ID_AUTOR=@ID_AUTOR)
		RETURN 1
	ELSE
		BEGIN
		INSERT INTO AUTOR(ID_AUTOR, NOMBRE, NACIONALIDAD) 
		VALUES(@ID_AUTOR, @NOMBRE, @NACIONALIDAD)
		RETURN 0
	END
END

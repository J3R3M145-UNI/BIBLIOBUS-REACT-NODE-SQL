/****** Object:  Procedure [dbo].[SP_AutorActualizar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_ActualizarAutor]
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
	BEGIN
		UPDATE AUTOR SET
			@NOMBRE = NOMBRE, @NACIONALIDAD= @NACIONALIDAD
		WHERE @ID_AUTOR = ID_AUTOR
		RETURN 0
	END
	ELSE
		RETURN 1
END

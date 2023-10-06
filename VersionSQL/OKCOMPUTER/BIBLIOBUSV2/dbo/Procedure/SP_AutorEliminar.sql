/****** Object:  Procedure [dbo].[SP_AutorEliminar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_EliminarAutor]
	@ID_AUTOR int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_AUTOR FROM AUTOR WHERE ID_AUTOR=@ID_AUTOR)
	BEGIN
		DELETE FROM AUTOR
		WHERE @ID_AUTOR = ID_AUTOR
		RETURN 0
	END
	ELSE
		RETURN 1
END

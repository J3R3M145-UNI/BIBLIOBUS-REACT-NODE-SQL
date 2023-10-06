/****** Object:  Procedure [dbo].[SP_LibroEliminar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_LibroEliminar]
	-- Add the parameters for the stored procedure here
	@ID_LIBRO NVARCHAR(30)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_LIBRO FROM LIBROS WHERE ID_LIBRO= @ID_LIBRO)
	BEGIN
		DELETE FROM LIBROS
		WHERE ID_LIBRO=@ID_LIBRO
		RETURN 0
	END	
	ELSE
		RETURN 1
END

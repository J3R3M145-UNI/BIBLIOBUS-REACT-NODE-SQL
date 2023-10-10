/****** Object:  Procedure [dbo].[SP_PrestamoEliminar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_EliminarPrestamo]
	-- Add the parameters for the stored procedure here
	@id_prestamo int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF (SELECT ID_PRESTAMO FROM PRESTAMO WHERE @id_prestamo= ID_PRESTAMO) = @id_prestamo
	BEGIN

		DELETE FROM PRESTAMO
		WHERE ID_PRESTAMO= @id_prestamo
		RETURN 0

	END

	ELSE
		RETURN 1
END

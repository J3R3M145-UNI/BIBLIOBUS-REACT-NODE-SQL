/****** Object:  Procedure [dbo].[SP_PrestamoDevolucion]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_PrestamoDevolucion]
	@ID_PRESTAMO int,
	@DEVOLUCION BIT,
	@ESTADO nvarchar(20)
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF EXISTS (SELECT ID_PRESTAMO FROM PRESTAMO WHERE ID_PRESTAMO=@ID_PRESTAMO)
	BEGIN
		UPDATE PRESTAMO SET
			DEVOLUCION= @DEVOLUCION
		WHERE ID_PRESTAMO=@ID_PRESTAMO

		RETURN 0
	END
	ELSE	
		RETURN 0
END

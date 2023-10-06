/****** Object:  Procedure [dbo].[SP_PrestamoInsertar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_PrestamoInsertar]
	-- Add the parameters for the stored procedure here
	
	@FCHA_EMISION date,
	@VENCE date,
	@ID_LIBRO nvarchar(30),
	@ID_LECTOR nvarchar(30)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	IF (SELECT ESTADO FROM LIBROS WHERE ID_LIBRO= @ID_LIBRO)= N'Disponible'
	BEGIN
		INSERT INTO PRESTAMO
		( FCHA_EMISION, VENCE, ID_LIBRO, ID_LECTOR)
	
		VALUES ( @FCHA_EMISION, @VENCE, @ID_LIBRO, @ID_LECTOR)
		RETURN 0
	END	
	ELSE
		RETURN 1
END

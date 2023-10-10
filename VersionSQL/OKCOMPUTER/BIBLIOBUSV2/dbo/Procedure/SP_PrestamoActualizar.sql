/****** Object:  Procedure [dbo].[SP_PrestamoActualizar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_PrestamoActualizar]
	@ID_PRESTAMO int,
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
	IF EXISTS (SELECT ID_PRESTAMO FROM PRESTAMO WHERE ID_PRESTAMO=@ID_PRESTAMO)
	BEGIN
		UPDATE PRESTAMO SET
			FCHA_EMISION= @FCHA_EMISION, VENCE= @VENCE, 
			ID_LECTOR= @ID_LECTOR, ID_LIBRO= @ID_LIBRO

		WHERE ID_PRESTAMO=@ID_PRESTAMO
		RETURN 0
	END
	ELSE	
		RETURN 0
END

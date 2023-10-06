/****** Object:  Procedure [dbo].[SP_PrestamoSelecionar]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_PrestamoSelecionar]
	-- Add the parameters for the stored procedure here
	@emision date OUTPUT,
	@vence date OUTPUT,
	@id_lector nvarchar(30) OUTPUT,
	@id_libro nvarchar(30) OUTPUT,
	@id_prestamo int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT @emision= FCHA_EMISION, @vence= VENCE, @id_lector= ID_LECTOR, @id_libro= ID_LIBRO
	FROM PRESTAMO 
	WHERE ID_PRESTAMO=@id_prestamo

	RETURN;
END

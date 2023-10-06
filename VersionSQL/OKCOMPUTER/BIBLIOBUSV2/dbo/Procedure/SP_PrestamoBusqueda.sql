/****** Object:  Procedure [dbo].[SP_PrestamoBusqueda]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE PROCEDURE [dbo].[SP_BusquedaPrestamo]
	-- Add the parameters for the stored procedure here
	@ID_LIBRO nvarchar(30),
	@ID_LECTOR nvarchar(30),
	@NOMBRE_LECTOR nvarchar(50)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT ID_PRESTAMO, FCHA_EMISION, VENCE, ID_LECTOR,
           (SELECT NOMBRE FROM LECTORES WHERE PRESTAMO.ID_LECTOR= LECTORES.ID_LECTOR),
           (SELECT APELLIDO FROM LECTORES WHERE PRESTAMO.ID_LECTOR= LECTORES.ID_LECTOR),
           ID_LIBRO,
           (SELECT TITULO FROM LIBROS WHERE PRESTAMO.ID_LIBRO= LIBROS.ID_LIBRO),
           (SELECT NOMBRE FROM AUTOR WHERE PRESTAMO.ID_AUTOR= AUTOR.ID_AUTOR)
           FROM PRESTAMO WHERE ID_LIBRO LIKE '% @ID_LIBRO %' OR ID_LECTOR LIKE '% @ID_LECTOR %'
		   OR (SELECT NOMBRE FROM LECTORES WHERE PRESTAMO.ID_LECTOR= LECTORES.ID_LECTOR) LIKE '% @NOMBRE_LECTOR %'

END

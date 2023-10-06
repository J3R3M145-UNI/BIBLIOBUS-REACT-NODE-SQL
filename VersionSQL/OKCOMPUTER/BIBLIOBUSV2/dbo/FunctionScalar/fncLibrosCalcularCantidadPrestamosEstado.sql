/****** Object:  Function [dbo].[fncLibrosCalcularCantidadPrestamosEstado]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE FUNCTION [dbo].[fncLibrosCalcularCantidadPrestamosEstado]
(
	-- Add the parameters for the function here
	@Estado date
)
RETURNS int
AS
BEGIN
	-- Declare the return variable here
	DECLARE @cantPrestamo int;

	-- Add the T-SQL statements to compute the return value 
	Set @cantPrestamo= CAST((SELECT COUNT(*) FROM LIBROS WHERE ESTADO= @Estado) AS INT );

	-- Return the result of the function
	RETURN @cantPrestamo

END

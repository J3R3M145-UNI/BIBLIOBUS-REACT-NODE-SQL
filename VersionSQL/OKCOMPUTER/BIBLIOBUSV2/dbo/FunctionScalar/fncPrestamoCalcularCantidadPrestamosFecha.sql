/****** Object:  Function [dbo].[fncPrestamoCalcularCantidadPrestamosFecha]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE FUNCTION [dbo].[fncPrestamoCalcularCantidadPrestamosFecha]
(
	-- Add the parameters for the function here
	@Fecha date
)
RETURNS int
AS
BEGIN
	-- Declare the return variable here
	DECLARE @cantPrestamo int;

	-- Add the T-SQL statements to compute the return value 
	Set @cantPrestamo= CAST((SELECT COUNT(*) FROM PRESTAMO WHERE FCHA_EMISION= @Fecha) AS INT );

	-- Return the result of the function
	RETURN @cantPrestamo

END

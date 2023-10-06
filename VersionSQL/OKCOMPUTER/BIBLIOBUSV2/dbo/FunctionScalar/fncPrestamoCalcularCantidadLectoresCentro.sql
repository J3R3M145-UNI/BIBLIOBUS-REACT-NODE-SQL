/****** Object:  Function [dbo].[fncPrestamoCalcularCantidadLectoresCentro]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE FUNCTION [dbo].[fncPrestamoCalcularCantidadLectoresCentro]
(
	-- Add the parameters for the function here
	@id_centro nvarchar(15)
)
RETURNS int
AS
BEGIN
	-- Declare the return variable here
	DECLARE @cantLectores int;

	-- Add the T-SQL statements to compute the return value 
	Set @cantLectores= CAST ((SELECT COUNT(*) FROM LECTORES 
	WHERE (ID_cESTUDIO= @id_centro) OR (ID_cTRABAJO= @id_centro)) AS INT);

	-- Return the result of the function
	RETURN @cantLectores

END

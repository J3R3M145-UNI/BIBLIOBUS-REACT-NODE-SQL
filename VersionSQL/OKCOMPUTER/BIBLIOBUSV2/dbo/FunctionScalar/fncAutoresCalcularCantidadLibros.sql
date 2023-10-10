/****** Object:  Function [dbo].[fncAutoresCalcularCantidadLibros]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE FUNCTION [dbo].[fncAutoresCalcularCantidadLibros]
(
	-- Add the parameters for the function here
	@idAutor nvarchar(30)
)
RETURNS int
AS
BEGIN
	-- Declare the return variable here
	DECLARE @cantLibro int;

	-- Add the T-SQL statements to compute the return value 
	Set @cantLibro= CAST((SELECT COUNT(*) FROM LIBROS WHERE ID_AUTOR= @idAutor) AS INT);

	-- Return the result of the function
	RETURN @cantLibro

END

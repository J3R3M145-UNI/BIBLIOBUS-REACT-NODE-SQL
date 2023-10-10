/****** Object:  Function [dbo].[fncLectoresCalcularAnioNacimiento]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE FUNCTION [dbo].[fncLectoresCalcularAnioNacimiento]
(
	-- Add the parameters for the function here
	@id_lector nvarchar(30)
)
RETURNS int
AS
BEGIN
	-- Declare the return variable here
	DECLARE @anioNac int;

	-- Add the T-SQL statements to compute the return value 
	Set @anioNac= YEAR(GETDATE()) - (SELECT EDAD FROM LECTORES WHERE ID_LECTOR= @id_lector)

	-- Return the result of the function
	RETURN @anioNac

END

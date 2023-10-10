/****** Object:  Table [dbo].[USUARIOS]    Committed by VersionSQL https://www.versionsql.com ******/

SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[USUARIOS](
	[id_user] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](20) NOT NULL,
	[email] [varchar](30) NULL,
	[password] [varchar](100) NOT NULL,
	[nombre] [varchar](43) NOT NULL,
	[apellido] [varchar](35) NOT NULL,
	[tipo_usuario] [int] NULL
) ON [PRIMARY]

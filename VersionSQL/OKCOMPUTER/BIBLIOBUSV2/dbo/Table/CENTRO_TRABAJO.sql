﻿/****** Object:  Table [dbo].[CENTRO_TRABAJO]    Committed by VersionSQL https://www.versionsql.com ******/

SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[CENTRO_TRABAJO](
	[ID_cTRABAJO] [nvarchar](10) NOT NULL,
	[NOMBRE] [nvarchar](30) NULL,
	[TELEFONO] [nvarchar](8) NULL,
	[EMAIL] [nvarchar](50) NULL,
	[ID_COMUNIDAD] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_cTRABAJO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

ALTER TABLE [dbo].[CENTRO_TRABAJO]  WITH CHECK ADD  CONSTRAINT [FK__CENTRO_TR__ID_CO__35BCFE0A] FOREIGN KEY([ID_COMUNIDAD])
REFERENCES [dbo].[COMUNIDAD] ([ID_COMUNIDAD])
ON UPDATE CASCADE
ON DELETE CASCADE
ALTER TABLE [dbo].[CENTRO_TRABAJO] CHECK CONSTRAINT [FK__CENTRO_TR__ID_CO__35BCFE0A]

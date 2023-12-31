﻿/****** Object:  Table [dbo].[COMUNIDAD]    Committed by VersionSQL https://www.versionsql.com ******/

SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[COMUNIDAD](
	[ID_COMUNIDAD] [nvarchar](20) NOT NULL,
	[NOMBRE] [nvarchar](50) NULL,
	[ID_MUNICIPIO] [nvarchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_COMUNIDAD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

ALTER TABLE [dbo].[COMUNIDAD]  WITH CHECK ADD  CONSTRAINT [FK__COMUNIDAD__ID_MU__32E0915F] FOREIGN KEY([ID_MUNICIPIO])
REFERENCES [dbo].[MUNICIPIO] ([ID_MUNICIPIO])
ON UPDATE CASCADE
ON DELETE CASCADE
ALTER TABLE [dbo].[COMUNIDAD] CHECK CONSTRAINT [FK__COMUNIDAD__ID_MU__32E0915F]

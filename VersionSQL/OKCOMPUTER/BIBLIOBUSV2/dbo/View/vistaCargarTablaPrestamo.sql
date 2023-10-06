/****** Object:  View [dbo].[vistaCargarTablaPrestamo]    Committed by VersionSQL https://www.versionsql.com ******/

CREATE VIEW dbo.vistaCargarTablaPrestamo
AS
SELECT        dbo.PRESTAMO.ID_PRESTAMO, dbo.PRESTAMO.DEVOLUCION, dbo.PRESTAMO.FCHA_EMISION, dbo.PRESTAMO.VENCE, dbo.LECTORES.NOMBRE, dbo.LECTORES.APELLIDO, dbo.PRESTAMO.ID_LIBRO, dbo.LIBROS.TITULO, 
                         dbo.AUTOR.NOMBRE AS AUTOR,
                             (SELECT        NOMBRE
                               FROM            dbo.CENTRO_ESTUDIO
                               WHERE        (ID_cESTUDIO = dbo.LECTORES.ID_cESTUDIO)) AS CENTRO_ESTUDIO,
                             (SELECT        NOMBRE
                               FROM            dbo.CENTRO_TRABAJO
                               WHERE        (ID_cTRABAJO = dbo.LECTORES.ID_cTRABAJO)) AS CENTRO_TRABAJO
FROM            dbo.PRESTAMO INNER JOIN
                         dbo.LECTORES ON dbo.PRESTAMO.ID_LECTOR = dbo.LECTORES.ID_LECTOR INNER JOIN
                         dbo.LIBROS ON dbo.PRESTAMO.ID_LIBRO = dbo.LIBROS.ID_LIBRO INNER JOIN
                         dbo.AUTOR ON dbo.LIBROS.ID_AUTOR = dbo.AUTOR.ID_AUTOR

EXECUTE sys.sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[61] 4[6] 2[15] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -96
         Left = 0
      End
      Begin Tables = 
         Begin Table = "PRESTAMO"
            Begin Extent = 
               Top = 251
               Left = 307
               Bottom = 381
               Right = 479
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "LECTORES"
            Begin Extent = 
               Top = 102
               Left = 38
               Bottom = 232
               Right = 240
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "LIBROS"
            Begin Extent = 
               Top = 102
               Left = 278
               Bottom = 232
               Right = 448
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "AUTOR"
            Begin Extent = 
               Top = 103
               Left = 671
               Bottom = 216
               Right = 847
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 12
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vistaCargarTablaPrestamo'
EXECUTE sys.sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vistaCargarTablaPrestamo'
EXECUTE sys.sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = N'2', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vistaCargarTablaPrestamo'

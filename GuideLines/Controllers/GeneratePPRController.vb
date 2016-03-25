Imports System.IO
Imports GuideLines.Office
Imports System.Net
Imports GuideLines.Models
Imports WebMatrix.WebData
Imports Microsoft.Office.Interop.Word
Imports Microsoft.Office.Interop.Excel
Imports Microsoft.Office.Interop

Namespace Controllers

    Public Class GeneratePPRController
        Inherits System.Web.Mvc.Controller
        Public Shared WordApplicationRef As Microsoft.Office.Interop.Word.Application
        Public Shared db As New Entities
        '
        ' GET: /GeneratePPR

        Function Index() As ActionResult
            Return View()
        End Function

        '
        ' GET: /GeneratePPR/Details/5

        Function Details(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' GET: /GeneratePPR/Create

        Function Create() As ActionResult
            Return View()
        End Function

        '
        ' POST: /GeneratePPR/Create

        <HttpPost()> _
        Shared Function Create(ByVal projectId As Integer, ByVal pprQuequeId As Integer) As String

            'Dim fileToOpen As String
            'Dim bkff As New BookMark
            'fileToOpen = "\\dorado\NRDG\Files\Template.docx"
            'Dim wordDocument As Microsoft.Office.Interop.Word.Document
            'WordApplicationRef = CreateObject("Word.Application")
            'Dim missing As Object = Type.Missing
            'wordDocument = WordApplicationRef.Documents.Add(fileToOpen, missing, missing, missing)
            'wordDocument.Activate()
            'WordApplicationRef.DisplayAlerts = False
            'If wordDocument IsNot Nothing Then
            '    If wordDocument.Range.Bookmarks.Count > 0 Then
            '        For Each bmk In wordDocument.Bookmarks
            '            Dim bkName = bmk.name

            '            Dim bks As List(Of BookMark) = GetBookmarksbyID(projectId)
            '            Dim bookmarkFound As Object = From bkm In bks
            '                               Where bkm.BookmarkDescription = bkName
            '                               Select bkm
            '            For Each bkf In bookmarkFound
            '                bkff = bkf
            '            Next
            '            If bkff.BookmarkAnswer IsNot Nothing Then
            '                If clsWordUtility.IsAnExistingBookmark(wordDocument, bkName) Then
            '                    Dim competitive As String = bkName
            '                    If competitive = "Competitive_Landscape" Then

            '                        Dim landscape As CompetitiveLandscape = (From results In db.CompetitiveLandscapes
            '                                                               Where results.ProjectId = projectId
            '                                                               Select results).FirstOrDefault()

            '                        If IsNothing(landscape) Then
            '                        Else
            '                            Dim landInfo As String = landscape.Company

            '                            Dim serializer = New System.Web.Script.Serialization.JavaScriptSerializer()
            '                            Dim objectAsJsonStrings = serializer.DeserializeObject(landInfo)

            '                            Dim competitiveTableData As New ArrayList()

            '                            For Each lands In objectAsJsonStrings
            '                                Dim competitivetableItem As List(Of String) = Enumerable.Cast(Of Object)(lands).Cast(Of String)().ToList()
            '                                competitiveTableData.Add(competitivetableItem)
            '                            Next
            '                            If competitiveTableData.Count > 0 Then
            '                                Dim colums = competitiveTableData(0)
            '                                Dim columnas = colums.Count()

            '                                Dim Rows = competitiveTableData.Count
            '                                Dim r As Integer, c As Integer
            '                                Dim oTable As Word.Table

            '                                oTable = wordDocument.Tables.Add(wordDocument.Bookmarks("Competitive_Landscape").Range, Rows, columnas)
            '                                oTable.Range.ParagraphFormat.SpaceAfter = 6

            '                                For r = 1 To Rows
            '                                    Dim competitivetableItem As List(Of String) = competitiveTableData(r - 1)
            '                                    For c = 1 To columnas
            '                                        oTable.Cell(r, c).Range.Text = competitivetableItem(c - 1)
            '                                    Next
            '                                Next
            '                            End If
            '                        End If
            '                    Else
            '                        clsWordUtility.InsertBookmark(wordDocument, bkName, bkff.BookmarkAnswer)
            '                    End If
            '                End If
            '            End If
            '        Next bmk
            '    End If
            'End If
            'Dim superCast As New BookmarkView
            ''It gets the information from the servers from the feed page replace string with project name
            'Dim project As ppr_ProjectListTable = db.ppr_ProjectListTable.Find(projectId)
            'Dim extraBookmarksFromFeedPage = RetrieveDataFormFeedPage.GetBookMark(project.ProjectName)
            'For Each bffp In extraBookmarksFromFeedPage
            '    Dim bookmarkFound As Object = From bkm In extraBookmarksFromFeedPage.ToList()
            '                       Where bkm.BookmarkDescription = bffp.BookmarkDescription
            '                       Select bkm
            '    For Each bkf In bookmarkFound
            '        superCast = bkf
            '    Next
            '    If bffp.BookmarkAnswer IsNot Nothing Then
            '        If clsWordUtility.IsAnExistingBookmark(wordDocument, superCast.BookmarkDescription) Then
            '            clsWordUtility.InsertBookmark(wordDocument, superCast.BookmarkDescription, superCast.BookmarkAnswer)
            '        End If
            '    End If
            'Next
            'Dim magicPath = "\\dorado\NRDG\PPRDocuments\PPR_" + project.ProjectName + "_" + DateTime.Now.ToString("MMMM_dd_yyyy_hh_mm_ss") + ".docx"
            'wordDocument.SaveAs(magicPath)
            'wordDocument.Close()

            'Dim projectPrinted = db.PPRQueue.Find(pprQuequeId)
            'projectPrinted.Status = "Processed"
            'projectPrinted.Projectlink = magicPath
            'db.Entry(projectPrinted).State = EntityState.Modified
            'db.SaveChanges()       
            'WordApplicationRef.Quit()
            'If WordApplicationRef IsNot Nothing Then
            '    Runtime.InteropServices.Marshal.ReleaseComObject(WordApplicationRef)
            'End If
            'GC.Collect() ' force final cleanup!
            Dim project As ppr_ProjectListTable = db.ppr_ProjectListTable.Find(projectId)
            Dim magicPath = "\\dorado\NRDG\PPRDocuments\" 'PPR_" + project.ProjectName + "_" + DateTime.Now.ToString("MMMM_dd_yyyy_hh_mm_ss") + ".docx"
            Return magicPath
        End Function




        '
        ' GET: /GeneratePPR/Edit/5

        Function Edit(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' POST: /GeneratePPR/Edit/5

        <HttpPost()> _
        Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
            Try
                ' TODO: Add update logic here

                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function



        '
        ' GET: /GeneratePPR/Delete/5

        Function Delete(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' POST: /GeneratePPR/Delete/5

        <HttpPost()> _
        Function Delete(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
            Try
                ' TODO: Add delete logic here

                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function

        Private Shared Function GetBookmarksbyID(id) As List(Of Models.BookMark)

            Dim bookmarkFiltered As New List(Of Models.BookMark)

            Dim bookmarksTemplate As IEnumerable(Of Models.BookMark) = (From rx In db.BookMarks.AsEnumerable()
                    Where rx.BookmarkProjectId = 0
                    Select rx
                    Order By rx.BookmarkUserId Descending).AsEnumerable()

            bookmarksTemplate.ToList()

            bookmarkFiltered.AddRange(bookmarksTemplate)

            Dim bookmarksRx As IEnumerable(Of Models.BookMark) = (From rx In db.BookMarks.AsEnumerable()
                    Where rx.BookmarkProjectId = id
                    Select rx
                    Order By rx.BookmarkUserId Descending).AsEnumerable()

            For Each bkrx In bookmarksRx.ToList()

                For Each bkf In bookmarkFiltered.ToList()
                    If bkrx.BookmarkDescription = bkf.BookmarkDescription Then
                        bookmarkFiltered.Remove(bkf)
                        bookmarkFiltered.Add(bkrx)
                    End If
                Next
            Next

            Return bookmarkFiltered
        End Function
    End Class
End NameSpace
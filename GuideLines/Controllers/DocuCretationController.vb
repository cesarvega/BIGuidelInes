Imports System.Windows.Forms
Imports System.Data.Entity.Validation
Imports System.IO
Imports GuideLines.Filters
Imports GuideLines.Office
Imports GuideLines.Models
Imports WebMatrix.WebData
Imports WordHelper = GuideLines.Office.WordHelper

Namespace Controllers

    Public Class DocuCretationController
        Inherits Controller

        '
        ' GET: /DocuCretation

        'Protected Sub UploadButton_Click(sender As Object, e As EventArgs)
        '    If FileUploadControl.HasFile Then
        '        Try
        '            Dim filename As String = Path.GetFileName(FileUploadControl.FileName)
        '            FileUploadControl.SaveAs(Server.MapPath("~/") & filename)
        '            StatusLabel.Text = "Upload status: File uploaded!"
        '        Catch ex As Exception
        '            StatusLabel.Text = "Upload status: The file could not be uploaded. The following error occured: " + ex.Message
        '        End Try
        '    End If
        'End Sub

        Function Index() As ActionResult
            Return View()
        End Function


        Function UploadFile() As ActionResult
            Return View()
        End Function


        Private ReadOnly Property StorageRoot() As String
            Get
                Return Path.Combine(Server.MapPath("~/Files"))
            End Get
        End Property

        ''DONT USE THIS IF YOU NEED TO ALLOW LARGE FILES UPLOADS
        <HttpGet> _
        Public Sub Delete(id As String)
            Dim filename = id
            Dim filePath = Path.Combine(Server.MapPath("~/Files"), filename)

            If IO.File.Exists(filePath) Then
                IO.File.Delete(filePath)
            End If
        End Sub

        ''DONT USE THIS IF YOU NEED TO ALLOW LARGE FILES UPLOADS
        <HttpGet> _
        Public Sub Download(id As String)
            Dim filename = id
            Dim filePath = Path.Combine(Server.MapPath("~/Files"), filename)

            Dim context = HttpContext

            If System.IO.File.Exists(filePath) Then
                context.Response.AddHeader("Content-Disposition", "attachment; filename=""" & filename & """")
                context.Response.ContentType = "application/octet-stream"
                context.Response.ClearContent()
                context.Response.WriteFile(filePath)
            Else
                context.Response.StatusCode = 404
            End If
        End Sub
  
        'DONT USE THIS IF YOU NEED TO ALLOW LARGE FILES UPLOADS
        <HttpPost> _
        Public Function UploadFiles() As ActionResult
            Dim r = New List(Of ViewDataUploadFilesResult)()

            For Each file As String In Request.Files
                Dim statuses = New List(Of ViewDataUploadFilesResult)()
                Dim headers = Request.Headers

                If String.IsNullOrEmpty(headers("X-File-Name")) Then
                    UploadWholeFile(Request, statuses)
                Else
                    UploadPartialFile(headers("X-File-Name"), Request, statuses)
                End If

                Dim result As JsonResult = Json(statuses)
                result.ContentType = "text/plain"

                Return result
            Next

            Return Json(r)
        End Function

        Private Function EncodeFile(fileName As String) As String
            Return Convert.ToBase64String(System.IO.File.ReadAllBytes(fileName))
        End Function

        'DONT USE THIS IF YOU NEED TO ALLOW LARGE FILES UPLOADS
        'Credit to i-e-b and his ASP.Net uploader for the bulk of the upload helper methods - https://github.com/i-e-b/jQueryFileUpload.Net
        Private Sub UploadPartialFile(fileName As String, request As HttpRequestBase, statuses As List(Of ViewDataUploadFilesResult))
            If request.Files.Count <> 1 Then
                Throw New HttpRequestValidationException("Attempt to upload chunked file containing more than one fragment per request")
            End If
            Dim file = request.Files(0)
            Dim inputStream = file.InputStream

            Dim fullName = Path.Combine(StorageRoot, Path.GetFileName(fileName))

            Using fs = New FileStream(fullName, FileMode.Append, FileAccess.Write)
                Dim buffer = New Byte(1023) {}

                Dim l = inputStream.Read(buffer, 0, 1024)
                While l > 0
                    fs.Write(buffer, 0, l)
                    l = inputStream.Read(buffer, 0, 1024)
                End While
                fs.Flush()
                fs.Close()
            End Using
            statuses.Add(New ViewDataUploadFilesResult() With {
                .name = fileName,
                .size = file.ContentLength,
                .type = file.ContentType,
                .url = "/Home/Download/" & fileName,
                .delete_url = "/Home/Delete/" & fileName,
                .thumbnail_url = "data:image/png;base64," & EncodeFile(fullName),
                .delete_type = "GET"
            })
        End Sub


        Private Sub UploadWholeFile(request As HttpRequestBase, statuses As List(Of ViewDataUploadFilesResult))


            For i As Integer = 0 To request.Files.Count() - 1

                Dim file = request.Files(i)

                Dim fullPath As String = Path.Combine(StorageRoot, Path.GetFileName(file.FileName))

                file.SaveAs(fullPath)

                statuses.Add(New ViewDataUploadFilesResult() With {
                 .name = file.FileName,
                 .size = file.ContentLength,
                 .type = file.ContentType,
                 .url = "/Home/Download/" + file.FileName,
                 .delete_url = "/Home/Delete/" + file.FileName,
                 .thumbnail_url = "data:image/png;base64," & EncodeFile(fullPath),
                 .delete_type = "GET"})

            Next

        End Sub



        Public Class ViewDataUploadFilesResult
            Public Property name() As String
                Get
                    Return m_name
                End Get
                Set(value As String)
                    m_name = value
                End Set
            End Property
            Private m_name As String
            Public Property size() As Integer
                Get
                    Return m_size
                End Get
                Set(value As Integer)
                    m_size = value
                End Set
            End Property
            Private m_size As Integer
            Public Property type() As String
                Get
                    Return m_type
                End Get
                Set(value As String)
                    m_type = value
                End Set
            End Property
            Private m_type As String
            Public Property url() As String
                Get
                    Return m_url
                End Get
                Set(value As String)
                    m_url = value
                End Set
            End Property
            Private m_url As String
            Public Property delete_url() As String
                Get
                    Return m_delete_url
                End Get
                Set(value As String)
                    m_delete_url = value
                End Set
            End Property
            Private m_delete_url As String
            Public Property thumbnail_url() As String
                Get
                    Return m_thumbnail_url
                End Get
                Set(value As String)
                    m_thumbnail_url = value
                End Set
            End Property
            Private m_thumbnail_url As String
            Public Property delete_type() As String
                Get
                    Return m_delete_type
                End Get
                Set(value As String)
                    m_delete_type = value
                End Set
            End Property
            Private m_delete_type As String
        End Class


        ' GET: /DocuCretation/Details/5
        '
        Dim db As New Entities
        ''' <summary>
        ''' The open file fucntion gets the bookmarks and validate them to make sure there are valid bookmarks
        ''' </summary>
        ''' <remarks>this are the types of bookmarks allow SLG for Single, MUL for Multiple Choice,SLGC for Single Choice,IMG for Image,TLB for Table </remarks>
        <InitializeSimpleMembership>
        Function OpenFile() As RedirectToRouteResult
            Const filter As String = ""            
            Dim listOfBookmarks
            listOfBookmarks = WordHelper.GetDocumentItemPath(filter)

            'ADVISE always clear teh bookmarks database before installing a new template  in order to matain unique document bookmarks


            If listOfBookmarks IsNot Nothing Then
                For Each li In listOfBookmarks
                    If ModelState.IsValid Then
                        db.BookMarks.Add(li)
                        db.SaveChanges()
                    End If
                Next
            End If
            Return RedirectToAction("../Bookmarks")
        End Function





        '
        '    '
        ' GET: /DocuCretation/Create

        '            Function Create() As ActionResult
        '                Return View()
        '            End Function
        '        '
        '    '
        '    ' POST: /DocuCretation/Create
        '
        '    <HttpPost()> _
        '    Function Create(ByVal collection As FormCollection) As ActionResult
        '        Try
        '            ' TODO: Add insert logic here
        '            Return RedirectToAction("Index")
        '        Catch
        '            Return View()
        '        End Try
        '    End Function
        '
        '    '
        '    ' GET: /DocuCretation/Edit/5
        '
        '    Function Edit(ByVal id As Integer) As ActionResult
        '        Return View()
        '    End Function
        '
        '    '
        '    ' POST: /DocuCretation/Edit/5
        '
        '    <HttpPost()> _
        '    Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
        '        Try
        '            ' TODO: Add update logic here
        '
        '            Return RedirectToAction("Index")
        '        Catch
        '            Return View()
        '        End Try
        '    End Function
        '
        '    '
        '    ' GET: /DocuCretation/Delete/5
        '
        '    Function Delete(ByVal id As Integer) As ActionResult
        '        Return View()
        '    End Function
        '
        '    '
        '    ' POST: /DocuCretation/Delete/5
        '
        '    <HttpPost()> _
        '    Function Delete(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
        '        Try
        '            ' TODO: Add delete logic here
        '
        '            Return RedirectToAction("Index")
        '        Catch
        '            Return View()
        '        End Try
        '    End Function

    End Class
End Namespace
Imports System.Web
Imports System.Web.Services
Imports System.Web.Script.Serialization
Imports System.IO
Imports System.Runtime.Serialization.Json
Imports System.Web.Helpers

Namespace ViewClasses

    Public Class UploadHandler
        Implements System.Web.IHttpHandler


        Dim js As JavaScriptSerializer

        Private ReadOnly Property StorageRoot() As String
            Get
                Return Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~/Files/"))
            End Get
        End Property

        Public Sub IHttpHandler_ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
            
            context.Response.AddHeader("Pragma", "no-cache")
            context.Response.AddHeader("Cache-Control", "private, no-cache")
            HandleMethod(context)

        End Sub

        Private Sub HandleMethod(context As HttpContext)
            Select Case context.Request.HttpMethod
                Case "HEAD", "GET"
                    If GivenFilename(context) Then
                        DeliverFile(context)
                    Else
                        ListCurrentFiles(context)
                    End If
                    Exit Select

                Case "POST", "PUT"
                    UploadFile(context)
                    Exit Select

                Case "DELETE"
                    DeleteFile(context)
                    Exit Select

                Case "OPTIONS"
                    ReturnOptions(context)
                    Exit Select
                Case Else

                    context.Response.ClearHeaders()
                    context.Response.StatusCode = 405
                    Exit Select
            End Select
        End Sub

        Private Shared Sub ReturnOptions(context As HttpContext)
            context.Response.AddHeader("Allow", "DELETE,GET,HEAD,POST,PUT,OPTIONS")
            context.Response.StatusCode = 200
        End Sub

        ' Delete file from the server
        Private Sub DeleteFile(context As HttpContext)
            Dim filePath = StorageRoot + context.Request("f")
            If File.Exists(filePath) Then
                File.Delete(filePath)
            End If
        End Sub

        ' Upload file to the server
        Private Sub UploadFile(context As HttpContext)
            Dim statuses = New List(Of FilesStatus)()
            Dim headers = context.Request.Headers

            If String.IsNullOrEmpty(headers("X-File-Name")) Then
                UploadWholeFile(context, statuses)
            Else
                UploadPartialFile(headers("X-File-Name"), context, statuses)
            End If

            WriteJsonIframeSafe(context, statuses)
        End Sub

        ' Upload partial file
        Private Sub UploadPartialFile(fileName As String, context As HttpContext, statuses As List(Of FilesStatus))
            If context.Request.Files.Count <> 1 Then
                Throw New HttpRequestValidationException("Attempt to upload chunked file containing more than one fragment per request")
            End If
            Dim inputStream = context.Request.Files(0).InputStream
            Dim fullName = StorageRoot + Path.GetFileName(fileName)

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
            statuses.Add(New FilesStatus(New FileInfo(fullName)))
        End Sub

        ' Upload entire file
        Private Sub UploadWholeFile(context As HttpContext, statuses As List(Of FilesStatus))
            For i As Integer = 0 To context.Request.Files.Count - 1
                Dim file = context.Request.Files(i)

                Dim fullPath = StorageRoot + Path.GetFileName(file.FileName)

                file.SaveAs(fullPath)

                Dim fullName As String = Path.GetFileName(file.FileName)
                statuses.Add(New FilesStatus(fullName, file.ContentLength, fullPath))
            Next
        End Sub

        Private Sub WriteJsonIframeSafe(context As HttpContext, statuses As List(Of FilesStatus))
            context.Response.AddHeader("Vary", "Accept")
            Try
                If context.Request("HTTP_ACCEPT").Contains("application/json") Then
                    context.Response.ContentType = "application/json"
                Else
                    context.Response.ContentType = "text/plain"
                End If
            Catch
                context.Response.ContentType = "text/plain"
            End Try

            js = New JavaScriptSerializer()

        
            Dim jsonObj2 = statuses.ToList()
            Dim jsonObj

            If statuses.Any() > 0 Then
                jsonObj = js.Serialize(jsonObj2)

            Else
                jsonObj = js.Serialize(jsonObj2)

            End If

            context.Response.Write(jsonObj)
        End Sub



        Private Shared Function GivenFilename(context As HttpContext) As Boolean
            Return Not String.IsNullOrEmpty(context.Request("f"))
        End Function

        Private Sub DeliverFile(context As HttpContext)
            Dim filename = context.Request("f")
            Dim filePath = StorageRoot + filename

            If File.Exists(filePath) Then
                context.Response.AddHeader("Content-Disposition", "attachment; filename=""" & Convert.ToString(filename) & """")
                context.Response.ContentType = "application/octet-stream"
                context.Response.ClearContent()
                context.Response.WriteFile(filePath)
            Else
                context.Response.StatusCode = 404
            End If
        End Sub

        Private Sub ListCurrentFiles(context As HttpContext)
            Dim files = New DirectoryInfo(StorageRoot).GetFiles("*", SearchOption.TopDirectoryOnly).Where(Function(f) Not f.Attributes.HasFlag(FileAttributes.Hidden)).[Select](Function(f) New FilesStatus(f)).ToArray()

            Dim jsonObj As String = js.Serialize(files)
            context.Response.AddHeader("Content-Disposition", "inline; filename=""files.json""")
            context.Response.Write(jsonObj)
            context.Response.ContentType = "application/json"
        End Sub

        ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
            Get
                Return False
            End Get
        End Property

    End Class
End Namespace
Imports System.IO

Namespace ViewClasses

    Public Class FilesStatus

        Public Const HandlerPath As String = "/Upload/"

        Public Property group() As String
            Get
                Return m_group
            End Get
            Set(value As String)
                m_group = value
            End Set
        End Property
        Private m_group As String
        Public Property name() As String
            Get
                Return m_name
            End Get
            Set(value As String)
                m_name = value
            End Set
        End Property
        Private m_name As String
        Public Property type() As String
            Get
                Return m_type
            End Get
            Set(value As String)
                m_type = value
            End Set
        End Property
        Private m_type As String
        Public Property size() As Integer
            Get
                Return m_size
            End Get
            Set(value As Integer)
                m_size = value
            End Set
        End Property
        Private m_size As Integer
        Public Property progress() As String
            Get
                Return m_progress
            End Get
            Set(value As String)
                m_progress = value
            End Set
        End Property
        Private m_progress As String
        Public Property url() As String
            Get
                Return m_url
            End Get
            Set(value As String)
                m_url = value
            End Set
        End Property
        Private m_url As String
        Public Property thumbnail_url() As String
            Get
                Return m_thumbnail_url
            End Get
            Set(value As String)
                m_thumbnail_url = value
            End Set
        End Property
        Private m_thumbnail_url As String
        Public Property delete_url() As String
            Get
                Return m_delete_url
            End Get
            Set(value As String)
                m_delete_url = value
            End Set
        End Property
        Private m_delete_url As String
        Public Property delete_type() As String
            Get
                Return m_delete_type
            End Get
            Set(value As String)
                m_delete_type = value
            End Set
        End Property
        Private m_delete_type As String
        Public Property [error]() As String
            Get
                Return m_error
            End Get
            Set(value As String)
                m_error = value
            End Set
        End Property
        Private m_error As String


        Public Sub New()
        End Sub

        Public Sub New(fileInfo As FileInfo)
            SetValues(fileInfo.Name, CInt(fileInfo.Length), fileInfo.FullName)
        End Sub

        Public Sub New(fileName As String, fileLength As Integer, fullPath As String)
            SetValues(fileName, fileLength, fullPath)
        End Sub

        Private Sub SetValues(fileName As String, fileLength As Integer, fullPath As String)
            name = fileName
            type = "image/png"
            size = fileLength
            progress = "1.0"
            url = HandlerPath & "UploadHandler.ashx?f=" & fileName
            delete_url = HandlerPath & "UploadHandler.ashx?f=" & fileName
            delete_type = "DELETE"

            Dim ext = Path.GetExtension(fullPath)

            Dim fileSize = ConvertBytesToMegabytes(New FileInfo(fullPath).Length)
            If fileSize > 3 OrElse Not IsImage(ext) Then
                thumbnail_url = "/Content/img/generalFile.png"
            Else
                thumbnail_url = "data:image/png;base64," & EncodeFile(fullPath)
            End If
        End Sub

        Private Shared Function IsImage(ext As String) As Boolean
            Return ext = ".gif" OrElse ext = ".jpg" OrElse ext = ".png"
        End Function

        Private Function EncodeFile(fileName As String) As String
            Return Convert.ToBase64String(System.IO.File.ReadAllBytes(fileName))
        End Function

        Private Shared Function ConvertBytesToMegabytes(bytes As Long) As Double
            Return (bytes / 1024.0F) / 1024.0F
        End Function

    End Class
End NameSpace
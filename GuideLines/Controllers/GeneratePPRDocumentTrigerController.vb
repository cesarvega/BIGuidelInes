Imports System.Net
Imports System.Web.Http
Imports GuideLines.Models

Namespace Controllers

    Public Class GeneratePPRDocumentTrigerController
        Inherits ApiController
        Private Shared WithEvents myTimer As New System.Windows.Forms.Timer()
        Dim db As New Entities
        ' GET api/generatepprdocumenttriger
        Public Function GetValues()

            Dim projectsToprint = db.PPRQueue.Where(Function(r) r.Status = "pending")
            Dim pathToDownload = ""

            For Each PPTP In projectsToprint.ToList()
                pathToDownload = GeneratePPRController.Create(PPTP.ProjectId, PPTP.PPRQueueId)
            Next

            Return pathToDownload
        End Function

        ' GET api/generatepprdocumenttriger/5
        Public Function GetValue(ByVal id As Integer) As String
            Return "value"
        End Function

        ' POST api/generatepprdocumenttriger
        Public Sub PostValue(<FromBody()> ByVal value As String)

        End Sub

        ' PUT api/generatepprdocumenttriger/5
        Public Sub PutValue(ByVal id As Integer, <FromBody()> ByVal value As String)

        End Sub

        ' DELETE api/generatepprdocumenttriger/5
        Public Sub DeleteValue(ByVal id As Integer)

        End Sub
    End Class
End NameSpace
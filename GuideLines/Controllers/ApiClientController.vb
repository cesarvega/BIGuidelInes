Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports System.Net.Mail
Imports System.Web.Mail
Imports GuideLines.Models
Imports GuideLines.Helpers

Namespace Controllers

    Public Class ApiClientController
        Inherits System.Web.Http.ApiController

        Private db As New Entities

        ' GET api/ApiClient
        Function GetClients() As IEnumerable(Of Client)
            Return db.Clients.AsEnumerable()
        End Function

        ' GET api/ApiClient/5
        Function GetClient(ByVal id As Integer) As Client
            Dim client As Client = db.Clients.Find(id)
            If IsNothing(client) Then
                Throw New HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound))
            End If
            Return client
        End Function

        ' PUT api/ApiClient/5
        ''' <summary>
        ''' This Mehtod returns a email to clients for the ppr website
        ''' </summary>
        ''' <param name="id"></param>
        ''' <param name="client"></param>
        ''' <returns></returns>
        ''' <remarks></remarks>
        Function PutClient(ByVal id As String, ByVal client As Client) As String

            Dim emailFrom = ""
            Dim message = New Mail.MailMessage(client.AdminEmailAddress, client.ClientEmail)
            'Dim message = New Mail.MailMessage(id + "@brandinstitute.com", "cvega@brandinstitute.com")
            message.IsBodyHtml = True

            If client.ClientEmailSubject Is Nothing Or client.ClientEmailSubject = "" Then
                message.Subject = client.ClientEmailSubject
            Else
                message.Subject = client.ClientEmailSubject
            End If

            If client.AdminEmailAddress Is Nothing Or client.AdminEmailAddress = "" Then
                emailFrom = User.Identity.Name
            Else
                emailFrom = client.AdminEmailAddress
            End If

            ' the email bpdy message has three pipes "|" first is the email body the second is the BCC emails and the third 
            ' is to tellif the user wants to bcc any other uses true or false should be the string

            Dim temp = client.ClientEmailBody.Split(New Char() {"|"c})
            Dim bccEmails = temp(1).Split(",")
            Dim addBcc = temp(2)

            If addBcc = "true" Then
                For Each bccEmail As String In bccEmails
                    Dim bcc As New MailAddress(bccEmail)
                    message.Bcc.Add(bcc)
                Next
            End If

            message.Body = temp(0).ToString()
            Dim Sql = "BI_GUIDELINES.dbo.PPR_getEmailId '" + client.ClientEmail + "','" + client.ClientAddress + "'; "
            Dim emailId As String = clsData.GetStrValue(Sql)
            message.Body = message.Body.ToString().Replace("PPRLINK", emailId)

            Try
                Dim smtp As New SmtpClient
                smtp.Host = "192.168.0.115"
                smtp.Send(message)
            Catch error_t As Exception
                'MsgBox(error_t.ToString)
                Return "" 'error_t.ToString
            End Try
         

            Return "success"
        End Function

        ' POST api/ApiClient
        ''' <summary>
        ''' This Fucton sends an email to the client when the client is done with the form in PPR WEBSITE CLIENT SITE
        ''' </summary>
        ''' <param name="client"></param>
        ''' <returns></returns>
        ''' <remarks></remarks>
        Function PostClient(ByVal client As Client) As String

            Dim Sql = "[BI_GUIDELINES].[dbo].[ppr_EmailClientCompletes] " + "'" + client.ClientProject + "'"
            clsData.justExecute(Sql)

            'Dim emailFrom = ""
            ''Dim message = New Mail.MailMessage(client.ClientProject + "@brandinstitute.com", "cesarvega.col@gmail.com")
            'Dim message = New Mail.MailMessage(client.ClientProject + "@brandinstitute.com", client.ClientAddress + "@brandinstitute.com")
            'message.IsBodyHtml = True

            'If client.ClientEmailSubject Is Nothing Or client.ClientEmailSubject = "" Then
            '    message.Subject = client.ClientEmailSubject
            'Else
            '    message.Subject = client.ClientEmailSubject
            'End If

            'If client.AdminEmailAddress Is Nothing Or client.AdminEmailAddress = "" Then
            '    emailFrom = User.Identity.Name
            'Else
            '    emailFrom = client.AdminEmailAddress
            'End If

            'If client.ClientEmailBody Is Nothing Or client.ClientEmailBody = "" Then
            '    message.Body = "Dear " & client.ClientAddress

            'Else
            '    message.Body = client.ClientEmailBody
            'End If

            'Dim bcc As New MailAddress(client.AdminEmailAddress)
            'message.Bcc.Add(bcc)

            'Try
            '    Dim smtp As New SmtpClient
            '    smtp.Host = "192.168.0.115"
            '    smtp.Send(message)
            'Catch error_t As Exception
            '    'MsgBox(error_t.ToString)
            '    Return "" 'error_t.ToString
            'End Try
            Return "success"
        End Function

        ' DELETE api/ApiClient/5
        Function DeleteClient(ByVal id As Integer) As HttpResponseMessage
            Dim client As Client = db.Clients.Find(id)
            If IsNothing(client) Then
                Return Request.CreateResponse(HttpStatusCode.NotFound)
            End If

            db.Clients.Remove(client)

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK, client)
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub
    End Class
End Namespace
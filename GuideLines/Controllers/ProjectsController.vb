Imports System.Net.Mail
Imports System.Windows.Forms
Imports System.Net

Namespace Controllers

    Public Class ProjectsController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /Projects

        Function Index() As ActionResult

            '        Dim message As MailMessage = New MailMessage()
            '        message.From = New MailAddress("cesarvega.col@gmail.com")



            '        message.[To].Add(New MailAddress("cesarvega.col@gmail.com"))
            '        message.CC.Add(New MailAddress("cesarvega.col@gmail.com"))

            '        message.Subject = "This is my subject"

            '        message.Body = "This is the content cesar testing email  feature"

            '        Dim client = New SmtpClient("smtp.gmail.com", 587) With {
            '            .Credentials = New NetworkCredential("cesarvega.col@gmail.com", "Megaman2012"),
            '            .DeliveryMethod = SmtpDeliveryMethod.Network,
            '            .UseDefaultCredentials = False,
            '           .EnableSsl = True
            '}

            '        client.Send(message)

            Return View()
        End Function

        '
        ' GET: /Projects/Details/5

        Function Details(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' GET: /Projects/Create

        Function Create() As ActionResult
            Return View()
        End Function

        '
        ' POST: /Projects/Create

        <HttpPost()> _
        Function Create(ByVal collection As Mvc.FormCollection) As ActionResult
            Try
                ' TODO: Add insert logic here
                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function

        '
        ' GET: /Projects/Edit/5

        Function Edit(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' POST: /Projects/Edit/5

        <HttpPost()> _
        Function Edit(ByVal id As Integer, ByVal collection As Mvc.FormCollection) As ActionResult
            Try
                ' TODO: Add update logic here

                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function

        '
        ' GET: /Projects/Delete/5

        Function Delete(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' POST: /Projects/Delete/5

        <HttpPost()> _
        Function Delete(ByVal id As Integer, ByVal collection As Mvc.FormCollection) As ActionResult
            Try
                ' TODO: Add delete logic here

                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function
    End Class
End NameSpace
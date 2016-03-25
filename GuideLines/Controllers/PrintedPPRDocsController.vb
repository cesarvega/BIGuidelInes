Imports System.Data.Entity
Imports System.IO
Imports GuideLines.Models

Namespace Controllers

    Public Class PrintedPPRDocsController
        Inherits System.Web.Mvc.Controller

        Private db As New Entities

        '
        ' GET: /PrintedPPRDocs/

        Function Index() As ActionResult     
            Return View(db.PPRQueue.ToList().OrderByDescending(Function(x) x.Created))
        End Function


        'Action link to download document directly from server
        Sub GetReport(ByVal fileNameToPrint As String)
            Dim fileNameforDoc = Path.GetFileName(fileNameToPrint)
            Response.ContentType = "application/text"
            Response.AddHeader("Content-Disposition", "filename=" + fileNameforDoc + "")
            Response.TransmitFile(fileNameToPrint)
        End Sub



        '
        ' GET: /PrintedPPRDocs/Details/5

        Function Details(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim pprqueue As PPRQueue = db.PPRQueue.Find(id)
            If IsNothing(pprqueue) Then
                Return HttpNotFound()
            End If
            Return View(pprqueue)
        End Function

        '
        ' GET: /PrintedPPRDocs/Create

        Function Create() As ActionResult
            Return View()
        End Function

        '
        ' POST: /PrintedPPRDocs/Create

        <HttpPost()> _
        <ValidateAntiForgeryToken()> _
        Function Create(ByVal pprqueue As PPRQueue) As ActionResult
            If ModelState.IsValid Then
                db.PPRQueue.Add(pprqueue)
                db.SaveChanges()
                Return RedirectToAction("Index")
            End If

            Return View(pprqueue)
        End Function

        '
        ' GET: /PrintedPPRDocs/Edit/5

        Function Edit(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim pprqueue As PPRQueue = db.PPRQueue.Find(id)
            If IsNothing(pprqueue) Then
                Return HttpNotFound()
            End If
            Return View(pprqueue)
        End Function

        '
        ' POST: /PrintedPPRDocs/Edit/5

        <HttpPost()> _
        <ValidateAntiForgeryToken()> _
        Function Edit(ByVal pprqueue As PPRQueue) As ActionResult
            If ModelState.IsValid Then
                db.Entry(pprqueue).State = EntityState.Modified
                db.SaveChanges()
                Return RedirectToAction("Index")
            End If

            Return View(pprqueue)
        End Function

        '
        ' GET: /PrintedPPRDocs/Delete/5

        Function Delete(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim pprqueue As PPRQueue = db.PPRQueue.Find(id)
            If IsNothing(pprqueue) Then
                Return HttpNotFound()
            End If
            Return View(pprqueue)
        End Function

        '
        ' POST: /PrintedPPRDocs/Delete/5

        <HttpPost()> _
        <ActionName("Delete")> _
        <ValidateAntiForgeryToken()> _
        Function DeleteConfirmed(ByVal id As Integer) As RedirectToRouteResult
            Dim pprqueue As PPRQueue = db.PPRQueue.Find(id)
            db.PPRQueue.Remove(pprqueue)
            db.SaveChanges()
            Return RedirectToAction("Index")
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub

    End Class
End NameSpace
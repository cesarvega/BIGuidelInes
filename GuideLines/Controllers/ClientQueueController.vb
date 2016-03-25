Imports System.Data.Entity

Public Class ClientQueueController
    Inherits System.Web.Mvc.Controller

    Private db As New Entities

    ' GET: /ClientQueue/

    Function Index() As ActionResult
        Return View(db.ClientQueues.ToList().OrderByDescending(Function(c) c.Created))
    End Function

    '
    ' GET: /ClientQueue/Details/5

    Function Details(Optional ByVal id As Integer = Nothing) As ActionResult
        Dim clientqueue As ClientQueue = db.ClientQueues.Find(id)
        If IsNothing(clientqueue) Then
            Return HttpNotFound()
        End If
        Return View(clientqueue)
    End Function

    '
    ' GET: /ClientQueue/Create

    Function Create() As ActionResult
        Return View()
    End Function

    '
    ' POST: /ClientQueue/Create

    <HttpPost()> _
    <ValidateAntiForgeryToken()> _
    Function Create(ByVal clientqueue As ClientQueue) As ActionResult
        If ModelState.IsValid Then
            db.ClientQueues.Add(clientqueue)
            db.SaveChanges()
            Return RedirectToAction("Index")
        End If

        Return View(clientqueue)
    End Function

    '
    ' GET: /ClientQueue/Edit/5

    Function Edit(Optional ByVal id As Integer = Nothing) As ActionResult
        Dim clientqueue As ClientQueue = db.ClientQueues.Find(id)
        If IsNothing(clientqueue) Then
            Return HttpNotFound()
        End If
        Return View(clientqueue)
    End Function

    '
    ' POST: /ClientQueue/Edit/5

    <HttpPost()> _
    <ValidateAntiForgeryToken()> _
    Function Edit(ByVal clientqueue As ClientQueue) As ActionResult
        If ModelState.IsValid Then
            db.Entry(clientqueue).State = EntityState.Modified
            db.SaveChanges()
            Return RedirectToAction("Index")
        End If

        Return View(clientqueue)
    End Function

    '
    ' GET: /ClientQueue/Delete/5

    Function Delete(Optional ByVal id As Integer = Nothing) As ActionResult
        Dim clientqueue As ClientQueue = db.ClientQueues.Find(id)
        If IsNothing(clientqueue) Then
            Return HttpNotFound()
        End If
        Return View(clientqueue)
    End Function

    '
    ' POST: /ClientQueue/Delete/5

    <HttpPost()> _
    <ActionName("Delete")> _
    <ValidateAntiForgeryToken()> _
    Function DeleteConfirmed(ByVal id As Integer) As RedirectToRouteResult
        Dim clientqueue As ClientQueue = db.ClientQueues.Find(id)
        db.ClientQueues.Remove(clientqueue)
        db.SaveChanges()
        Return RedirectToAction("Index")
    End Function

    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        db.Dispose()
        MyBase.Dispose(disposing)
    End Sub

End Class
Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Public Class ApiClientQueueController
    Inherits System.Web.Http.ApiController

    Private db As New Entities

    ' GET api/ApiClientQueue
    Function GetClientQueues() As IEnumerable(Of ClientQueue)
        Return db.ClientQueues.AsEnumerable()
    End Function

    ' GET api/ApiClientQueue/5
    Function GetClientQueue(ByVal id As Integer) As ClientQueue
        Dim clientqueue As ClientQueue = db.ClientQueues.Find(id)
        If IsNothing(clientqueue) Then
            Throw New HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound))
        End If
        Return clientqueue
    End Function

    ' PUT api/ApiClientQueue/5
    Function PutClientQueue(ByVal id As Integer, ByVal clientqueue As ClientQueue) As HttpResponseMessage
        If Not ModelState.IsValid Then
            Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
        End If

        If Not id = clientqueue.ClientQueueId Then
            Return Request.CreateResponse(HttpStatusCode.BadRequest)
        End If

        db.Entry(clientqueue).State = EntityState.Modified

        Try
            db.SaveChanges()
        Catch ex As DbUpdateConcurrencyException
            Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
        End Try

        Return Request.CreateResponse(HttpStatusCode.OK)
    End Function

    ' POST api/ApiClientQueue
    Function PostClientQueue(ByVal clientqueue As ClientQueue) As String
        clientqueue.ClientName = clientqueue.ClientName.Replace("%", " ")    
        Dim message = "No Project this is an Error"
        If clientqueue.ProjectName <> Nothing Then
            Dim isProjectLocked As ClientQueue = (From clientQ In db.ClientQueues
                    Where clientQ.ProjectName = clientqueue.ProjectName
                    Select clientQ).FirstOrDefault()

            If isProjectLocked IsNot Nothing Then
                'there is a lock already
                    isProjectLocked.TimeStamp = clientqueue.TimeStamp
                    isProjectLocked.Browser = clientqueue.Browser
                    isProjectLocked.UpdatedBy = clientqueue.UpdatedBy.Replace("%", " ")
                    isProjectLocked.Updated = clientqueue.Updated
                    db.ClientQueues.Add(isProjectLocked)
                    db.SaveChanges()
                    Return "time Stamp is locked updated"
                    'Else
                    '    'the lock exist but the suers are different
                    '    'Dim curentTime = (DateTime.Now() - isProjectLocked.Created).TotalMinutes

                    '    'if current time is bigger than one minute unlock and register to the new user
                    '    'If curentTime > 1 Then
                    '    If True Then
                    '        clientqueue.Updated = clientqueue.Updated
                    '        clientqueue.UpdatedBy = clientqueue.UpdatedBy.Replace("%", " ")
                    '        clientqueue.Created = isProjectLocked.Created
                    '        clientqueue.CreatedBy = isProjectLocked.CreatedBy.Replace("%", " ")
                    '        db.ClientQueues.Remove(isProjectLocked)
                    '        ' register new client
                    '        If ModelState.IsValid Then
                    '            db.ClientQueues.Add(clientqueue)
                    '            message = "the account is unloked, please refresh the page"
                    '        End If
                    '    Else
                    '        Return "the account still locked by : " + isProjectLocked.ClientName
                    '    End If

                Else
                    If ModelState.IsValid Then
                        Dim DOB As Object = Nothing
                        clientqueue.Updated = DOB
                        clientqueue.UpdatedBy = ""
                        clientqueue.Created = DateTime.Now()
                        clientqueue.CreatedBy = clientqueue.CreatedBy.Replace("%", " ")
                        db.ClientQueues.Add(clientqueue)
                        message = "the account is unlock"
                    End If
                End If
                db.SaveChanges()
            End If
            Return message
    End Function

    ' DELETE api/ApiClientQueue/5
    Function DeleteClientQueue(ByVal id As Integer) As HttpResponseMessage
        Dim clientqueue As ClientQueue = db.ClientQueues.Find(id)
        If IsNothing(clientqueue) Then
            Return Request.CreateResponse(HttpStatusCode.NotFound)
        End If

        db.ClientQueues.Remove(clientqueue)

        Try
            db.SaveChanges()
        Catch ex As DbUpdateConcurrencyException
            Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
        End Try

        Return Request.CreateResponse(HttpStatusCode.OK, clientqueue)
    End Function

    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        db.Dispose()
        MyBase.Dispose(disposing)
    End Sub
End Class
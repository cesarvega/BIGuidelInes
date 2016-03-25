Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports GuideLines.Models
Imports WebMatrix.WebData

Namespace Controllers

    Public Class ApiPPRQueueController
        Inherits System.Web.Http.ApiController

        Private db As New Entities

        ' GET api/ApiPPRQueue
        Function GetPPRQueues() As IEnumerable(Of PPRQueue)
            Return db.PPRQueue.AsEnumerable()
        End Function

        ' GET api/ApiPPRQueue/5
        Function GetPPRQueue(ByVal id As Integer) As PPRQueue
            Dim pprqueue As PPRQueue = db.PPRQueue.Find(id)
            If IsNothing(pprqueue) Then
                Throw New HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound))
            End If
            Return pprqueue
        End Function

        ' PUT api/ApiPPRQueue/5
        Function PutPPRQueue(ByVal id As Integer, ByVal pprqueue As PPRQueue) As HttpResponseMessage
            If Not ModelState.IsValid Then
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If

            If Not id = pprqueue.PPRQueueId Then
                Return Request.CreateResponse(HttpStatusCode.BadRequest)
            End If

            db.Entry(pprqueue).State = EntityState.Modified

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK)
        End Function

        ' POST api/ApiPPRQueue
        Function PostPPRQueue(ByVal pprqueue As PPRQueue) As HttpResponseMessage
            If ModelState.IsValid Then
                Dim projectName = db.ppr_ProjectListTable.Find(pprqueue.ProjectId).ProjectName
                pprqueue.ProjectName = projectName
                pprqueue.Created = DateTime.Now
                pprqueue.CreatedBy = HttpContext.Current.User.Identity.Name
                pprqueue.CreatedBy = WebSecurity.CurrentUserName
                db.PPRQueue.Add(pprqueue)
                db.SaveChanges()
                Dim response As HttpResponseMessage = Request.CreateResponse(HttpStatusCode.Created, pprqueue)
                response.Headers.Location = New Uri(Url.Link("DefaultApi", New With {.id = pprqueue.PPRQueueId}))
                Return response
            Else
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If
        End Function

        ' DELETE api/ApiPPRQueue/5
        Function DeletePPRQueue(ByVal id As Integer) As HttpResponseMessage
            Dim pprqueue As PPRQueue = db.PPRQueue.Find(id)
            If IsNothing(pprqueue) Then
                Return Request.CreateResponse(HttpStatusCode.NotFound)
            End If

            db.PPRQueue.Remove(pprqueue)

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK, pprqueue)
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub
    End Class
End NameSpace
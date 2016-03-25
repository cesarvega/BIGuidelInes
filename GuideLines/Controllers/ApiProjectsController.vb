Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports GuideLines.Models

Namespace Controllers
    Public Class ApiProjectsController
        Inherits System.Web.Http.ApiController

        Private db As New Entities

        ' GET api/ApiProjects
        Function Getppr_ProjectListTable() As IEnumerable(Of ppr_ProjectListTable)
            Return db.ppr_ProjectListTable.AsEnumerable()
        End Function

        ' GET api/ApiProjects/5
        Function Getppr_ProjectListTable(ByVal id As Integer) As ppr_ProjectListTable
            Dim ppr_projectlisttable As ppr_ProjectListTable = db.ppr_ProjectListTable.Find(id)
            If IsNothing(ppr_projectlisttable) Then
                Throw New HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound))
            End If
            Return ppr_projectlisttable
        End Function

        ' PUT api/ApiProjects/5
        Function Putppr_ProjectListTable(ByVal id As Integer, ByVal ppr_projectlisttable As ppr_ProjectListTable) As HttpResponseMessage
            If Not ModelState.IsValid Then
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If

            If Not id = ppr_projectlisttable.ppr_ProjectListId Then
                Return Request.CreateResponse(HttpStatusCode.BadRequest)
            End If

            db.Entry(ppr_projectlisttable).State = EntityState.Modified

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK)
        End Function

        ' POST api/ApiProjects
        Function Postppr_ProjectListTable(ByVal ppr_projectlisttable As ppr_ProjectListTable) As HttpResponseMessage
            If ModelState.IsValid Then
                db.ppr_ProjectListTable.Add(ppr_projectlisttable)
                db.SaveChanges()

                Dim response As HttpResponseMessage = Request.CreateResponse(HttpStatusCode.Created, ppr_projectlisttable)
                response.Headers.Location = New Uri(Url.Link("DefaultApi", New With {.id = ppr_projectlisttable.ppr_ProjectListId}))
                Return response
            Else
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If
        End Function

        ' DELETE api/ApiProjects/5
        Function Deleteppr_ProjectListTable(ByVal id As Integer) As HttpResponseMessage
            Dim ppr_projectlisttable As ppr_ProjectListTable = db.ppr_ProjectListTable.Find(id)
            If IsNothing(ppr_projectlisttable) Then
                Return Request.CreateResponse(HttpStatusCode.NotFound)
            End If

            db.ppr_ProjectListTable.Remove(ppr_projectlisttable)

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK, ppr_projectlisttable)
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub
    End Class
End NameSpace
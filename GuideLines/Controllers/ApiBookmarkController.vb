Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports System.Data.Common
Imports GuideLines.Models
Imports GuideLines.ViewClasses
Imports GuideLines.Helpers
Imports WebMatrix.WebData

Namespace Controllers

    Public Class ApiBookmarkController
        Inherits System.Web.Http.ApiController

        Private db As New Entities

        ' GET api/ApiBookmark
        Function GetBookMarks() As IEnumerable(Of BookMark)
            Return db.BookMarks.AsEnumerable()
        End Function

        ' GET api/ApiBookmark/5
        Function GetBookMark(ByVal id As String) As List(Of BookmarkView)

            Return RetrieveDataFormFeedPage.GetBookMark(id)
        End Function

        ' PUT api/ApiBookmark/5
        Function PutBookMark(ByVal id As Integer, ByVal bookmark As BookMark) As HttpResponseMessage
            If Not ModelState.IsValid Then
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If

            If Not id = bookmark.BookmarkId Then
                Return Request.CreateResponse(HttpStatusCode.BadRequest)
            End If

            db.Entry(bookmark).State = EntityState.Modified

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK)
        End Function

        ' POST api/ApiBookmark
        Function PostBookMark(ByVal bookmark As BookMark) As HttpResponseMessage
            If ModelState.IsValid Then
                db.BookMarks.Add(bookmark)
                db.SaveChanges()

                Dim response As HttpResponseMessage = Request.CreateResponse(HttpStatusCode.Created, bookmark)
                response.Headers.Location = New Uri(Url.Link("DefaultApi", New With {.id = bookmark.BookmarkId}))
                Return response
            Else
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If
        End Function

        ' DELETE api/ApiBookmark/5
        Function DeleteBookMark(ByVal id As Integer) As HttpResponseMessage
            Dim bookmark As BookMark = db.BookMarks.Find(id)
            If IsNothing(bookmark) Then
                Return Request.CreateResponse(HttpStatusCode.NotFound)
            End If

            db.BookMarks.Remove(bookmark)

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK, bookmark)
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub


    End Class
End NameSpace
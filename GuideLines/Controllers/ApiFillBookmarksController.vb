Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports GuideLines.Models
Imports WebMatrix.WebData
Imports Microsoft.Office.Interop.Word

Namespace Controllers

    Public Class ApiFillBookmarksController
        Inherits System.Web.Http.ApiController

        Private db As New Entities
        Public Class FillBookmarksView
            Public Property BookmarkId As Integer
            Public Property BookmarkAnswerId As Integer
            Public Property BookmarkProjectId As Integer
            Public Property BookmarkDescription As String
            Public Property BookmarkQuestion As String
            Public Property BookmarkAnswerTypeId As Integer
            Public Property BookmarkAnswer As String
        End Class
        ' GET api/ApiFillBookmarks
        Function GetBookMarks() As IEnumerable(Of Models.BookMark)

            Dim bookmarksRx = From rx In db.BookMarks.AsEnumerable()
                    Where rx.BookmarkProjectId = 0
                    Select rx
                    Order By rx.BookmarkUserId Ascending

            Return bookmarksRx
        End Function

        ' GET api/ApiFillBookmarks/5
        Function GetBookMark(ByVal id As String) As IEnumerable(Of Models.BookMark)
            Dim projectid As ppr_ProjectListTable = (From prj In db.ppr_ProjectListTable
                    Where prj.ProjectName = id
                    Select prj).FirstOrDefault()
            Dim bookmarkFiltered As New List(Of Models.BookMark)

            Dim bookmarksTemplate As IEnumerable(Of Models.BookMark) = (From rx In db.BookMarks.AsEnumerable()
                    Where rx.BookmarkProjectId = 0 And rx.BookmarkUserId <> 0
                    Select rx
                    Order By rx.BookmarkUserId Ascending).AsEnumerable()

            bookmarkFiltered.AddRange(bookmarksTemplate)

            Dim bookmarksRx As IEnumerable(Of Models.BookMark) = (From rx In db.BookMarks.AsEnumerable()
                    Where rx.BookmarkProjectId = projectid.ppr_ProjectListId
                    Select rx
                    Order By rx.BookmarkUserId Ascending).AsEnumerable()

            For Each bkrx In bookmarksRx.ToList()

                For Each bkf In bookmarkFiltered.ToList()
                    If bkrx.BookmarkDescription = bkf.BookmarkDescription Then
                        bookmarkFiltered.Remove(bkf)
                        bookmarkFiltered.Add(bkrx)
                    End If
                Next
            Next

            For Each bkf In bookmarkFiltered.ToList()
                If bkf.BookmarkDescription = "Competitive_Landscape" Then
                    bookmarkFiltered.Remove(bkf)

                End If
            Next
            Return From ordering In bookmarkFiltered
                Select ordering Order By ordering.BookmarkUserId
        End Function

        ' PUT api/ApiFillBookmarks/5
        Function PutBookMark(ByVal id As Integer, ByVal bookmarks As Models.BookMark) As HttpResponseMessage
            If bookmarks.BookmarkAnswer <> "" Then


                Dim bookmark As Models.BookMark = db.BookMarks.Find(id)
                If bookmark.BookmarkProjectId = 0 Then
                    Dim newBookmark As New Models.BookMark
                    newBookmark.BookmarkProjectId = bookmarks.BookmarkProjectId
                    newBookmark.BookmarkDescription = bookmark.BookmarkDescription
                    newBookmark.BookmarklongDescription = bookmark.BookmarklongDescription
                    newBookmark.BookmarkAnswer = bookmarks.BookmarkAnswer
                    newBookmark.BookmarkQuestion = bookmark.BookmarkQuestion
                    newBookmark.BookmarkUserId = bookmark.BookmarkUserId
                    newBookmark.Created = DateTime.Now
                    newBookmark.CreatedBy = WebSecurity.CurrentUserName
                    db.BookMarks.Add(newBookmark)
                Else
                    Dim bookmarkComp As Models.BookMark = (From rgb In db.BookMarks.ToList()
                            Where rgb.BookmarkDescription = bookmarks.BookmarkDescription
                            Select rgb).FirstOrDefault()
                    bookmark.BookmarkUserId = bookmarkComp.BookmarkUserId
                    bookmark.BookmarkAnswer = bookmarks.BookmarkAnswer
                    bookmark.Updated = DateTime.Now
                    bookmark.UpdatedBy = WebSecurity.CurrentUserName

                    If Not id = bookmark.BookmarkId Then
                        Return Request.CreateResponse(HttpStatusCode.BadRequest)
                    End If

                    db.Entry(bookmark).State = EntityState.Modified
                End If



                Try
                    db.SaveChanges()
                Catch ex As DbUpdateConcurrencyException
                    Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
                End Try
            End If
            Return Request.CreateResponse(HttpStatusCode.OK)
        End Function

        ' POST api/ApiFillBookmarks
        Function PostBookMark(ByVal bookmark As Models.BookMark) As HttpResponseMessage
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

        ' DELETE api/ApiFillBookmarks/5
        Function DeleteBookMark(ByVal id As Integer) As HttpResponseMessage
            Dim bookmark As Models.BookMark = db.BookMarks.Find(id)
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
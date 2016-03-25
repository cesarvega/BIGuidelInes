Imports System.Data.Entity
Imports System.Data.Entity.Validation
Imports GuideLines.Models

Namespace Controllers

    Public Class BookmarksController
        Inherits System.Web.Mvc.Controller

        Private db As New Entities

        '
        ' GET: /Bookmarks/

        Function Index() As ActionResult
            Dim bookmarksRx = From rx In db.BookMarks.AsEnumerable()
                    Order By rx.BookmarkId
                    Select rx
            'Where rx.BookmarkDescription.StartsWith("*")


            Return View(bookmarksRx)
        End Function

        '
        ' GET: /Bookmarks/Details/5

        Function Details(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim bookmark As BookMark = db.BookMarks.Find(id)
            If IsNothing(bookmark) Then
                Return HttpNotFound()
            End If
            Return View(bookmark)
        End Function

        '
        ' GET: /Bookmarks/Create

        Function Create() As ActionResult
            Return View()
        End Function

        '
        ' POST: /Bookmarks/Create

        <HttpPost()> _
        <ValidateAntiForgeryToken()> _
        Function Create(ByVal bookmark As BookMark) As ActionResult
            If ModelState.IsValid Then
                db.BookMarks.Add(bookmark)
                db.SaveChanges()
                Return RedirectToAction("Index")
            End If

            Return View(bookmark)
        End Function

        '
        ' GET: /Bookmarks/Edit/5

        Function Edit(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim bookmark As BookMark = db.BookMarks.Find(id)
            If IsNothing(bookmark) Then
                Return HttpNotFound()
            End If
            Return View(bookmark)
        End Function

        '
        ' POST: /Bookmarks/Edit/5

        <HttpPost()> _
        <ValidateAntiForgeryToken()> _
        Function Edit(ByVal bookmark As BookMark) As ActionResult
            If ModelState.IsValid Then
                db.Entry(bookmark).State = EntityState.Modified
                Try
                    db.SaveChanges()
                Catch ex As DbEntityValidationException
                    Dim errorMessages = ex.EntityValidationErrors.SelectMany(Function(x) x.ValidationErrors).Select((Function(x) x.ErrorMessage))

                    'Join the list to a single string.
                    Dim fullErrorMessage = String.Join("; ", errorMessages)

                    ' Combine the original exception message with the new one.
                    Dim exceptionMessage = String.Concat(ex.Message, " The validation errors are: ", fullErrorMessage)

                    ' Throw a new DbEntityValidationException with the improved exception message.
                    Throw New DbEntityValidationException(exceptionMessage, ex.EntityValidationErrors)
                End Try

                Return RedirectToAction("Index")
            End If

            Return View(bookmark)
        End Function

        '
        ' GET: /Bookmarks/Delete/5

        Function Delete(Optional ByVal id As Integer = Nothing) As ActionResult
            Dim bookmark As BookMark = db.BookMarks.Find(id)
            If IsNothing(bookmark) Then
                Return HttpNotFound()
            End If
            Return View(bookmark)
        End Function

        '
        ' POST: /Bookmarks/Delete/5

        <HttpPost()> _
        <ActionName("Delete")> _
        <ValidateAntiForgeryToken()> _
        Function DeleteConfirmed(ByVal id As Integer) As RedirectToRouteResult
            Dim bookmark As BookMark = db.BookMarks.Find(id)
            db.BookMarks.Remove(bookmark)
            db.SaveChanges()
            Return RedirectToAction("Index")
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub

    End Class
End NameSpace
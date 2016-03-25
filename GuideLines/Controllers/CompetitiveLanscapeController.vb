Imports System.Net
Imports System.Web.Http
Imports System.Data.Entity.Infrastructure
Imports GuideLines.Models
Imports WebMatrix.WebData

Namespace Controllers

    Public Class CompetitiveLanscapeController
        Inherits ApiController

        Private db As New Entities
        ' GET api/competitivelanscape
        Public Function GetValues() As IEnumerable(Of String)
            Return New String() {"value1", "value2"}
        End Function

        ' GET api/competitivelanscape/5
        Public Function GetValue(ByVal id As Integer) As String
            Dim landscape As CompetitiveLandscape = (From results In db.CompetitiveLandscapes
                    Where results.ProjectId = id
                    Select results).FirstOrDefault()


            If IsNothing(landscape) Then
                Return ""
            End If
            Dim competitiveLandscapeObj As CompetitiveLandscape = db.CompetitiveLandscapes.Find(landscape.CompetitiveLandscapeId)
            Return competitiveLandscapeObj.BrandName
        End Function

        ' POST api/competitivelanscape
        Public Sub PostValue(ByVal id As String, <FromBody()> ByVal value As Object)
            Dim landscape As CompetitiveLandscape = (From results In db.CompetitiveLandscapes
                    Where results.ProjectId = id
                    Select results).FirstOrDefault()
            Dim stringData As String = value.ToString()
            Dim competitiveLandscapeObj As CompetitiveLandscape = db.CompetitiveLandscapes.Find(landscape.CompetitiveLandscapeId)
            competitiveLandscapeObj.BrandName = stringData
            db.Entry(competitiveLandscapeObj).State = EntityState.Modified
            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                '    Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try
        End Sub

        ' PUT api/competitivelanscape/5
        Public Function PutValue(ByVal id As String, <FromBody()> ByVal value As Object) As Object

            Dim landscape As CompetitiveLandscape = (From results In db.CompetitiveLandscapes
                    Where results.ProjectId = id
                    Select results).FirstOrDefault()


            Dim stringData As String = value.ToString()
            If IsNothing(landscape) Then
                Dim newCompetitiveLandscape As New CompetitiveLandscape
                newCompetitiveLandscape.Company = stringData
                newCompetitiveLandscape.ProjectId = id
                newCompetitiveLandscape.Created = DateTime.Now
                newCompetitiveLandscape.CreatedBy = WebSecurity.CurrentUserName
                db.CompetitiveLandscapes.Add(newCompetitiveLandscape)
            Else
                Dim competitiveLandscapeObj As CompetitiveLandscape = db.CompetitiveLandscapes.Find(landscape.CompetitiveLandscapeId)
                competitiveLandscapeObj.Company = stringData
                competitiveLandscapeObj.ProjectId = id
                competitiveLandscapeObj.Updated = DateTime.Now
                competitiveLandscapeObj.UpdatedBy = WebSecurity.CurrentUserName
                db.Entry(competitiveLandscapeObj).State = EntityState.Modified
            End If
            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                '    Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try
            Return landscape
        End Function

        ' DELETE api/competitivelanscape/5
        Public Sub DeleteValue(ByVal id As Integer)

        End Sub
    End Class
End NameSpace
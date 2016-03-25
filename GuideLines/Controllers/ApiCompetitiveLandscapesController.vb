Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports GuideLines.Models
Imports WebMatrix.WebData

Namespace Controllers

    Public Class ApiCompetitiveLandscapesController
        Inherits System.Web.Http.ApiController

        Private db As New Entities

        ' GET api/ApiCompetitiveLandscapes
        Function GetCompetitiveLandscapes() As IEnumerable(Of CompetitiveLandscape)
            Return db.CompetitiveLandscapes.AsEnumerable()
        End Function

        ' GET api/ApiCompetitiveLandscapes/5
        Function GetCompetitiveLandscape(ByVal id As String) As IEnumerable(Of CompetitiveLandscape)
            Dim competitiveLandscapeTemplate As IEnumerable(Of CompetitiveLandscape)
            Dim projectid As ppr_ProjectListTable = (From prj In db.ppr_ProjectListTable
                    Where prj.ProjectName = id
                    Select prj).FirstOrDefault()
            If projectid IsNot Nothing Then
                competitiveLandscapeTemplate = (From rx In db.CompetitiveLandscapes.AsEnumerable()
                    Where rx.ProjectId = projectid.ppr_ProjectListId
                    Select rx
                    Order By rx.CompetitiveLandscapeId).AsEnumerable()
            Else
                competitiveLandscapeTemplate = Nothing
            End If

            Return competitiveLandscapeTemplate
        End Function

        ' PUT api/ApiCompetitiveLandscapes/5
        Function PutCompetitiveLandscape(ByVal id As Integer, ByVal competitivelandscape As CompetitiveLandscape) As CompetitiveLandscape


            Dim competitiveLandscapeObj As CompetitiveLandscape = db.CompetitiveLandscapes.Find(id)
            If competitivelandscape.CompetitiveLandscapeId = 0 Then
                Dim newCompetitiveLandscape As New CompetitiveLandscape
                newCompetitiveLandscape.Company = competitivelandscape.Company
                newCompetitiveLandscape.ProjectId = competitivelandscape.ProjectId
                newCompetitiveLandscape.ProjectName = competitivelandscape.ProjectName
                newCompetitiveLandscape.BrandName = competitivelandscape.BrandName
                newCompetitiveLandscape.NonproprietaryName = competitivelandscape.NonproprietaryName
                newCompetitiveLandscape.PointsOfDifferentiation = competitivelandscape.PointsOfDifferentiation
                newCompetitiveLandscape.ClinicalTrialName = competitivelandscape.ClinicalTrialName
                newCompetitiveLandscape.ClassName = competitivelandscape.ClassName
                newCompetitiveLandscape.Created = DateTime.Now
                newCompetitiveLandscape.CreatedBy = WebSecurity.CurrentUserName
                db.CompetitiveLandscapes.Add(newCompetitiveLandscape)
            Else
                competitiveLandscapeObj.Company = competitivelandscape.Company
                competitiveLandscapeObj.BrandName = competitivelandscape.BrandName
                competitiveLandscapeObj.NonproprietaryName = competitivelandscape.NonproprietaryName
                competitiveLandscapeObj.PointsOfDifferentiation = competitivelandscape.PointsOfDifferentiation
                competitiveLandscapeObj.ClinicalTrialName = competitivelandscape.ClinicalTrialName
                competitiveLandscapeObj.ClassName = competitivelandscape.ClassName
                competitiveLandscapeObj.Updated = DateTime.Now
                competitiveLandscapeObj.UpdatedBy = WebSecurity.CurrentUserName
                db.Entry(competitiveLandscapeObj).State = EntityState.Modified
            End If
            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                '    Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            'Return Request.CreateResponse(HttpStatusCode.OK)
            Return competitiveLandscapeObj
        End Function

        ' POST api/ApiCompetitiveLandscapes
        Function PostCompetitiveLandscape(ByVal competitivelandscape As CompetitiveLandscape) As HttpResponseMessage
            If ModelState.IsValid Then
                db.CompetitiveLandscapes.Add(competitivelandscape)
                db.SaveChanges()

                Dim response As HttpResponseMessage = Request.CreateResponse(HttpStatusCode.Created, competitivelandscape)
                response.Headers.Location = New Uri(Url.Link("DefaultApi", New With {.id = competitivelandscape.CompetitiveLandscapeId}))
                Return response
            Else
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If
        End Function

        ' DELETE api/ApiCompetitiveLandscapes/5
        Function DeleteCompetitiveLandscape(ByVal id As Integer) As HttpResponseMessage
            Dim competitivelandscape As CompetitiveLandscape = db.CompetitiveLandscapes.Find(id)
            If IsNothing(competitivelandscape) Then
                Return Request.CreateResponse(HttpStatusCode.NotFound)
            End If

            db.CompetitiveLandscapes.Remove(competitivelandscape)

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK, competitivelandscape)
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub
    End Class
End NameSpace
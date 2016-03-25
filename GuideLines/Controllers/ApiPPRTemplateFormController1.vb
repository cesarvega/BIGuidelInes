Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports GuideLines.Models

Namespace Controllers
    Public Class ApiPPRTemplateFormController
        Inherits System.Web.Http.ApiController

        Private db As New Entities

        ' GET api/ApiPPRTemplateForm
        Function GetPPRTemplateForms() As IEnumerable(Of PPRTemplateForm)
            Return db.PPRTemplateForms.AsEnumerable()
        End Function

        ' GET api/ApiPPRTemplateForm/5
        Function GetPPRTemplateForm(ByVal id As String) As List(Of PPRTemplateForm)

            Dim pprRecords = (From ppr In db.PPRTemplateForms
                    Where ppr.ProjectId = id
                    Select ppr).ToList()
            If IsNothing(pprRecords) Then
                Throw New HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound))
            End If
            Return pprRecords
        End Function

        ' PUT api/ApiPPRTemplateForm/5
        Function PutPPRTemplateForm(ByVal id As Integer, ByVal pprtemplateform As PPRTemplateForm) As HttpResponseMessage
            If Not ModelState.IsValid Then
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If

            If Not id = pprtemplateform.PPRTemplateFormId Then
                Return Request.CreateResponse(HttpStatusCode.BadRequest)
            End If

            db.Entry(pprtemplateform).State = EntityState.Modified

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK)
        End Function

        ' POST api/ApiPPRTemplateForm
        Function PostPPRTemplateForm(ByVal pprtemplateforms As List(Of PPRTemplateForm)) As String

            For Each pprtemplateform As PPRTemplateForm In pprtemplateforms

                pprtemplateform.Created = DateTime.Now

                Dim pprtExist As PPRTemplateForm = (From PPR In db.PPRTemplateForms
                        Where PPR.InputGroup = pprtemplateform.InputGroup And PPR.ProjectId = pprtemplateform.ProjectId
                        Select PPR).FirstOrDefault()

                If pprtExist Is Nothing Then

                    If ModelState.IsValid Then
                        db.PPRTemplateForms.Add(pprtemplateform)
                    Else
                        Return "Something went wrong saving your data"
                    End If
                Else
                    If pprtExist.Answer <> pprtemplateform.Answer Or pprtExist.Comment <> pprtemplateform.Comment Or pprtExist.TemplateType <> pprtemplateform.TemplateType Then
                        pprtExist.ProjectId = pprtemplateform.ProjectId
                        pprtExist.ProjectName = pprtemplateform.ProjectName
                        pprtExist.Qestion = pprtemplateform.Qestion
                        If pprtemplateform.Comment IsNot Nothing Then
                            pprtExist.Comment = pprtemplateform.Comment
                        End If
                        pprtExist.Answer = pprtemplateform.Answer
                        pprtExist.InputGroup = pprtemplateform.InputGroup
                        pprtExist.TemplateType = pprtemplateform.TemplateType
                        pprtExist.VersionControlString = pprtemplateform.VersionControlString
                        pprtExist.Updated = DateTime.Now
                        If pprtExist.UpdatedBy = "" Then
                            pprtExist.UpdatedBy = User.Identity.Name
                        End If
                        db.Entry(pprtExist).State = EntityState.Modified
                    End If

                End If

                db.SaveChanges()

            Next

            Return "The information for the project have been updated!"
        End Function

        ' DELETE api/ApiPPRTemplateForm/5
        Function DeletePPRTemplateForm(ByVal id As Integer) As HttpResponseMessage
            Dim pprtemplateform As PPRTemplateForm = db.PPRTemplateForms.Find(id)
            If IsNothing(pprtemplateform) Then
                Return Request.CreateResponse(HttpStatusCode.NotFound)
            End If

            db.PPRTemplateForms.Remove(pprtemplateform)

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK, pprtemplateform)
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub
    End Class
End NameSpace
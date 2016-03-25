Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports System.Data.Common
Imports GuideLines.Models
Imports GuideLines.Helpers

Namespace Controllers

    Public Class ApiMeberServicesWebController
        Inherits System.Web.Http.ApiController

        Private db As New RESPONDENTSEntities

        ' GET api/ApiMeberServicesWeb
        Function GetPERSONAL_INFO() As String
            Return "hello world"
        End Function

        ' GET api/ApiMeberServicesWeb/5
        Function GetPERSONAL_INFO(ByVal id As String) As String
            Return "hello world2"


            Try 'BIInfo
                Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
                Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                    oDbHelper.AddParameter("@FBId", 1223)
                    oDbHelper.AddParameter("@FBEmail", id)
                    oDbHelper.AddParameter("@FirstName", id)
                    oDbHelper.AddParameter("@LastName", id)
                    Const sProc As String = "FacebookPersonalInfo"
                    Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
                    If oReader.HasRows Then
                        While oReader.Read()


                        End While
                    End If
                    If oReader IsNot Nothing Then
                        oReader.Close()
                    End If
                End Using
            Catch ex As Exception
            End Try

            Dim personal_info As PERSONAL_INFO = db.PERSONAL_INFO.Find(id)
            If IsNothing(personal_info) Then
                Throw New HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound))
            End If
            'Return personal_info
        End Function

        ' PUT api/ApiMeberServicesWeb/5
        Function PutPERSONAL_INFO(ByVal id As String, ByVal mysrring As String) As HttpResponseMessage

            Try 'BIInfo
                Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
                Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                    oDbHelper.AddParameter("@FBId", 1223)
                    oDbHelper.AddParameter("@FBEmail", id)
                    oDbHelper.AddParameter("@FirstName", id)
                    oDbHelper.AddParameter("@LastName", id)
                    Const sProc As String = "FacebookPersonalInfo"
                    Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
                    If oReader.HasRows Then
                        While oReader.Read()


                        End While
                    End If
                    If oReader IsNot Nothing Then
                        oReader.Close()
                    End If
                End Using
            Catch ex As Exception
            End Try


            If Not ModelState.IsValid Then
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If
            Dim personal_info
            If Not id = personal_info.USERNAME Then
                Return Request.CreateResponse(HttpStatusCode.BadRequest)
            End If

            db.Entry(personal_info).State = EntityState.Modified

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK)
        End Function

        ' POST api/ApiMeberServicesWeb
        Function PostPERSONAL_INFO(ByVal personal_info As PERSONAL_INFO) As HttpResponseMessage
            If ModelState.IsValid Then
                db.PERSONAL_INFO.Add(personal_info)
                db.SaveChanges()

                Dim response As HttpResponseMessage = Request.CreateResponse(HttpStatusCode.Created, personal_info)
                response.Headers.Location = New Uri(Url.Link("DefaultApi", New With {.id = personal_info.USERNAME}))
                Return response
            Else
                Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState)
            End If
        End Function

        ' DELETE api/ApiMeberServicesWeb/5
        Function DeletePERSONAL_INFO(ByVal id As String) As HttpResponseMessage
            Dim personal_info As PERSONAL_INFO = db.PERSONAL_INFO.Find(id)
            If IsNothing(personal_info) Then
                Return Request.CreateResponse(HttpStatusCode.NotFound)
            End If

            db.PERSONAL_INFO.Remove(personal_info)

            Try
                db.SaveChanges()
            Catch ex As DbUpdateConcurrencyException
                Return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex)
            End Try

            Return Request.CreateResponse(HttpStatusCode.OK, personal_info)
        End Function

        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            db.Dispose()
            MyBase.Dispose(disposing)
        End Sub
    End Class
End NameSpace
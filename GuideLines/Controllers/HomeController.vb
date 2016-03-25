Imports System.Data.Common
Imports WebMatrix.WebData

Namespace Controllers

    Public Class HomeController
        Inherits System.Web.Mvc.Controller

        Function Index() As ActionResult
            'Dim db As New Entities
            'Try
            '    Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
            '    Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
            '        oDbHelper.AddParameter("@projectNamePattern", "%")
            '        Const sProc As String = "ppr_ProjectList"
            '        Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
            '        If oReader.HasRows Then
            '            While oReader.Read()
            '                Dim projectName As String = oReader("ProjectName")

            '                Dim findrecord As Object = From pr In db.ppr_ProjectListTable.ToList()
            '                                                         Where pr.ProjectName = projectName
            '                                                         Select pr
            '                Dim projectRecord As New ppr_ProjectListTable
            '                For Each pr As ppr_ProjectListTable In findrecord
            '                    projectRecord = pr
            '                    projectRecord.ProjectName = projectName
            '                Next
            '                If projectRecord.ppr_ProjectListId <> 0 Then
            '                    If ModelState.IsValid Then
            '                        projectRecord.Updated = DateTime.Now
            '                        projectRecord.UpdatedBy = WebSecurity.CurrentUserName
            '                        db.Entry(projectRecord).State = EntityState.Modified
            '                        db.SaveChanges()
            '                    End If
            '                Else
            '                    Dim projectList As New ppr_ProjectListTable
            '                    projectList.ProjectName = projectName
            '                    projectList.Created = Date.Now.ToString("MM/dd/yyyy")
            '                    projectList.CreatedBy = WebSecurity.CurrentUserName
            '                    If ModelState.IsValid Then
            '                        db.ppr_ProjectListTable.Add(projectList)
            '                        db.SaveChanges()
            '                    End If
            '                End If
            '            End While
            '        End If
            '        If oReader IsNot Nothing Then
            '            oReader.Close()
            '        End If
            '    End Using

            'Catch ex As Exception

            'End Try
            'ViewData("Message") = ""

            Return View()
        End Function

        Function About() As ActionResult
            ViewData("Message") = "Your app description page."

            Return View()
        End Function

        Function Contact() As ActionResult
            ViewData("Message") = "Your contact page."

            Return View()
        End Function
    End Class
End NameSpace
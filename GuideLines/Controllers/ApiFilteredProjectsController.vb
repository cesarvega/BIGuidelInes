Imports System.Net
Imports System.Web.Http
Imports GuideLines.Models

Namespace Controllers

    Public Class ApiFilteredProjectsController
        Inherits ApiController
        Dim db As New Entities
        ' GET api/apifilteredprojects
        Public Function GetValues() As IEnumerable(Of String)
            Return New String() {"value1", "value2"}
        End Function

        ' GET api/apifilteredprojects/5
        Public Function GetValue(ByVal id As String) As IEnumerable(Of ppr_ProjectListTable)

            Dim filteredprojectList As New List(Of ppr_ProjectListTable)
            Dim filterdatasource = db.ppr_ProjectListTable.OrderByDescending(Function(r) r.ProjectName).Where(Function(r) r.ProjectName.StartsWith(id)).Select(Function(r) r)

            For Each Land In filterdatasource
                filteredprojectList.Add(Land)
            Next

            Return filteredprojectList
        End Function

        ' POST api/apifilteredprojects
        Public Sub PostValue(<FromBody()> ByVal value As String)

        End Sub

        ' PUT api/apifilteredprojects/5
        Public Sub PutValue(ByVal id As Integer, <FromBody()> ByVal value As String)

        End Sub

        ' DELETE api/apifilteredprojects/5
        Public Sub DeleteValue(ByVal id As Integer)

        End Sub
    End Class
End NameSpace
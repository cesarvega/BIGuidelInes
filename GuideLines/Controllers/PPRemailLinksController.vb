Imports System.Net
Imports System.Web.Http
Imports GuideLines.Helpers

Public Class PPRemailLinksController
    Inherits ApiController


    ' GET api/ppremaillinks
    Public Function GetValues() As IEnumerable(Of String)
        Return New String() {"value1", "value2"}
    End Function

    ' GET api/ppremaillinks/5
    Function GetBIDOCS_ppremaillinksItems(ByVal id As String) As String
        Dim Sql = "BI_GUIDELINES.dbo.PPR_getEmailLink '" + id + "';"
        Dim Items As String = clsData.GetStrValue(Sql)
        Return Items
    End Function


    ' POST api/ppremaillinks
    'Function PostBIDOCS_getEmailId(ByVal params As PPRemailLinks) As String

    '    Dim Sql = "BI_GUIDELINES.dbo.PPR_getEmailId '" + params.email + "'," + "'" + params.url + "'"
    '    Dim emailId As String = clsData.GetDataFromQuery(Sql)

    '    Return emailId
    'End Function

    ' PUT api/ppremaillinks/5
    Public Sub PutValue(ByVal id As Integer, <FromBody()> ByVal value As String)

    End Sub

    ' DELETE api/ppremaillinks/5
    Public Sub DeleteValue(ByVal id As Integer)

    End Sub

End Class

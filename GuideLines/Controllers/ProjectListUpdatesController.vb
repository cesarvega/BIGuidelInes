
Imports System.Web.Http
Imports System.DirectoryServices
Imports System.Security.Principal
Imports GuideLines.Helpers

Public Class ProjectListUpdatesController
    Inherits ApiController

    ' GET api/projectlistupdates
    Public Function GetValues() As String
        Dim groupNames As New StringBuilder()
        Const ldap As String = "LDAP://xavier.brandinstitute.com:389/DC=brandinstitute,DC=com"
        Dim rootDse As New DirectoryEntry(ldap)
        Dim domainDn As String = rootDse.Properties("DefaultNamingContext").Value
        Dim adEntry As New DirectoryEntry(ldap & domainDn)
        Dim adSearch As New DirectorySearcher(adEntry)

        Dim userId As String = System.Security.Principal.WindowsIdentity.GetCurrent.Name.Split("\"c)(1)
        adSearch.PropertiesToLoad.Add("memberOf")
        adSearch.Filter = ("(samAccountName=" & userId & ")")
        adSearch.SearchScope = SearchScope.Subtree
        Dim userFound As SearchResult = adSearch.FindOne()

        If Not IsNothing(userFound) Then
            Dim propertyCount As Integer = userFound.Properties("memberOf").Count
            Dim equalsIndex As Integer, commaIndex As Integer
            For propertyCounter As Integer = 0 To propertyCount - 1
                Dim dn = userFound.Properties("memberOf")(propertyCounter)
                equalsIndex = dn.IndexOf("=", 1)
                commaIndex = dn.IndexOf(",", 1)
                If -1 = equalsIndex Then

                End If
                groupNames.Append(dn.Substring((equalsIndex + 1), (commaIndex - equalsIndex) - 1))
                groupNames.Append("|")
            Next

        End If
        ' after I get the users crdentials and groups the we uopdate the prject list with the latest projects that came in to BI
        Try
            Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
            Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                Const sProc As String = "ppr_ProjectListUpdate"
                oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
            End Using
        Catch ex As Exception
        End Try
        Return groupNames.ToString()
    End Function

    ' GET api/projectlistupdates/5
    Public Function GetValue(ByVal id As String) As String
        Dim groupNames As New StringBuilder()
        Const ldap As String = "LDAP://Barca.brandinstitute.com:389/DC=brandinstitute,DC=com"
        Dim rootDse As New DirectoryEntry(ldap)
        Dim domainDn As String = rootDse.Properties("DefaultNamingContext").Value
        Dim adEntry As New DirectoryEntry(ldap & domainDn)
        Dim adSearch As New DirectorySearcher(adEntry)

        Dim userId As String = "apascale"
        'Dim userId As String = HttpContext.Current.User.Identity.Name
        If IsNothing(userId) Then
            userId = id
        End If
        adSearch.PropertiesToLoad.Add("memberOf")
        adSearch.Filter = ("(samAccountName=" & userId & ")")
        adSearch.SearchScope = SearchScope.Subtree
        Dim userFound As SearchResult = adSearch.FindOne()

        If Not IsNothing(userFound) Then
            Dim propertyCount As Integer = userFound.Properties("memberOf").Count
            Dim equalsIndex As Integer, commaIndex As Integer
            For propertyCounter As Integer = 0 To propertyCount - 1
                Dim dn = userFound.Properties("memberOf")(propertyCounter)
                equalsIndex = dn.IndexOf("=", 1)
                commaIndex = dn.IndexOf(",", 1)
                If -1 = equalsIndex Then

                End If
                groupNames.Append(dn.Substring((equalsIndex + 1), (commaIndex - equalsIndex) - 1))
                groupNames.Append("|")
            Next

        End If

        Try
            Dim Sql = "[BI_GUIDELINES].[dbo].[ppr_ProjectListUpdate]"
            Dim inputControlAttributes = clsData.justExecute(Sql)
        Catch ex As Exception
        End Try
        Return groupNames.ToString()
    End Function

    ' POST api/projectlistupdates
    Public Sub PostValue(<FromBody()> ByVal value As String)

    End Sub

    ' PUT api/projectlistupdates/5
    Public Sub PutValue(ByVal id As Integer, <FromBody()> ByVal value As String)

    End Sub

    ' DELETE api/projectlistupdates/5
    Public Sub DeleteValue(ByVal id As Integer)

    End Sub
End Class

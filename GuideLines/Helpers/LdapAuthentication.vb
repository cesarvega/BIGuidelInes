Imports System.Text
Imports System.DirectoryServices

Namespace Helpers
    Public Class LdapAuthentication
        Private _path As String
        Private _filterAttribute As String

        Public Sub New(path As String)
            _path = path
        End Sub

        Public Function IsAuthenticated(domain As String, username As String, pwd As String) As Boolean
            Dim domainAndUsername As String = domain & "\" & username
            Dim entry As New DirectoryEntry(_path, domainAndUsername, pwd)

            Try
                'Bind to the native AdsObject to force authentication.
                Dim obj As Object = entry.NativeObject

                Dim search As New DirectorySearcher(entry)

                search.Filter = "(SAMAccountName=" & username & ")"
                search.PropertiesToLoad.Add("cn")
                Dim result As SearchResult = search.FindOne()

                If result Is Nothing Then
                    Return False
                End If

                'Update the new path to the user in the directory.
                _path = result.Path
                _filterAttribute = DirectCast(result.Properties("cn")(0), String)
            Catch ex As Exception
                Throw New Exception("Error authenticating user. " & ex.Message)
            End Try

            Return True
        End Function

        Public Function GetGroups() As String
            Dim search As New DirectorySearcher(_path)
            search.Filter = "(cn=" & _filterAttribute & ")"
            search.PropertiesToLoad.Add("memberOf")
            Dim groupNames As New StringBuilder()

            Try
                Dim result As SearchResult = search.FindOne()
                Dim propertyCount As Integer = result.Properties("memberOf").Count
                Dim dn As String
                Dim equalsIndex As Integer, commaIndex As Integer

                For propertyCounter As Integer = 0 To propertyCount - 1
                    dn = DirectCast(result.Properties("memberOf")(propertyCounter), String)
                    equalsIndex = dn.IndexOf("=", 1)
                    commaIndex = dn.IndexOf(",", 1)
                    If -1 = equalsIndex Then
                        Return Nothing
                    End If
                    groupNames.Append(dn.Substring((equalsIndex + 1), (commaIndex - equalsIndex) - 1))
                    groupNames.Append("|")
                Next
            Catch ex As Exception
                Throw New Exception("Error obtaining group names. " & ex.Message)
            End Try
            Return groupNames.ToString()
        End Function
    End Class
End Namespace
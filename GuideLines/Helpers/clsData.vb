Imports System
Imports System.Web.Script.Serialization

Imports System.IO
Imports System.Data
Imports System.Data.SqlClient


Namespace Helpers
    Public Class clsData


        Shared _connString = ""
        Shared _connStringResults = ""
        Shared _connStringSrvBigBoy = ""

        Shared Property connString() As String
            Get

                If _connString = "" Then
                    _connString = LoadFile("\\miafs02\odbc$\dsnDaymaster.dsn")
                End If

                Return _connString
            End Get
            Set(ByVal Value As String)
                _connString = Value
            End Set
        End Property

        Shared Property connStringResults() As String
            Get
                If _connStringResults = "" Then
                    _connStringResults = LoadFile("\\miafs02\odbc$\dsnDaymaster.dsn")
                End If

                Return _connStringResults
            End Get
            Set(ByVal Value As String)
                _connStringResults = Value
            End Set
        End Property

        Shared Property connStringSrvBigBoy() As String
            Get
                If _connStringSrvBigBoy = "" Then
                    _connStringSrvBigBoy = LoadFile("\\miafs02\odbc$\dsnDaymaster.dsn")
                End If

                Return _connStringSrvBigBoy
            End Get
            Set(ByVal Value As String)
                _connStringSrvBigBoy = Value
            End Set
        End Property

        Private Shared Function LoadFile(ByVal FileName As String) As String
            Dim ioFile As New StreamReader(FileName)
            Dim ioLine As String ' Going to hold one line at a time
            Dim lst As Array

            Dim toret As String = ""

            Dim DataSource As String = ""
            Dim InitialCatalog As String = ""
            Dim UserID As String = ""
            Dim Password As String = ""

            Dim i As Integer = 0
            ioLine = ioFile.ReadLine
            While ioLine <> "" And i < 10

                lst = ioLine.Split("=")

                Select Case lst(0)
                    Case "UID"
                        UserID = lst(1)
                    Case "PWD"
                        Password = lst(1)
                    Case "DATABASE"
                        InitialCatalog = lst(1)
                    Case "SERVER"
                        DataSource = lst(1)
                End Select

                ioLine = ioFile.ReadLine
                i += 1
            End While

            toret = "Data Source=" & DataSource & ";Initial Catalog=" & InitialCatalog & ";User ID=" & UserID & ";Password=" & Password & ";Connect Timeout=0;Max Pool Size=1000;"

            Return toret
        End Function

        Private Shared Function getTmpConn(ByVal sql As String) As String

            Dim tmpConn = clsData.connString
            If InStr(sql.ToUpper, "BI_COPA") > 0 Then
                tmpConn = clsData.connStringSrvBigBoy
            End If

            Return tmpConn
        End Function


        Public Shared Function justExecute(ByVal sql As String) As Boolean
            Return justExecute(sql, getTmpConn(sql))
        End Function

        Public Shared Function justExecute(ByVal sql As String, ByVal tmpConnString As String) As Boolean
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConnString)
            Dim myCommand As SqlCommand


            myCommand = New SqlCommand(mySelectQuery, myConnection)
            myCommand.CommandTimeout = 0
            myConnection.Open()
            Try
                If sql <> "" Then
                    myCommand.ExecuteNonQuery()
                End If
            Catch ex As Exception

            Finally
                myConnection.Close()
            End Try


            Return True

        End Function



        Public Shared Function GetListVbCrLf(ByVal sql As String) As String
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(clsData.connString)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim lst As String = ""

            Dim myReader As SqlDataReader
            myConnection.Open()
            myReader = myCommand.ExecuteReader()

            While myReader.Read()
                lst = lst & myReader.GetString(0) & vbCrLf
            End While

            myReader.Close()
            myConnection.Close()

            Return lst

        End Function


        Public Shared Function GetArrayList(ByVal sql As String) As ArrayList
            Return GetArrayList(sql, getTmpConn(sql))
        End Function

        Public Shared Function GetArrayList(ByVal sql As String, ByVal tmpConn As String) As ArrayList
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConn)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim lst As New ArrayList

            Dim myReader As SqlDataReader
            myConnection.Open()
            myReader = myCommand.ExecuteReader()

            While myReader.Read()
                lst.Add(myReader.GetString(0))
            End While

            myReader.Close()
            myConnection.Close()

            Return lst

        End Function


        Public Shared Function GetReader(ByVal sql As String, ByVal tmpConn As String) As SqlDataReader
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConn)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)

            myConnection.Open()
            Dim myReader As SqlDataReader
            myReader = myCommand.ExecuteReader()

            Return myReader

        End Function


        Public Shared Function GetReader(ByVal sql As String) As SqlDataReader
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(clsData.connString)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)

            myConnection.Open()
            Dim myReader As SqlDataReader
            myReader = myCommand.ExecuteReader()

            Return myReader

        End Function


        Public Shared Function GetDataTable(ByVal sql As String) As DataTable
            Return GetDataTable(sql, clsData.connString)
        End Function

        Public Shared Function GetDataTable(ByVal sql As String, ByVal tmpConn As String) As DataTable
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConn)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim myDataAdapter As New SqlDataAdapter(myCommand)
            Dim ds As New DataTable

            myDataAdapter.Fill(ds)
            Return ds

        End Function


        Public Shared Function GetValue(ByVal sql As String) As Integer
            Return GetValue(sql, getTmpConn(sql))
        End Function


        Public Shared Function GetValue(ByVal sql As String, ByVal tmpConn As String) As Integer
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConn)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim strCount As Integer

            Dim myReader As SqlDataReader
            myConnection.Open()
            myReader = myCommand.ExecuteReader()

            With myReader
                If .Read() Then
                    strCount = myReader.GetInt32(0)
                End If
                .Close()
            End With

            myReader.Close()
            myConnection.Close()

            Return strCount

        End Function

        Public Shared Function GetDblValue(ByVal sql As String) As Double
            Return GetDblValue(sql, getTmpConn(sql))
        End Function

        Public Shared Function GetDblValue(ByVal sql As String, ByVal tmpConn As String) As Double
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConn)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim strCount As Double
            Dim myReader As SqlDataReader
            myConnection.Open()
            myReader = myCommand.ExecuteReader()

            With myReader
                If .Read() Then
                    strCount = myReader.GetDouble(0)
                End If
                .Close()
            End With

            myReader.Close()
            myConnection.Close()

            Return strCount

        End Function

        Public Shared Function GetBoolValue(ByVal sql As String) As Boolean
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(clsData.connString)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim blnCount As Boolean

            Dim myReader As SqlDataReader
            myConnection.Open()
            myReader = myCommand.ExecuteReader()

            With myReader
                If .Read() Then
                    blnCount = myReader.GetBoolean(0)
                End If
                .Close()
            End With

            myReader.Close()
            myConnection.Close()

            Return blnCount

        End Function

        Public Shared Function GetStrValue(ByVal sql As String) As String
            Return GetStrValue(sql, clsData.connString)
        End Function

        Public Shared Function GetStrValue(ByVal sql As String, ByVal tmpConn As String) As String
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConn)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim strCount As String = ""

            Dim myReader As SqlDataReader
            myConnection.Open()
            myReader = myCommand.ExecuteReader()

            With myReader
                If .Read() Then
                    If Not myReader.IsDBNull(0) Then
                        strCount = myReader.GetString(0)
                    End If
                End If
                .Close()
            End With

            myReader.Close()
            myConnection.Close()

            Return strCount

        End Function



        Public Shared Function GetHashTable(ByVal sql As String) As Hashtable

            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(clsData.connString)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim lst As New Hashtable
            Dim i As Integer


            Dim myReader As SqlDataReader
            myConnection.Open()

            myReader = myCommand.ExecuteReader()
            With myReader
                If .Read() Then
                    For i = 0 To .FieldCount - 1
                        lst.Add(.GetName(i).ToLower, .Item(i).ToString)
                    Next
                Else
                    For i = 0 To .FieldCount - 1
                        lst.Add(.GetName(i).ToLower, "")
                    Next
                End If
                .Close()
            End With
            myConnection.Close()

            Return lst
        End Function


        Public Shared Function GetRowsAsArrays(ByVal sql As String) As ArrayList

            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(clsData.connString)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim lst As New ArrayList
            Dim htable As Hashtable
            Dim i As Integer


            Dim myReader As SqlDataReader
            myConnection.Open()
            myReader = myCommand.ExecuteReader()
            While myReader.Read()
                With myReader
                    htable = New Hashtable
                    For i = 0 To .FieldCount - 1
                        htable.Add(.GetName(i).ToLower, .Item(i).ToString)
                    Next
                    lst.Add(htable)
                End With
            End While

            If lst.Count = 0 Then
                With myReader
                    htable = New Hashtable
                    For i = 0 To .FieldCount - 1
                        htable.Add(.GetName(i).ToLower, "")
                    Next
                    lst.Add(htable)
                End With
            End If
            myReader.Close()
            myConnection.Close()

            Return lst
        End Function

        Public Shared Function GetDataFromQuery(Sql As String) As String

            Dim mySelectQuery As String = Sql
            Dim myConnection As New SqlConnection(connString)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim lst As New ArrayList
            Dim lstaux As Dictionary(Of String, Object)
            Dim i As Integer

            Dim myReader As SqlDataReader
            myConnection.Open()

            myReader = myCommand.ExecuteReader()
            While myReader.Read()

                lstaux = New Dictionary(Of String, Object)
                For i = 0 To myReader.FieldCount - 1
                    lstaux.Add(myReader.GetName(i).ToLower, myReader.Item(i).ToString)
                Next
                lst.Add(lstaux)
            End While

            myReader.Close()
            myConnection.Close()

            Dim serializer As New JavaScriptSerializer()
            Return serializer.Serialize(lst)

        End Function

        Public Shared Function JSONBase(Sql As String) As ArrayList

            Dim mySelectQuery As String = Sql
            Dim myConnection As New SqlConnection(clsData.connString)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim lst As New ArrayList
            Dim lstaux As Dictionary(Of String, Object)
            Dim i As Integer

            Dim myReader As SqlDataReader
            myConnection.Open()

            myReader = myCommand.ExecuteReader()
            While myReader.Read()

                lstaux = New Dictionary(Of String, Object)
                For i = 0 To myReader.FieldCount - 1
                    lstaux.Add(myReader.GetName(i), myReader.Item(i).ToString)
                Next
                lst.Add(lstaux)
            End While
            myReader.Close()
            myConnection.Close()
            Return lst
        End Function





        Private Shared Sub wait()
            Try
                Threading.Thread.Sleep(1000 * New Random().Next(1, 3))
            Catch ex As Exception
                Console.WriteLine(ex.Message)
            End Try
        End Sub


        Public Shared Function GetCount(ByVal sql As String) As Integer
            Return GetCount(sql, getTmpConn(sql))
        End Function

        Public Shared Function GetCount(ByVal sql As String, ByVal tmpConn As String) As Integer
            Dim mySelectQuery As String = sql
            Dim myConnection As New SqlConnection(tmpConn)
            Dim myCommand As New SqlCommand(mySelectQuery, myConnection)
            Dim toret As Integer

            Dim bolContinue As Boolean = True
            Dim intTry As Integer = 0

            Dim myReader As SqlDataReader
            myConnection.Open()

            While bolContinue
                Try
                    myReader = myCommand.ExecuteReader()
                    With myReader
                        If .Read() Then
                            toret = myReader.GetInt32(0)
                            bolContinue = False
                        End If
                        .Close()
                    End With
                    myReader.Close()
                Catch
                    wait()
                    intTry += 1
                    If intTry > 5 Then
                        bolContinue = False
                    End If
                End Try
            End While

            myConnection.Close()
            Return toret

        End Function

    End Class
End Namespace
Imports System.Collections
Imports System.Collections.Generic
Imports System.Data
Imports System.Configuration
Imports System.Data.Common
Imports System.Data.SqlClient
Imports System.Data.OleDb
Imports System.Data.Odbc
Imports System.IO
Imports System.Net

Namespace Helpers

    Public Class DBHelper

        Public Class DatabaseHelper
            Implements IDisposable

            Private strConnectionString As String
            Private objConnection As DbConnection
            Private objCommand As DbCommand
            Private objFactory As DbProviderFactory = Nothing
            Private boolHandleErrors As Boolean
            Private strLastError As String
            Private boolLogError As Boolean
            Private strLogFile As String

            Public Sub New(connectionstring As String, provider As Providers)
                strConnectionString = connectionstring
                Select Case provider
                    Case Providers.SqlServer
                        objFactory = SqlClientFactory.Instance
                        Exit Select
                    Case Providers.OleDb
                        objFactory = OleDbFactory.Instance
                        Exit Select
                    Case Providers.Oracle

                        Exit Select
                    Case Providers.ODBC
                        objFactory = OdbcFactory.Instance
                        Exit Select
                    Case Providers.ConfigDefined
                        Dim providername As String = ConfigurationManager.ConnectionStrings("connectionstring").ProviderName
                        Select Case providername
                            Case "System.Data.SqlClient"
                                objFactory = SqlClientFactory.Instance
                                Exit Select
                            Case "System.Data.OleDb"
                                objFactory = OleDbFactory.Instance
                                Exit Select
                            Case "System.Data.OracleClient"

                                Exit Select
                            Case "System.Data.Odbc"
                                objFactory = OdbcFactory.Instance
                                Exit Select
                        End Select
                        Exit Select

                End Select
                objConnection = objFactory.CreateConnection()
                objCommand = objFactory.CreateCommand()

                objConnection.ConnectionString = strConnectionString
                objCommand.Connection = objConnection
            End Sub


            Public Sub New(provider As Providers)
                Me.New(ConfigurationManager.ConnectionStrings("connectionstring").ConnectionString, provider)
            End Sub

            Public Sub New(connectionstring As String)
                Me.New(connectionstring, Providers.SqlServer)
            End Sub


            Public Sub New()
                Me.New(ConfigurationManager.ConnectionStrings("connectionstring").ConnectionString, Providers.ConfigDefined)
            End Sub

            Public Property HandleErrors() As Boolean
                Get
                    Return boolHandleErrors
                End Get
                Set(value As Boolean)
                    boolHandleErrors = value
                End Set
            End Property

            Public ReadOnly Property LastError() As String
                Get
                    Return strLastError
                End Get
            End Property

            Public Property LogErrors() As Boolean
                Get
                    Return boolLogError
                End Get
                Set(value As Boolean)
                    boolLogError = value
                End Set
            End Property

            Public Property LogFile() As String
                Get
                    Return strLogFile
                End Get
                Set(value As String)
                    strLogFile = value
                End Set
            End Property

            Public Function AddParameter(name As String, value As Object, direction As ParameterDirection) As Integer
                Dim p As DbParameter = objFactory.CreateParameter()
                p.ParameterName = name
                If value Is Nothing Then
                    p.Value = System.DBNull.Value
                Else
                    p.Value = value
                End If

                p.Direction = direction

                Return objCommand.Parameters.Add(p)
            End Function

            ''' <summary>
            ''' Use Output parameter and define size of the output parameter.
            ''' This is used to define the length of a string output param.
            ''' </summary>
            ''' <param name="name"></param>
            ''' <param name="value"></param>
            ''' <param name="direction"></param>
            ''' <param name="parameterSize"></param>
            ''' <returns></returns>
            Public Function AddParameter(name As String, value As Object, direction As ParameterDirection, parameterSize As Integer) As Integer
                Dim p As DbParameter = objFactory.CreateParameter()
                p.ParameterName = name
                p.Size = parameterSize
                If value Is Nothing Then
                    p.Value = System.DBNull.Value
                Else
                    p.Value = value
                End If

                p.Direction = direction

                Return objCommand.Parameters.Add(p)
            End Function

            Public Function AddParameter(name As String, value As Object) As Integer
                Return AddParameter(name, value, System.Data.ParameterDirection.Input)
            End Function

            Public Function AddParameter(parameter As DbParameter) As Integer
                Return objCommand.Parameters.Add(parameter)
            End Function

            Public ReadOnly Property Command() As DbCommand
                Get
                    Return objCommand
                End Get
            End Property

            Public Sub BeginTransaction()
                If objConnection.State = System.Data.ConnectionState.Closed Then
                    objConnection.Open()
                End If
                objCommand.Transaction = objConnection.BeginTransaction()
            End Sub

            Public Sub CommitTransaction()
                objCommand.Transaction.Commit()
                objConnection.Close()
            End Sub

            Public Sub RollbackTransaction()
                objCommand.Transaction.Rollback()
                objConnection.Close()
            End Sub

            Public Function ExecuteNonQuery(query As String) As Integer
                Return ExecuteNonQuery(query, CommandType.Text, ConnectionState.CloseOnExit, True)
            End Function

            Public Function ExecuteNonQuery(query As String, commandtype As CommandType) As Integer
                Return ExecuteNonQuery(query, commandtype, ConnectionState.CloseOnExit, True)
            End Function

            Public Function ExecuteNonQuery(query As String, commandtype As CommandType, bclearparametersonclose As Boolean) As Integer
                Return ExecuteNonQuery(query, commandtype, ConnectionState.CloseOnExit, bclearparametersonclose)
            End Function

            Public Function ExecuteNonQuery(query As String, connectionstate As ConnectionState) As Integer
                Return ExecuteNonQuery(query, CommandType.Text, connectionstate, True)
            End Function

            Public Function ExecuteNonQuery(query As String, commandtype As CommandType, connectionstate__1 As ConnectionState, bclearparametersonclose As Boolean) As Integer
                objCommand.CommandText = query
                objCommand.CommandType = commandtype
                Dim i As Integer = -1
                Try
                    If objConnection.State = System.Data.ConnectionState.Closed Then
                        objConnection.Open()
                    End If
                    i = objCommand.ExecuteNonQuery()
                Catch ex As Exception
                    WebRequest.Create(HttpStatusCode.BadRequest)
                Finally
                    If bclearparametersonclose Then
                        objCommand.Parameters.Clear()
                    End If

                    If connectionstate__1 = ConnectionState.CloseOnExit Then
                        objConnection.Close()
                    End If
                End Try

                Return i
            End Function

            Public Function ExecuteScalar(query As String) As Object
                Return ExecuteScalar(query, CommandType.Text, ConnectionState.CloseOnExit)
            End Function

            Public Function ExecuteScalar(query As String, commandtype As CommandType) As Object
                Return ExecuteScalar(query, commandtype, ConnectionState.CloseOnExit)
            End Function

            Public Function ExecuteScalar(query As String, connectionstate As ConnectionState) As Object
                Return ExecuteScalar(query, CommandType.Text, connectionstate)
            End Function

            Public Function ExecuteScalar(query As String, commandtype As CommandType, connectionstate__1 As ConnectionState) As Object
                objCommand.CommandText = query
                objCommand.CommandType = commandtype
                Dim o As Object = Nothing
                Try
                    If objConnection.State = System.Data.ConnectionState.Closed Then
                        objConnection.Open()
                    End If
                    o = objCommand.ExecuteScalar()
                Catch ex As Exception
                    Return WebRequest.Create(HttpStatusCode.BadRequest)
                Finally
                    objCommand.Parameters.Clear()
                    If connectionstate__1 = ConnectionState.CloseOnExit Then
                        objConnection.Close()
                    End If
                End Try

                Return o
            End Function


            Public Function ExecuteReader(query As String) As DbDataReader
                Return ExecuteReader(query, CommandType.Text, ConnectionState.CloseOnExit)
            End Function

            Public Function ExecuteReader(query As String, commandtype As CommandType) As DbDataReader
                Return ExecuteReader(query, commandtype, ConnectionState.CloseOnExit)
            End Function

            Public Function ExecuteReader(query As String, connectionstate As ConnectionState) As DbDataReader
                Return ExecuteReader(query, CommandType.Text, connectionstate)
            End Function

            Public Function ExecuteReader(query As String, commandtype As CommandType, connectionstate__1 As ConnectionState) As DbDataReader
                objCommand.CommandText = query
                objCommand.CommandType = commandtype
                Dim reader As DbDataReader = Nothing
                Try
                    If objConnection.State = System.Data.ConnectionState.Closed Then
                        objConnection.Open()
                    End If
                    If connectionstate__1 = ConnectionState.CloseOnExit Then
                        reader = objCommand.ExecuteReader(CommandBehavior.CloseConnection)
                    Else
                        reader = objCommand.ExecuteReader()

                    End If
                Catch ex As Exception
                    HandleExceptions(ex)
                Finally
                    objCommand.Parameters.Clear()
                End Try

                Return reader
            End Function

            Public Function ExecuteDataSet(query As String) As DataSet
                Return ExecuteDataSet(query, CommandType.Text, ConnectionState.CloseOnExit)
            End Function

            Public Function ExecuteDataSet(query As String, commandtype As CommandType) As DataSet
                Return ExecuteDataSet(query, commandtype, ConnectionState.CloseOnExit)
            End Function

            Public Function ExecuteDataSet(query As String, connectionstate As ConnectionState) As DataSet
                Return ExecuteDataSet(query, CommandType.Text, connectionstate)
            End Function

            Public Function ExecuteDataSet(query As String, commandtype As CommandType, connectionstate__1 As ConnectionState) As DataSet
                Dim adapter As DbDataAdapter = objFactory.CreateDataAdapter()
                objCommand.CommandText = query
                objCommand.CommandType = commandtype
                adapter.SelectCommand = objCommand
                Dim ds As New DataSet()
                Try
                    adapter.Fill(ds)
                Catch ex As Exception
                    HandleExceptions(ex)
                Finally
                    objCommand.Parameters.Clear()
                    If connectionstate__1 = ConnectionState.CloseOnExit Then
                        If objConnection.State = System.Data.ConnectionState.Open Then
                            objConnection.Close()
                        End If
                    End If
                End Try
                Return ds
            End Function

            Private Sub HandleExceptions(ex As Exception)
                If LogErrors Then
                    WriteToLog(ex.Message)
                End If
                If HandleErrors Then
                    strLastError = ex.Message
                Else
                    Throw ex
                End If
            End Sub

            Private Sub WriteToLog(msg As String)
                Dim writer As StreamWriter = File.AppendText(LogFile)
                writer.WriteLine(DateTime.Now.ToString() & " - " & msg)
                writer.Close()
            End Sub

            Public Sub Dispose()
                objConnection.Close()
                objConnection.Dispose()
                objCommand.Dispose()
            End Sub

            Public Shared Function DoesColumnExist(dr As DbDataReader, columnName As String) As Boolean
                Dim ht = New Hashtable()
                For i As Integer = 0 To dr.FieldCount - 1
                    ht.Add(dr.GetName(i).ToUpper(), dr.GetName(i).ToUpper())
                Next

                If ht.Contains(columnName.ToUpper()) Then
                    Return True
                End If
                Return False
            End Function

            Public Function GetParameterValue(paramname As String) As String
                Return Me.objCommand.Parameters(paramname).Value.ToString()
            End Function

            Public Function DataReaderToDictionary(oreader As DbDataReader) As Dictionary(Of String, Object)
                Dim odict As New Dictionary(Of String, Object)()
                Dim icols As Integer = oreader.FieldCount
                Dim icol As Integer = 0
                While icol < icols
                    Dim sname As String = oreader.GetName(icol)
                    Dim ovalue As Object = oreader.GetValue(icol)
                    odict.Add(sname, ovalue)
                    icol += 1
                End While
                Return (odict)
            End Function

            Public Function DataReaderToDictionaryList(oreader As DbDataReader) As List(Of Dictionary(Of String, Object))
                Dim lrecords As New List(Of Dictionary(Of String, Object))()
                While oreader.Read()
                    Dim odict As Dictionary(Of String, Object) = DataReaderToDictionary(oreader)
                    lrecords.Add(odict)
                End While
                Return (lrecords)
            End Function


            Public Sub IDisposable_Dispose() Implements IDisposable.Dispose
                Throw New NotImplementedException()
            End Sub
        End Class

        Public Enum Providers
            SqlServer
            OleDb
            Oracle
            ODBC
            ConfigDefined
        End Enum

        Public Enum ConnectionState
            KeepOpen
            CloseOnExit
        End Enum
    End Class
End NameSpace
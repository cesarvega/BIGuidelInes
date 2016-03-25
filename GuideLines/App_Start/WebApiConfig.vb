Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web.Http

Namespace App_Start


    Public Class WebApiConfig
        Public Shared Sub Register(ByVal config As HttpConfiguration)
            config.Routes.MapHttpRoute( _
                name:="DefaultApi", _
                routeTemplate:="api/{controller}/{id}", _
                defaults:=New With {.id = RouteParameter.Optional} _
                )
            '        Dim appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(Function(t) t.MediaType = "application/xml")
            '        config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType)

            Dim json = config.Formatters.JsonFormatter
            json.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects
            'json.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented
            ' json.SerializerSettings.ContractResolver = New CamelCasePropertyNamesContractResolver()
            config.Formatters.Remove(config.Formatters.XmlFormatter)

            'Code that runs on application startup
            'routing web api requests
            'System.Web.Routing.RouteTable.Routes.MapHttpRoute(
            config.Routes.MapHttpRoute(
                name:="ApiBookmarks",
                routeTemplate:="api/{controller}/{id}",
                defaults:=New With {.id = RouteParameter.Optional} _
                )


            'Uncomment the following line of code to enable query support for actions with an IQueryable or IQueryable(Of T) return type.
            'To avoid processing unexpected or malicious queries, use the validation settings on QueryableAttribute to validate incoming queries.
            'For more information, visit http://go.microsoft.com/fwlink/?LinkId=279712.
            'config.EnableQuerySupport()
        End Sub
    End Class
End Namespace

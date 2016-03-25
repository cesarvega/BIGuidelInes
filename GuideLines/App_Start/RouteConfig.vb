Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.Mvc
Imports System.Web.Routing

Namespace App_Start

    Public Class RouteConfig
        Public Shared Sub RegisterRoutes(ByVal routes As RouteCollection)
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}")

            routes.MapRoute( _
                name:="Default", _
                url:="{controller}/{action}/{id}", _
                defaults:=New With {.controller = "PPRTemplateForm", .action = "Index", .id = UrlParameter.Optional} _
                )

        End Sub
    End Class
End Namespace
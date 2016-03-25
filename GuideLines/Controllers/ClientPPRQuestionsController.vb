Imports GuideLines.Helpers

Namespace Controllers
    Public Class ClientPPRQuestionsController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /ClientPPRQuestions
        <AllowAnonymous()>
        Function Index() As ActionResult
            Return View()
        End Function

        <AllowAnonymous()>
        Function ClientUIforIE8(ByVal id As String) As ActionResult
            Dim Sql = "[BI_GUIDELINES].[dbo].[BIDOCS_GetTemplateItems] " + id.ToString() + ";"

            Dim templateItems As ArrayList = clsData.JSONBase(Sql)

            Dim companionship As Object = New With {Key .Dwarves = {"Fili", "Kili", "Dori", "Nori", "Ori", "Oin", "Gloin", "Balin", "Dwalin", "Bifur", "Bofur", "Bombur", "Thorin"}, Key .Hobbits = {"Bilbo"}, Key .Wizards = {"Gandalf"}}

            Dim jsonSerialiser = New System.Web.Script.Serialization.JavaScriptSerializer
            Dim Json = jsonSerialiser.Serialize(companionship)

            Return View(companionship)
        End Function

        <AllowAnonymous()>
        Function ThankYou() As ActionResult
            Return View()
        End Function



        <AllowAnonymous()>
        Function Client() As ActionResult
            Return View()
        End Function
    End Class
End Namespace
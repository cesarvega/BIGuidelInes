Namespace Controllers
    Public Class PPRTemplateFormController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /PPRTemplateForm
        <Authorize>
        Function Index() As ActionResult
            Return View()
        End Function
        <AllowAnonymous()>
        Function ThankYou() As ActionResult
            Return View()
        End Function
    End Class
End NameSpace
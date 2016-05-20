@If Request.IsAuthenticated Then
    @<text>
      
    <div class="hidden-print" style="float: right;padding-left:5px;">
        @Using Html.BeginForm("LogOff", "Account", FormMethod.Post, New With {.id = "logoutForm"})
            @Html.AntiForgeryToken()
            @<a class="btn btn-info btn-xs" href="javascript:document.getElementById('logoutForm').submit()"> Log off</a> 
        End Using
    </div>
              <div class="hidden-print" style="float:right; padding-top:3px;padding-left:5px;" > Welcome, 
           @Html.ActionLink(User.Identity.Name, "Index", "PPRTemplateForm", routeValues:=Nothing, htmlAttributes:=New With {.class = "username hidden-print", .title = "Manage"}) ! </div>
              
              <div class="clear"></div>
          
    </text>
Else
    @<ul>
        <li>@Html.ActionLink("Register", "Register", "Account", routeValues:=Nothing, htmlAttributes:=New With {.id = "registerLink"})</li>
        <li>@Html.ActionLink("Log in", "Login", "Account", routeValues:=Nothing, htmlAttributes:=New With {.id = "loginLink"})</li>
    </ul>
End If

@ModelType GuideLines.Models.LoginModel
@Code
    ViewData("Title") = "Log in"
End Code
<style type="text/css">
   .form-group label {
    color:darkblue;
    
    }

   a {
    color: #000;
    text-decoration: none;
}

    .text-box {
    
        float:right;
    
    }
    input {
    float:right;
    padding: 0 !important;
     margin: -3px;
     text-align:left;
    }
 
</style>



<div class="jumbotron" style="margin:200px auto;width:600px;">

<section id="loginForm">
      <img class="media-object" alt="64x64" data-src="holder.js/64x64" style="margin:0 10px 10px 0;width:30%; float: left;" src="~/Images/BiLogoDoc2.jpg" />
        <span>Welcome to the <span style="color:darkblue;">PPRWebsite</span> application, please login</span>
     <div class="row clearfix">
         <div class="clear"></div>
        <div class="col-md-12 column">
    @Using Html.BeginForm(New With {.ReturnUrl = ViewData("ReturnUrl")})
        @Html.AntiForgeryToken()
        @Html.ValidationSummary(True)
        @<form>        
            
                        <div class="col-md-12 column ">
                            <div class="form-group form-control">
                                <label>User Name : </label>                             
                            @Html.TextBoxFor(Function(m) m.UserName)
                            @Html.ValidationMessageFor(Function(m) m.UserName)
                            </div>
                        </div>                     
                
               <div class="clear"></div>

                           
                        <div class="col-md-12 column">
                            <div class="form-group form-control">
                                <label>Password : </label>
                                @Html.PasswordFor(Function(m) m.Password)
                            @Html.ValidationMessageFor(Function(m) m.Password)
                            </div>
                        </div>
            

            <div style="display:none;">
                    @Html.CheckBoxFor(Function(m) m.RememberMe)
                    @Html.LabelFor(Function(m) m.RememberMe, New With {.Class = "checkbox"})
               </div>
            <button style="float:right ;" class="btn btn-info" type="submit" > Log in</button>
        </form>

    End Using
                </div>    </div>
</section>
    </div>
@*<section class="social" id="socialLoginForm">
    <h2>Use another service to log in.</h2>
    @Html.Action("ExternalLoginsList", New With {.ReturnUrl = ViewData("ReturnUrl")})
</section>*@

@Section Scripts
    @Scripts.Render("~/bundles/jqueryval")
End Section

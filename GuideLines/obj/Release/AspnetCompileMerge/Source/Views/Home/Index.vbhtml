@Code
    ViewData("Title") = "TUTORIAL"
End Code

<script type="text/javascript">
    (function ($) {
        //Here jQuery is $
        window.location.replace(getBaseURL() + "PPRwebsite" + '/PPRTemplateForm/thankYou');

    })(jQuery);
    $(document).ready(function () {

        window.location.replace(getBaseURL() + "PPRwebsite" + '/PPRTemplateForm/thankYou');

    });



</script>

<header>
      <div class="row">
           @* <div class="navbar navbar-inverse navbar-fixed-top"></div>*@
            <div class="navbar navbar-default">
         
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="~/Home">B. i.</a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav nav-tabs ">
                  <li class="active"> @Html.ActionLink("Home", "Index", "Home")</li>       
                  <li> @Html.ActionLink("Choose a Project", "Index", "Projects")</li>             
                <li> @Html.ActionLink("Printed Projects", "Index", "PrintedPPRDocs")</li>                   
              </ul>        
          </div>
        </div>
    </div>
</header>

    <section class="jumbotron" style="background-color:lightblue; padding:10px 20px 10px 20px">
      
       
                <h2>@ViewData("Title").</h2>
                <h3>@ViewData("Message")</h3>
          
   <p style="text-justify:distribute; font-size:14px">
                Brand Institute is the world's premier brand identity consultancy.  Our brand agency portfolio of services includes 

    <a title="Brand Strategy/Architecture" href="http://www.brandinstitute.com/services_architecture.asp">brand strategy/architecture
    </a>,
    <a title="Name Development" href="http://www.brandinstitute.com/services_namedevelopment.asp">name development
    </a>, 
    <a title="Market Research" href="http://www.brandinstitute.com/services_nameResearch.asp">market research
    </a>, 
    <a title="Risk Assessment" href="http://www.brandinstitute.com/services_Regulatory.asp">regulatory 
    </a>and 
    <a title="Design Services" href="http://www.brandinstitute.com/services_design.asp">visual identity
    </a>
                solutions.
         
    Brand Institute is the parent company of 
    <a target="_blank" href="http://www.drugsafetyinstitute.com/"> Drug Safety Institute (DSI), </a>
    , a subsidiary comprised of former nomenclature safety experts from the 
               Food and Drug Administration (FDA), Health Canada, USAN Council, 
               World Health Organization (WHO), and extensive experience with European 
               Medicines Agency (EMA) and Ministry of Health, Labour and Welfare (MHLW). 
               This skilled and knowledgeable team provides our pharmaceutical, biotechnology, medical device, 
               OTC clients with name safety and marketing research services, providing the most efficient and proven paths to drug name approval.
       </p>

    </section>

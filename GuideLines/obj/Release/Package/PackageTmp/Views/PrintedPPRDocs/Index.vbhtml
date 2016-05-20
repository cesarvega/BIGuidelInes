@ModelType IEnumerable(Of GuideLines.PPRQueue)

@Code
    ViewData("Title") = "Index"
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
            <div class="navbar navbar-default">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="~/Projects">B. i.</a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav nav-tabs">
@*                  <li > @Html.ActionLink("Home", "Index", "Home")</li>       *@
                  <li > @Html.ActionLink("Choose a Project", "Index", "Projects")</li>                
                  <li class="active"> @Html.ActionLink("Printed Projects", "Index", "PrintedPPRDocs")</li>                
              </ul>        
          </div>
        </div>
    </div>
</header>

<div class="alert alert-info"><b>IMPORTANT :</b> 
     <span style="color:darkgoldenrod">  Please refresh the page</span>   every 20 seconds until the status of the document is not <span style="color:red">"pending"</span> but  <span style="color:green">"Porcessed"</span> 
      before attempting to dowload the document .
  
       </div>

@*<p>
    @Html.ActionLink("Create New", "Create")
</p>*@
<table class="table table-striped table-hover">
    <tr>
       @* <th>
            @Html.DisplayNameFor(Function(model) model.ProjectId)
        </th>*@
        <th>
          @*  @Html.DisplayNameFor(Function(model) model.ProjectName)*@
            Project Name
        </th>
        <th>
          @*  @Html.DisplayNameFor(Function(model) model.Projectlink)*@
            Download Link
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.Status)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.Created)
        </th>
        <th>
            @*@Html.DisplayNameFor(Function(model) model.CreatedBy)*@
            Created By 
        </th>     
        <th></th>
    </tr>

@For Each item In Model
    Dim currentItem = item
    @<tr>
        @*<td>
            @Html.DisplayFor(Function(modelItem) currentItem.ProjectId)
        </td>*@
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.ProjectName)
        </td>
        <td>
            @If (currentItem.Status = "pending") Then
                    @<div>     <img src="~/Content/Backload/content-types/24/Word.png" /> </div>
                Else
                    
                   @<div>    @Html.ActionLink("Download", "GetReport", "PrintedPPRDocs", New With {.fileNameToPrint = currentItem.Projectlink}, New With {.class = "btn"})    <img src="~/Content/Backload/content-types/24/Word.png" /> </div>
                    
                End If
        
        </td>
        <td>
                        @If (currentItem.Status = "pending") Then
                                
                                     @<div style="color:red"> @Html.DisplayFor(Function(modelItem) currentItem.Status)</div>          
                            Else
                               
                            @<div style="color:green" > @Html.DisplayFor(Function(modelItem) currentItem.Status)</div>
                               
                            End If
                                   
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.Created)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.CreatedBy)
        </td>      
        <td>
        @*    @Html.ActionLink("Edit", "Edit", New With {.id = currentItem.PPRQueueId}) |
            @Html.ActionLink("Details", "Details", New With {.id = currentItem.PPRQueueId}) |*@
          @*  @Html.ActionLink("Delete", "Delete", New With {.id = currentItem.PPRQueueId})*@
        </td>
    </tr>
Next

</table>

<script type="text/javascript">
   


</script>
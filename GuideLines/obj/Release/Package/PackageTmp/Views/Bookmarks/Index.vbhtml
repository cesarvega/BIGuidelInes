@ModelType IEnumerable(Of GuideLines.BookMark)

@Code
    ViewData("Title") = "Index"
End Code

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
              <ul class="nav nav-tabs">
                  <li > @Html.ActionLink("Home", "Index", "Home")</li>       
                  <li > @Html.ActionLink("Choose a Project", "Index", "Projects")</li>             
                  <li class="active"> @Html.ActionLink("Upload Document", "Index", "Bookmarks")</li>                  
              </ul>        
          </div>
        </div>
    </div>
</header>
<h2>Upload a document template with bookmarks</h2><br />

 <p>
<a style="color:white;float:right; text-decoration:none; padding-right:10px;" class="btn  btn-primary" href="../DocuCretation/OpenFile">Upload Document  <i class="glyphicon glyphicon-arrow-up"></i></a>
</p>
@*<p class="btn btn-primary" style="color:white;float:right; text-decoration:none; text-decoration-color:white">
    @Html.ActionLink("Create New Boomark", "Create")
</p>*@
<table  class="table">
    <tr>
        <th>
           BookMark 
        </th> 
          <th>
           BookMark Question
        </th> 
          <th>
           BookMark Answer
        </th>         
        <th>
           Created
        </th>
        <th>
          CreatedBy
        </th>
      @*  <th>
           Updated
        </th>
        <th>
           UpdatedBy
        </th>*@
        <th></th>
    </tr>

@For Each item In Model
    Dim currentItem = item
    @<tr>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkDescription)
        </td>
     <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkQuestion)
        </td>
      <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkAnswer)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.Created)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.CreatedBy)
        </td>
     @*   <td>
            @Html.DisplayFor(Function(modelItem) currentItem.Updated)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.UpdatedBy)
        </td>*@
        <td>
            @Html.ActionLink("Edit", "Edit", New With {.id = currentItem.BookMarkId }) |
            @Html.ActionLink("Delete", "Delete", New With {.id = currentItem.BookMarkId})
        </td>
    </tr>
Next

</table>

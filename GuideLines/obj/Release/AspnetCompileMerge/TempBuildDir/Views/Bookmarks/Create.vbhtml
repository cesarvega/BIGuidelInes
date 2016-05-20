@ModelType GuideLines.BookMark

@Code
    ViewData("Title") = "Create Project"
End Code
<script src="~/Scripts/JavaScriptDataModels.js"></script>
<h2>Create Bookmark</h2>

  <div id='jqxWidget' style="width: 800px">
        <div style='padding-left:30px;'>

@Using Html.BeginForm(Nothing, Nothing, FormMethod.Post, New With { _
    Key .enctype = "multipart/form-data" _
})
    @Html.AntiForgeryToken()
    @Html.ValidationSummary(True)

    @<fieldset>
        <legend></legend>
              <div class="col-md-6 ">
        <div class="row">
            <div class="col-md-6 lead">
                Bookmark Name:
            </div>
            <div class="col-md-6 ">
          
                @Html.EditorFor(Function(model) model.BookmarkDescription)
                @Html.ValidationMessageFor(Function(model) model.BookmarkDescription)
            </div>
        </div>

        
         <div class="row">

   
      <div class="col-md-6 lead">
           Bookmark  Long Description:
        </div>
        <div class="col-md-6">
            @Html.EditorFor(Function(model) model.BookmarklongDescription)
            @Html.ValidationMessageFor(Function(model) model.BookmarklongDescription)
        </div>
  </div>


        <div class="invisible" style="display:none">
        @Html.EditorFor(Function(model) model.BookmarkSectionId)
             @Html.ValidationMessageFor(Function(model) model.BookmarkSectionId)
       </div>  
         <div class="invisible" style="display:none">
        @Html.EditorFor(Function(model) model.BookmarkProjectId)
              @Html.ValidationMessageFor(Function(model) model.BookmarkProjectId)
       </div>

             <div class="invisible" style="display:none">
        @Html.EditorFor(Function(model) model.BookmarkAnswerTypeId)
              @Html.ValidationMessageFor(Function(model) model.BookmarkAnswerTypeId)
       </div>

             <div class="row">
      <div class="col-md-6 lead">
          Project Name:
        </div>
                  <div class="col-md-6">
             <div id='jqxdropdownlist2'></div>
        </div>
        </div>
        
            <div class="row">
      <div class="col-md-6 lead">
          BookMark Section:
        </div>
                  <div class="col-md-6">
             <div id='jqxdropdownlist'></div>
        </div>
        </div>

            <div class="row">
      <div class="col-md-6 lead">
          Bookmark Answer Type :
        </div>
                  <div class="col-md-6">
             <div id='jqxdropdownlist3'></div>
        </div>
        </div>
        </div>
         <div class="col-md-6 ">

     <div class="invisible" style="display:none">
                 <div id='jqxdropdownlist4'></div>
            <div id='jqxWidgetListbox'></div>
                    </div>
               <div class="col-md-6 ">
              <div id='jqxWidget1' style=" font-size: 13px; font-family: Verdana; float:left; display:none; " >
     <h3 style="padding-left: 10px;">Upload A File <img id="imageupload" src="~/Content/Backload/content-types/24/Excel.png" /></h3>
     <hr />
   @FileUpload.GetHtml(
         initialNumberOfFiles := 1,
         allowMoreFilesToBeAdded := False,
         includeFormTag := True,
         uploadText:="Save Bookmark",
         name:="file_upload"
         )

 </div>
   </div>   

 
 </div>
        <div class="row">
                <div class="col-md-6 lead">
                <p>
                    <input type="submit" class="btn btn-primary btn-xs" value="Create" id="saveButton" />
                </p>
            
                 </div>
            </div>
    </fieldset>
End Using

<div>
    @Html.ActionLink("Back to List", "Index")
</div>
</div>
</div>
<script src="~/Scripts/BookmarkDropdowns.js"></script>
@Section Scripts
    @Scripts.Render("~/bundles/jqueryval")
End Section


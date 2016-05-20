@ModelType GuideLines.BookMark

@Code
    ViewData("Title") = "Edit"
End Code


<h2>Edit</h2>
<div class="jqxWidget" style="font-size: 13px; width: 900px; float: left">
    <div style='padding-left: 30px;'>
        @Using Html.BeginForm(Nothing, Nothing, FormMethod.Post, New With { _
    Key .enctype = "multipart/form-data" _
})@Html.AntiForgeryToken()
            @Html.ValidationSummary(True)

            @<fieldset>
                <legend></legend>

                @Html.HiddenFor(Function(model) model.BookmarkId)
                @Html.HiddenFor(Function(model) model.BookmarkSectionId)
                @Html.HiddenFor(Function(model) model.BookmarkProjectId)
                @Html.HiddenFor(Function(model) model.BookmarkUserId)               
                @Html.HiddenFor(Function(model) model.BookmarkAnswerId)
                @Html.HiddenFor(Function(model) model.Created)
                @Html.HiddenFor(Function(model) model.CreatedBy)


                <div class="invisible" style="display: none">
                    @Html.EditorFor(Function(model) model.BookmarkSectionId)
                    @Html.ValidationMessageFor(Function(model) model.BookmarkSectionId)
                </div>
                <div class="invisible" style="display: none">
                    @Html.EditorFor(Function(model) model.BookmarkProjectId)
                    @Html.ValidationMessageFor(Function(model) model.BookmarkProjectId)
                </div>

                <div id="answertype" class="invisible" style="display: none">
                    @Html.EditorFor(Function(model) model.BookmarkAnswerTypeId)
                    @Html.ValidationMessageFor(Function(model) model.BookmarkAnswerTypeId)
                </div>

                <div class="row">
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
                                Bookmark  Question:
                            </div>
                            <div class="col-md-6">
                                @Html.EditorFor(Function(model) model.BookmarkQuestion)
                                @Html.ValidationMessageFor(Function(model) model.BookmarkQuestion)
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6 lead">
                                Bookmark  Answer:
                            </div>
                            <div class="col-md-6">
                                @Html.EditorFor(Function(model) model.BookmarkAnswer)
                                @Html.ValidationMessageFor(Function(model) model.BookmarkAnswer)
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6 lead">
                                Project Name:
                            </div>
                            <div class="col-md-6">
                                <div id='jqxdropdownlist'></div>
                            </div>
                        </div>

                </div>

                <div class="clear"></div>
                <p>
                    <input type="submit" value="Save" class="btn btn-primary" id="editbutton" />
                </p>
            </fieldset>
        End Using

        <div>
            @Html.ActionLink("Back to List", "Index")
        </div>
    </div>
</div>

<script src="~/Scripts/JavaScriptDataModels.js"></script>
@Section Scripts
    @Scripts.Render("~/bundles/jqueryval")
End Section
   
<script type="text/javascript">


    $(document).ready(function () {

        var projectSource = {
            type: "GET",
            datatype: "json",
            async: false,
            cache: true,
            url: getBaseURL() + "api/ApiProjects/"
        };

        var projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
            contentType: 'application/json; charset=utf-8',
            formatData: function (data) {

            }
        });


        $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '200px' });


    });


    $('#jqxdropdownlist').on('change', function (event) {
        var args = event.args;
        if (args) {
            // index represents the item's index.                      
            var index = args.index;
            var item = args.item;
            // get item's label and value.
            var label = item.label;
            var value = item.value;

            $("#BookmarkProjectId").attr('value', value);

        };

        var bookmarkProjectId = $("#BookmarkProjectId").val();
        var item = $("#jqxdropdownlist").jqxDropDownList('getItemByValue', bookmarkProjectId);
        if (typeof item != 'undefined') {

            $("#jqxdropdownlist").jqxDropDownList({ selectedIndex: item.index });

        }



    });



</script>
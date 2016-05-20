@ModelType GuideLines.ClientQueue

@Code
    ViewData("Title") = "Create"
End Code

<h2>Create</h2>

@Using Html.BeginForm()
    @Html.AntiForgeryToken()
    @Html.ValidationSummary(True)

    @<fieldset>
        <legend>ClientQueue</legend>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.ClientName)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.ClientName)
            @Html.ValidationMessageFor(Function(model) model.ClientName)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.ProjectName)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.ProjectName)
            @Html.ValidationMessageFor(Function(model) model.ProjectName)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.TimeStamp)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.TimeStamp)
            @Html.ValidationMessageFor(Function(model) model.TimeStamp)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.Browser)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.Browser)
            @Html.ValidationMessageFor(Function(model) model.Browser)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.Created)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.Created)
            @Html.ValidationMessageFor(Function(model) model.Created)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.CreatedBy)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.CreatedBy)
            @Html.ValidationMessageFor(Function(model) model.CreatedBy)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.Updated)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.Updated)
            @Html.ValidationMessageFor(Function(model) model.Updated)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.UpdatedBy)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.UpdatedBy)
            @Html.ValidationMessageFor(Function(model) model.UpdatedBy)
        </div>

        <p>
            <input type="submit" value="Create" />
        </p>
    </fieldset>
End Using

<div>
    @Html.ActionLink("Back to List", "Index")
</div>

@Section Scripts
    @Scripts.Render("~/bundles/jqueryval")
End Section

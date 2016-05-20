@ModelType GuideLines.PPRQueue

@Code
    ViewData("Title") = "Create"
End Code

<h2>Create</h2>

@Using Html.BeginForm()
    @Html.AntiForgeryToken()
    @Html.ValidationSummary(True)

    @<fieldset>
        <legend>PPRQueue</legend>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.ProjectId)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.ProjectId)
            @Html.ValidationMessageFor(Function(model) model.ProjectId)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.ProjectName)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.ProjectName)
            @Html.ValidationMessageFor(Function(model) model.ProjectName)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.Projectlink)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.Projectlink)
            @Html.ValidationMessageFor(Function(model) model.Projectlink)
        </div>

        <div class="editor-label">
            @Html.LabelFor(Function(model) model.Status)
        </div>
        <div class="editor-field">
            @Html.EditorFor(Function(model) model.Status)
            @Html.ValidationMessageFor(Function(model) model.Status)
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

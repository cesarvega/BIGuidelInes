@ModelType GuideLines.ClientQueue

@Code
    ViewData("Title") = "Delete"
End Code

<h2>Delete</h2>

<h3>Are you sure you want to delete this?</h3>
<fieldset>
    <legend>ClientQueue</legend>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.ClientName)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.ClientName)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.ProjectName)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.ProjectName)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.TimeStamp)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.TimeStamp)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.Browser)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.Browser)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.Created)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.Created)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.CreatedBy)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.CreatedBy)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.Updated)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.Updated)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.UpdatedBy)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.UpdatedBy)
    </div>
</fieldset>
@Using Html.BeginForm()
    @Html.AntiForgeryToken()
    @<p>
        <input type="submit" value="Delete" /> |
        @Html.ActionLink("Back to List", "Index")
    </p>
End Using

@ModelType GuideLines.PPRQueue

@Code
    ViewData("Title") = "Details"
End Code

<h2>Details</h2>

<fieldset>
    <legend>PPRQueue</legend>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.ProjectId)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.ProjectId)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.ProjectName)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.ProjectName)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.Projectlink)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.Projectlink)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.Status)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.Status)
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
<p>

    @Html.ActionLink("Edit", "Edit", New With {.id = Model.PPRQueueId}) |
    @Html.ActionLink("Back to List", "Index")
</p>

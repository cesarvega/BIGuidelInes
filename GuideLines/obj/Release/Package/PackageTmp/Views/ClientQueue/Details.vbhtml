@ModelType GuideLines.ClientQueue

@Code
    ViewData("Title") = "Details"
End Code

<h2>Details</h2>

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
<p>

    @Html.ActionLink("Edit", "Edit", New With {.id = Model.ClientQueueId}) |
    @Html.ActionLink("Back to List", "Index")
</p>

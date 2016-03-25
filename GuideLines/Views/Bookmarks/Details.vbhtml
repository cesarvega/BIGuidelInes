@ModelType GuideLines.BookMark

@Code
    ViewData("Title") = "Details"
End Code

<h2>Details</h2>

<fieldset>
    <legend>BookMark</legend>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.BookmarkDescription)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.BookmarkDescription)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.BookmarklongDescription)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.BookmarklongDescription)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.BookmarkProjectId)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.BookmarkProjectId)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.BookmarkUserId)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.BookmarkUserId)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.BookmarkAnswerId)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.BookmarkAnswerId)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.BookmarkAnswerTypeId)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.BookmarkAnswerTypeId)
    </div>

    <div class="display-label">
        @Html.DisplayNameFor(Function(model) model.BookmarkSectionId)
    </div>
    <div class="display-field">
        @Html.DisplayFor(Function(model) model.BookmarkSectionId)
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

    @Html.ActionLink("Edit", "Edit", New With {.id = Model.BookmarkId}) |
    @Html.ActionLink("Back to List", "Index")
</p>

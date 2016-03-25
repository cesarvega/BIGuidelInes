@ModelType IEnumerable(Of GuideLines.BookMarks)

@Code
    ViewData("Title") = "Index"
End Code

<h2>Index</h2>

<p>
    @Html.ActionLink("Create New", "Create")
</p>
<table>
    <tr>
        <th>
            @Html.DisplayNameFor(Function(model) model.BookmarkDescription)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.BookmarklongDescription)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.BookmarkProjectId)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.BookmarkUserId)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.BookmarkAnswerId)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.BookmarkAnswerTypeId)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.BookmarkSectionId)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.Created)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.CreatedBy)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.Updated)
        </th>
        <th>
            @Html.DisplayNameFor(Function(model) model.UpdatedBy)
        </th>
        <th></th>
    </tr>

@For Each item In Model
    Dim currentItem = item
    @<tr>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkDescription)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarklongDescription)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkProjectId)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkUserId)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkAnswerId)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkAnswerTypeId)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.BookmarkSectionId)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.Created)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.CreatedBy)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.Updated)
        </td>
        <td>
            @Html.DisplayFor(Function(modelItem) currentItem.UpdatedBy)
        </td>
        <td>
            @Html.ActionLink("Edit", "Edit", New With {.id = currentItem.BookmarkId}) |
            @Html.ActionLink("Details", "Details", New With {.id = currentItem.BookmarkId}) |
            @Html.ActionLink("Delete", "Delete", New With {.id = currentItem.BookmarkId})
        </td>
    </tr>
Next

</table>

//this file has all set up for dropdowns and updates for several pages Bookmarks view (Edit, Create) FillBookmarks (Index)
$(document).ready(function () {
    
         var bookmarkTypeSource = {
             type: "GET",
             datatype: "json",
             async: false,
             cache: true,
             url: getBaseURL() + "api/ApiBookmarksSection/"
         };

         var bookmarkTypeDataAdapter = new $.jqx.dataAdapter(bookmarkTypeSource, {
             contentType: 'application/json; charset=utf-8',
             formatData: function (data) {
             }
         });

         var projectSource = {
             type: "GET",
             datatype: "json",
             async: false,
             cache: true,
             url: getBaseURL() + "api/ApiProject/"
         };

         var projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
             contentType: 'application/json; charset=utf-8',
             formatData: function (data) {
             }
         });


         var bookmarkAnswerTypeSource = {
             type: "GET",
             datatype: "json",
             async: false,
             cache: true,
             url: getBaseURL() + "api/BookmarkAnswerType/"
         };

         var bookmarkAnswerTypeAdapter = new $.jqx.dataAdapter(bookmarkAnswerTypeSource, {
             contentType: 'application/json; charset=utf-8',
             formatData: function (data) {
             }
         });

         var clientSource = {
             type: "GET",
             datatype: "json",
             async: false,
             cache: true,
             url: getBaseURL() + "api/ApiClients/"
         };

         var clientAdapter = new $.jqx.dataAdapter(clientSource, {
             contentType: 'application/json; charset=utf-8',
             formatData: function (data) {
             }
         });
 
         $("#jqxdropdownlist").jqxDropDownList({ source: bookmarkTypeDataAdapter, valueMember: 'BookmarkSectionId', displayMember: 'BookmarkSectionDescription', width: '200px' });
         $("#jqxdropdownlist2").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ProjectId', displayMember: 'ProjectDescription', width: '200px' });
         $("#jqxdropdownlist3").jqxDropDownList({ source: bookmarkAnswerTypeAdapter, valueMember: 'BookmarkAnswerTypeId', displayMember: 'BookmarkAnswerTypeDescription', width: '200px' });
         $("#jqxdropdownlist4").jqxDropDownList({ source: clientAdapter, valueMember: 'ClientId', displayMember: 'ClientFirstName', width: '200px' });


         //seting the dropdowns options with the current values
         var bookmarkProjectId = $("#BookmarkProjectId").val();
         var bookmarkSectionId = $("#BookmarkSectionId").val();
         var bookmarkAnswerTypeId = $("#BookmarkAnswerTypeId").val();
         var clientBookmarksId
         if (typeof  $("#ClientBookmarksId").val() == 'undefined') {
          clientBookmarksId = 1;
      }else {
          
          clientBookmarksId = $("#ClientBookmarksId").val();
      }
        
         
         var item2 = $("#jqxdropdownlist2").jqxDropDownList('getItemByValue', bookmarkProjectId);
         if (typeof item2 != 'undefined') {
             
             $("#jqxdropdownlist2").jqxDropDownList({ selectedIndex: item2.index });
             
         }
         var item = $("#jqxdropdownlist").jqxDropDownList('getItemByValue', bookmarkSectionId);
         if (typeof item != 'undefined') {
             
             $("#jqxdropdownlist").jqxDropDownList({ selectedIndex: item.index });

         }
      
         var item3 = $("#jqxdropdownlist3").jqxDropDownList('getItemByValue', bookmarkAnswerTypeId);
         
         if (typeof item3 != 'undefined') {

             $("#jqxdropdownlist3").jqxDropDownList({ selectedIndex: item3.index });

         }
     

         var item4 = $("#jqxdropdownlist4").jqxDropDownList('getItemByValue', clientBookmarksId);
         
         if (typeof item4 != 'undefined') {

             $("#jqxdropdownlist4").jqxDropDownList({ selectedIndex: item4.index });

         }

         $.ajax({
             url: getBaseURL() + "api/ApiClientBookmarks/" + clientBookmarksId,
             type: "GET",
             datatype: "json",
             contentType: 'application/json; charset=utf-8',
             async: false,
             cache: false,
         }).done(function (data) {
             if (data != null) {
                 
                 var result = data.BookmarkId.split(",");

                 for (var i = 0; i < result.length ; i++) {

                     $("#jqxWidgetListbox").jqxListBox('selectIndex', result[i] - 1);

                 };


             }
             
           
         

         });

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
        applyFilters(label ,value);
        $("#BookmarkSectionId").attr('value', value);
    }
});

$('#jqxdropdownlist2').on('change', function (event) {
    var args = event.args;
    if (args) {
        // index represents the item's index.                      
        var index = args.index;
        var item = args.item;
        // get item's label and value.
        var label = item.label;
        var value = item.value;
        applyFilters(label, value);
        $("#BookmarkProjectId").attr('value', value);
    }
});

$('#jqxdropdownlist3').on('change', function (event) {
    var args = event.args;
    if (args) {
        // index represents the item's index.                      
        var index = args.index;
        var item = args.item;
        // get item's label and value.
        var label = item.label;
        var value = item.value;
        applyFilters(label, value);
        $("#BookmarkAnswerTypeId").attr('value', value);
        var url = getBaseURL();
        if (label == 'TBL') {
            $("#saveButton").fadeOut();
            $("#editbutton").fadeOut();
            $("#jqxWidget2").fadeOut();
            $("#jqxWidget3").fadeOut();
          
            $("#jqxWidget1").fadeIn();
            $("#imageupload").attr('src', '../../Content/Backload/content-types/24/Excel.png');
            $('.myFrame').attr('src', url + 'DocuCretation/UploadFile');

        } else if (label == 'MUL' || label == 'SGLC')
        {
            $("#saveButton").fadeIn();
            $("#editbutton").fadeIn();
            $("#jqxWidget1").fadeOut();
            $("#jqxWidget3").fadeOut();
            
            $("#jqxWidget2").fadeIn();
         
        } else if (label == 'IMG') {
        
            $("#saveButton").fadeOut();
            $("#editbutton").fadeOut();
            $("#jqxWidget1").fadeOut();
            $("#jqxWidget2").fadeOut();
            $("#imageupload").attr('src', '../../Content/Backload/content-types/24/Image.png');
            $("#jqxWidget1").fadeIn();
            $("#jqxWidget").fadeIn();
            $('.myFrame').attr('src', url + 'DocuCretation/UploadFile');
        } else {
            $("#saveButton").fadeIn();
            $("#editbutton").fadeIn();
            $("#jqxWidget1").fadeOut();
            $("#jqxWidget2").fadeOut();
            $("#jqxWidget3").fadeOut();
        }


    }
});

$('#jqxdropdownlist4').on('change', function (event) {
    var args = event.args;
    if (args) {
        // index represents the item's index.                      
        var index = args.index;
        var item = args.item;
        // get item's label and value.
        var label = item.label;
        var value = item.value;
        applyFilters(label, value);
    }
});



        // panels
        $(document).ready(function () {
        // Create jqxPanel
            var theme = 'bootstrap';
        $("#jqxWidget").jqxPanel({ width: 1000, height: 600, theme: theme });
        $("#jqxWidget1").jqxPanel({ width: 500, height: 200, theme: theme });
        $("#jqxWidget2").jqxPanel({ width: 540, height: 400, theme: theme });
        $("#jqxWidget3").jqxPanel({ width: 500, height: 200, theme: theme });
        });
        

// fuction to add and remove bookmark choices for multiple choice answers
        $(function () {
            var addDiv = $('#addinput');
            var i = $('#addinput p').size() + 1;
         
            $('#addNew').click( function () {
                $('<p><input type="text"  id="p_new" size="40" name="p_new_' + i + '" value="" placeholder="I am New" />' +
                    '<button style="margin-left: 5px;" class="btn  btn-danger btn-xs" id="remNew" > Remove</button>').appendTo(addDiv);
                i++;
                return false;
            });

            $(document).on('click', '#remNew', function () {
                if (i > 2) {
                    $(this).parents('p').remove();
                    i--;
                }
                return false;
            });
            });
            
   
// multiple choice widget
            var elements = [];
            $("#editbutton").click(function () {

                //iterates through each input field and pushes the value to the array
                $("#addinput :input").each(function () {

                    var item = this.value;
                    if (item != "" && typeof item != 'undefined')
                        elements.push(item);
                });
                var CSVList = elements.join(',');
                
                var bookmarkAnswerTypeChoiceId = 0;
                var bookmarkAnswerTypeChoiceDescription = CSVList;
                var bookmarkId = $("#BookmarkId").val();
                var created = new Date();
               var createdBy ="";
                
               var bookmarkAnswerTypeChoice = new BookmarkAnswerTypeChoiceModel(bookmarkAnswerTypeChoiceId, bookmarkAnswerTypeChoiceDescription, bookmarkId, created, createdBy, "", "");

               var Data = JSON.stringify(bookmarkAnswerTypeChoice);

                $.ajax({
                    url: getBaseURL() + "api/ApiBookmarkAnswerTypeChoice",
                    type: "POST",
                    datatype: "json",
                    contentType: 'application/json; charset=utf-8',
                    async: false,
                    data: Data,
                }).done(function (data) {
                    var result = "";

                });


            });


// assigned bookmarks to clients controls 
            var source = [];
            var theme = 'bootstrap';
            
            var applyFilters = function (filterName, id) {

                if ($("#jqxdropdownlist4").jqxDropDownList('getSelectedItem') != null) {
                  var clientId = $("#jqxdropdownlist4").jqxDropDownList('getSelectedItem').value;
              };
              if ($("#jqxdropdownlist2").jqxDropDownList('getSelectedItem') != null) {
                  var projectId = $("#jqxdropdownlist2").jqxDropDownList('getSelectedItem').value;
              };
              if ($("#jqxdropdownlist3").jqxDropDownList('getSelectedItem') != null) {
                  var bookmarkTypeId = $("#jqxdropdownlist3").jqxDropDownList('getSelectedItem').value;
              };
              if ($("#jqxdropdownlist").jqxDropDownList('getSelectedItem') != null) {
                  var sectionId = $("#jqxdropdownlist").jqxDropDownList('getSelectedItem').value;
              };

                var Data = new FilterParamettersModel(clientId, projectId, bookmarkTypeId, sectionId);

                $.ajax({
                    url: getBaseURL() + "api/filteredbookmarks/Filter/" + 1,
                    type: "POST",
                    datatype: "json",
                    contentType: 'application/json; charset=utf-8',
                    async: false,
                    datafields: [
                   { name: 'BookmarkDescription' },
                   { name: 'BookmarkId' }
                    ],
                    data: JSON.stringify(Data),
                }).done(function (data) {          

            
                    // Create a jqxListBox
                    $("#jqxWidgetListbox").jqxListBox({ source: data.$values, displayMember: "BookmarkDescription", valueMember: "BookmarkId", multiple: true, width: 500, height: 300, theme: theme });
                    
                    // display selected List Items.
                    var displaySelectedItems = function() {
                        var items = $("#jqxWidgetListbox").jqxListBox('getSelectedItems');
                        var selection = "Selected Items: ";
                        for (var i = 0; i < items.length; i++) {
                            selection += items[i].label + (i < items.length - 1 ? ", " : "");
                        }
                        $("#selectionLog").text(selection);
                    };
                    displaySelectedItems();
                    $("#jqxWidgetListbox").on('change', function () {
                        displaySelectedItems();
                    });


                });

            };



// save selected items from the list box
            
            
            var saveSelectedItems = function() {
                var bookmarkId;
                var bookmarkIds =[];
                var clientId = "";
                
                if ($("#jqxdropdownlist4").jqxDropDownList('getSelectedItem') != null) {
                     clientId = $("#jqxdropdownlist4").jqxDropDownList('getSelectedItem').value;
                };
                var items = $("#jqxWidgetListbox").jqxListBox('getSelectedItems');
                
                $.each(items, function (index) {
                    bookmarkIds.push(items[index].value);
                });

                bookmarkId = bookmarkIds.join(",");
                var created = new Date();
                var createdBy = "";
                var clientBookmarkModel = new ClientBookmarkModel(0, clientId, bookmarkId, created, createdBy, "", "");
                var Data = JSON.stringify(clientBookmarkModel);
                $.ajax({
                    url: getBaseURL() + "api/ApiClientBookmarks/",
                    type: "POST",
                    datatype: "json",
                    contentType: 'application/json; charset=utf-8',
                    async: false,
                    cache: false,
                    data: Data,
                }).done(function (data) {


                });
            };
             
            var saveEditedItems = function () {
                var bookmarkId;
                var bookmarkIds = [];
                var clientId = "";

                if ($("#jqxdropdownlist4").jqxDropDownList('getSelectedItem') != null) {
                    clientId = $("#jqxdropdownlist4").jqxDropDownList('getSelectedItem').value;
                };
                var items = $("#jqxWidgetListbox").jqxListBox('getSelectedItems');

                $.each(items, function (index) {
                    bookmarkIds.push(items[index].value);
                });

                bookmarkId = bookmarkIds.join(",");
                
                var clientBookmarksId = $("#ClientBookmarksId").val();

                var created = new Date();
                var createdBy = "";
                var clientBookmarkModel = new ClientBookmarkModel(clientBookmarksId, clientId, bookmarkId, created, createdBy, "", "");
                var Data = JSON.stringify(clientBookmarkModel);
                $.ajax({
                    url: getBaseURL() + "api/ApiClientBookmarks/" + clientBookmarksId,
                    type: "PUT",
                    datatype: "json",
                    contentType: 'application/json; charset=utf-8',
                    async: false,
                    cache: false,
                    data: Data,
                }).done(function (data) {

                    window.location.replace("../Index");

                });
            };

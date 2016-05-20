@ModelType GuideLines.BookMark
@Code
    ViewData("Title") = "Index"
End Code

        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script> 
        <script src="~/Scripts/jqwidgets/jqxgrid.grouping.js"></script>
        <script src="~/Scripts/jqwidgets/jqxnavigationbar.js"></script>
        <link href="~/Content/themes/base/jquery.ui.core.css" rel="stylesheet" />
<script type="text/javascript">
    (function ($) {
        //Here jQuery is $
        window.location.replace(getBaseURL() + "PPRwebsite" + '/PPRTemplateForm/thankYou');

    })(jQuery);
    $(document).ready(function () {

        window.location.replace(getBaseURL() + "PPRwebsite" + '/PPRTemplateForm/thankYou');

    });


</script>
<style type="text/css">     
        .green {
           color: white;
            background-color: #29B5B6;
            border: 1px solid #000000;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
           -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
            transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
            border-radius: 4px;
           -webkit-border-radius: 4px;
              margin-bottom:0;
        }
      
        .red {
               border-radius: 6px;
                background-color: #FFFFFF;
                border: 1px solid #CCCCCC;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
                transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
                    }
        .green:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .green:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
           color: #31708F;
            background-color: #BCE8F1;
            border: 1px solid #31708F;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
           -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
            transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
            border-radius: 4px;
           -webkit-border-radius: 4px;
           margin-top:0;
        }
      
        .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
               background-color: #FFFFFF;
                border: 1px solid #000000;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
                transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
                border-radius: 6px;
        }
    </style>

<header>
      <div class="row">
            <div class="navbar navbar-default">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="~/Projects">B. i.</a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav nav-tabs">
        @*          <li > @Html.ActionLink("Home", "Index", "Home")</li>       *@
                  <li class="active"> @Html.ActionLink("Choose a Project", "Index", "Projects")</li>                
                  <li> @Html.ActionLink("Printed Projects", "Index", "PrintedPPRDocs")</li>                
              </ul>        
          </div>
        </div>
    </div>
</header>

<div class="jumbotron" style="padding: 20px; margin-bottom: 15px;">
    <div class="row clearfix">
        <div class="col-md-12 column">
            <div class="col-md-4">
                <div class="input-group">
                    <input class="form-control" type="text" id="searchproject" onchange="searchProjectChange()" placeholder="Search By Project Keywords" style="float: left; font-size: 0.8em;" />
                    <span class="input-group-btn">
                        <button class="btn btn-info" style="float: left; padding-left: 10px;">Go</button>
                    </span>
                </div>
            </div>
            <div class="col-md-4" style="float: left;">
                <div id='jqxdropdownlist' style="margin: 0 auto;"></div>
            </div>
            <div class="col-md-4" style="float: left;">
          <div class="input-group">
                    <div id='jqxDateInput'>              
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="col-md-12 column">

            <div class="col-md-4 column">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search By Project Director" style="font-size: 0.8em;">
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="button">Go</button>
                    </span>
                </div>
                <!-- /input-group -->
            </div>
            <div class="col-md-4 column">
                <div class="input-group">
                    <div id="jqxDirectorsComboBox"></div>                 
                </div>
                <!-- /input-group -->
            </div>
            <div class="col-md-4 column">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search By Project Manager " style="font-size: 0.8em;">
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="button">Go</button>
                    </span>
                </div>
                <!-- /input-group -->
            </div>

            <div class="col-md-4 column">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search By Project Office " style="font-size: 0.8em;">
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="button">Go</button>
                    </span>
                </div>
                <!-- /input-group -->
            </div>
            <div class="col-md-4 column">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search By Project Directors Name" style="font-size: 0.8em;">
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="button">Go</button>
                    </span>
                </div>
                <!-- /input-group -->
            </div>
            <div class="col-md-4 column">
                
            </div>
        </div>
    </div>
</div>
 
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  aria-hidden="true" style="">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel"></h4>
      </div>
        <div class="modal-body">
            <div id='formulationDropdownlist'></div>
                 <div id="listAlert" style="display:none; font-size:15px; text-align:left; " class="alert alert-danger"><span >
                    <strong>To input a BULLET LIST,</strong> enter your list items in line and separated with the  "@@" character without spaces in between.  <br />
                     For example : <span style="color:black;background-color:#BCE8F1;">bulletPoint1@@bulletPoint2@@bulletPoint3...Etc</span>                 
                       </span>
                 </div>
            <div id='RouteOfAdminitrationDropdownlist'></div>     
               <textarea name="edit1" id="edit1" cols="30" rows="30" wrap="soft" style="width: 500px;  height: 200px; display: none;"></textarea>
            <div class="input-group"  style="padding: 15px 0 0; width: 415px;">             
                <input type="text" id="otherBoxInput" class="form-control">
                   <span class="input-group-btn">
                    <button class="btn btn-primary" id="otherBoxInputButton" type="button">Update!</button>
                </span>
            </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="gethtml" data-dismiss="modal" class="btn btn-primary" >Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div id='jqxTabs'>
    <ul style='margin-left: 20px;'>
        <li>General Info</li>
        <li>Rx Brand Name/Branded Generic</li>
        <li> Competitive Landscape Table</li>
        <li>
            <div style="float:left; "><span style="color:black;" class="alert alert-info">Generate PPR Document For Project : </span></div>
             <div  style="float:left;"><span  id="currentProject" class="alert alert-success"> </span></div>         
             <div class="clear"></div>
        </li>
    </ul>
    <div>
       <div id="jqxgrid"></div>
    </div>
    <div>
        <div id="Brandjqxgrid"></div>
    </div>
    <div>
     <div>
          <button id="addExcel" style="display: none; float:left; margin: 5px;" class="btn btn-primary btn-sm">Update excel table</button>
            </div>
              <div>
                <p class="alert alert-info " style="width: 55%;  float:left;  color: black">Please Paste only tables from excel
                    <img src="~/Content/Backload/content-types/24/Excel.png" />
                    and use Ctrl v to paste it</p>
                <textarea id="tableFromExcel" style="width: 100%; height: 500px"></textarea>
            </div>
           
          <div class="clear"></div>
          <div id="tableView"></div>
    </div>

    <div>  
              <button class="btn btn-primary btn-sm" id="generatePprbutton" style="display: none; margin: 55px auto;" onclick="GeneratePPRDocument() ">Generate PPR Document</button>
                @Using Html.BeginForm("Create", "GeneratePPR", FormMethod.Post, New With { _
                      Key .enctype = "multipart/form-data" _
                        })@Html.AntiForgeryToken()
                    @Html.ValidationSummary(True)
                    @<fieldset>
                        <legend style="display: none;"></legend>
                        @Html.HiddenFor(Function(model) model.BookmarkProjectId)
                    </fieldset>                     
                End Using  
    </div>
</div>

<script type="text/javascript">

    //all global vars 
    var tableHeaders = [];
    var allTableDefinitions = [];
    var projectSourceGlobal;
    var projectSource;
    var projectDataAdapter;
    var rowIdForDropdownOnchangeEvent;0
    var valueForDropdownOnchangeEvent;
    var gridTheme = 'bootstrap';
    var rowHeight = 25;
    // var deploymentDomainSubfix = "NRDG";
   //  var deploymentDomainSubfix = "PPRwebsite";
    var deploymentDomainSubfix = "";
    $("#gethtml").on("click", function () {
        var val = $("#edit1").val();
        var row = $("#myModal").attr('mycustomrowid');
        if (row == '123456789') {
            $("#jqxgrid").jqxGrid('setcellvalue', 11, "BookmarkAnswer", val);
            $("#jqxgrid").jqxGrid('updaterow', 11);
            $("#tesxtboxinput").css('display', 'none');

        } else {
            $("#Brandjqxgrid").jqxGrid('setcellvalue', row, "BookmarkAnswer", val);
            $("#Brandjqxgrid").jqxGrid('updaterow', row);
        };
    });

    var searchProjectChange = function () {
        var value = document.getElementById("searchproject").value;

        if (value == "") {

            projectSource = {
                type: "GET",
                datatype: "json",
                async: false,
                cache: true,
                url: getBaseURL() + deploymentDomainSubfix + "/api/ApiProjects/"
            };

            projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
                contentType: 'application/json; charset=utf-8',
                formatData: function (data) {

                }
            });


            $("#jqxdropdownlist").jqxDropDownList('clear');
            $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '300px' });
            $("#jqxdropdownlist").jqxDropDownList('open');

        } else {
            projectSource = {
                type: "GET",
                datatype: "json",
                async: false,
                cache: true,
                url: getBaseURL() + deploymentDomainSubfix + "/api/apifilteredprojects/" + value
            };

            projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
                contentType: 'application/json; charset=utf-8',
                formatData: function (data) {

                }
            });
            $("#jqxdropdownlist").jqxDropDownList('clear');
            $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '300px' });
            $("#jqxdropdownlist").jqxDropDownList('open');
        }


    };

    $(document).ready(function () {

        $('#jqxTabs').jqxTabs({ width: '100%' });
        $("#jqxDateInput").jqxDateTimeInput({ width: '300px', height: '30px', formatString: 'MMMM, dddd, dd, yyyy' });
      
        projectSource = {
            type: "GET",
            datatype: "json",
            async: false,
            cache: true,
            url: getBaseURL() + deploymentDomainSubfix + "/api/ApiProjects/"
        };

        projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
            contentType: 'application/json; charset=utf-8',
            formatData: function (data) {

            }
        });

        $("#jqxDirectorsComboBox").jqxComboBox({ source: projectDataAdapter, selectedIndex: 0, width: '250', height: '25px' });
        $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '300px' });


    });

    $('#jqxdropdownlist').on('change', function (event) {
        var args = event.args;
        if (args) {
            var index = args.index;
            var item = args.item;
            var label = item.label;
            var value = item.value;
            $("#BookmarkProjectId").attr('value', value);
            $("#currentProject").text(label);
            $("#currentProject").val(value);
            loadFeedPageGrid(label);
            $('#addExcel').css('display', 'block');
            $('#generatePprbutton').css('display', 'block');
            var tableView = $("#tableView");

            tableView.empty();
            document.getElementById("tableFromExcel").value = "";
            $.ajax({
                url: getBaseURL() + deploymentDomainSubfix + "/api/competitivelanscape/" + value,
                type: 'GET',
                async: false,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (data) {
                    createTableView(data)
                },
            });


        };

    });
    //*********************************Add excel table for competitive landscape**********************************************

    $("#addExcel").click(function () {

        var myData = createTable();
        var Data = JSON.stringify(myData);
        var Data2 = JSON.stringify(myData);
        var projectId = $("#BookmarkProjectId").val();

        $.ajax({
            url: getBaseURL() + deploymentDomainSubfix + "/api/competitivelanscape/" + projectId,
            data: Data,
            type: 'PUT',
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                alert("The Table has been saved");

            },
        });

        $.ajax({
            url: getBaseURL() + deploymentDomainSubfix + "/api/competitivelanscape/" + projectId,
            data: Data2,
            type: 'POST',
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
        document.getElementById("tableFromExcel").value = "";

    });

    function createTableView(A) {
        excelRow = [];
        if (A.length > 0) {
            excelRow = JSON.parse(A);
        };


        // start to create the HTML table
        var myTable = document.createElement("table");
        myTable.id = "mytableLayout";
        var myTbody = document.createElement("tbody");
        // Loop over the rows
        for (i = 0; i < excelRow.length - 1; i++) {

            // create a row in the HTML table
            var myRow = document.createElement("tr");
            // Loop over the columns and add TD to the TR
            for (j = 0; j < excelRow[i].length; j++) {
                // Loop over the row columns
                if (excelRow[i][j].length != 0) {
                    var myCell = document.createElement("td");
                    myCell.innerHTML = excelRow[i][j];
                }
                myRow.appendChild(myCell);
            }
            myTbody.appendChild(myRow);
        }
        myTable.appendChild(myTbody);
        var tableView = $("#tableView");
        tableView.empty();
        tableView.append(myTable);
        $("#mytableLayout").addClass("table table-striped table-hover");
    }

    function createTable() {

        // Get the data
        var excelData = document.getElementById('tableFromExcel').value;
        // split into rows
        excelRow = excelData.split(String.fromCharCode(10));
        excelRowLengh = excelRow.length;
        A = [];
        var headerRow = excelRow[0].split(String.fromCharCode(9));
        var numberOfColumns = headerRow.length;
        var i;
        // split rows into columns
        for (i = 0; i < excelRowLengh; i++) {
            var sizeToCompare = excelRow[i].split(String.fromCharCode(9));
            if (numberOfColumns == sizeToCompare.length) {

                if (excelRow[i].split(String.fromCharCode(9)) != undefined || excelRow[i].split(String.fromCharCode(9)) != "")

                    A[i] = excelRow[i].split(String.fromCharCode(9));
            } else {
                // add empty string on the blank cells 
                temparray = [];
                for (j = 0; j < numberOfColumns; j++) {
                    // Loop over the row columns.
                    var checkCellVal = excelRow[i][j];
                    if (typeof checkCellVal != "undefined") {

                        A[i] = excelRow[i][j];
                    }
                    else {
                        temparray[j] = " ";
                    };

                };
                A[i] = temparray;
            }

        };
        excelRow = [];
        excelRow = A;

        // start to create the HTML table
        var myTable = document.createElement("table");
        myTable.id = "mytableLayout";
        var myTbody = document.createElement("tbody");
        // Loop over the rows
        for (i = 0; i < excelRow.length - 1; i++) {

            // create a row in the HTML table
            var myRow = document.createElement("tr");
            // Loop over the columns and add TD to the TR
            for (j = 0; j < excelRow[i].length; j++) {
                // Loop over the row columns
                if (excelRow[i][j].length != 0) {
                    var myCell = document.createElement("td");
                    myCell.innerHTML = excelRow[i][j];
                };
                myRow.appendChild(myCell);
            };
            myTbody.appendChild(myRow);
        };
        myTable.appendChild(myTbody);
        var tableView = $("#tableView");
        tableView.empty();
        tableView.append(myTable);
        $("#mytableLayout").addClass("table table-striped table-hover");
        return excelRow;

    };

    //*********************************Add excel table for competitive landscape   END*********************************************

    function loadFeedPageGrid(projectName) {

        var dataAdapter;
        var url = getBaseURL() + deploymentDomainSubfix + "/api/ApiBookmark/" + projectName;
        var source =
        {
            type: "GET",
            datatype: "json",
            async: false,
            cache: true,
            url: url,
            datafields: [
         { name: 'BookMarkId' },
         { name: 'BookmarkDescription' },
         { name: 'BookmarklongDescription' },
         { name: 'BookmarkProjectId' },
         { name: 'BookmarkUserId', },
         { name: 'BookmarkAnswer' },
         { name: 'BookmarkQuestion' },
         { name: 'BookmarkAnswerId' },
         { name: 'BookmarkAnswerTypeId' },
         { name: 'BookmarkSection' },
        { name: 'Created' },
         { name: 'CreatedBy' },
         { name: 'Updated' },
         { name: 'UpdatedBY' }

            ],
            id: 'BookMarkId',
            updaterow: function (rowid, rowdata, commit) {
                var projectId = $("#BookmarkProjectId").val()
                var Bookmark = new BookmarkModel(rowid, rowdata.BookmarkAnswer, projectId, rowdata.BookmarkDescription, null, null, null, null, null, null, null, null, null);
                var Data = JSON.stringify(Bookmark);
                $.ajax({
                    url: getBaseURL() + deploymentDomainSubfix + "/api/ApiFillBookmarks/" + rowid,
                    data: Data,
                    type: 'PUT',
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (data) {
                        $("#jqxgrid").jqxGrid('updatebounddata');
                        alert("Answer Saved");
                        commit(true);
                    },
                });
            }
        };

        var dataAdapter = new $.jqx.dataAdapter(source, {
            contentType: 'application/json; charset=utf-8',
            formatData: function (data) {
            }
        });

        var groupsrenderer = function (text, group, expanded) {
            return '<div style="width:100%;padding: 5px; float: left;background-color: #D9EDF7;font-weight:bold;">' + group + '</div>';
        }

        var renderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
            if (value == "") {

                return '<div  style=" color:#8C8C8C;padding: 10px;"> ' + "Please Select And Click To Edit Cell " + '</div>';
            };


        }

        var cellclass = function (row, columnfield, value) {
            if (value == "") {
                return 'red';
            }
            else return 'green';
        }

        $("#jqxgrid").jqxGrid(
        {
            theme: gridTheme,
            width: '99%',
            altrows: true,
            groupable: true,
            editable: false,
            sortable: true,
            columnsreorder: true,
            autoheight: true,
            groupsrenderer: groupsrenderer,
            selectionmode: 'singlecell',
            columnsresize: true,
            source: dataAdapter,
            editable: true,
            enabletooltips: true,
            rowdetails: false,
            rowsheight: rowHeight,
            groups: ['BookmarkSection'],
            columns: [
                              { text: 'Bookmark ID', datafield: 'BookMarkId', editable: false, hidden: true },
                              { text: 'Word Doc Bookmark ', datafield: 'BookmarkDescription', editable: false, width: "30%", hidden: true },
                               { text: 'BookmarklongDescription', datafield: 'BookmarklongDescription', editable: false, hidden: true },
                               { text: 'BookmarkProjectId', datafield: 'BookmarkProjectId', editable: false, hidden: true },
                               { text: '', datafield: 'BookmarkQuestion', editable: false, width: "25%" },
                               { text: '', datafield: 'BookmarkAnswer', editable: true, width: "74%", cellclassname: cellclass },
                               { text: 'Section', datafield: 'BookmarkSection', editable: false, hidden: true },
                               { text: 'BookmarkUserId', datafield: 'BookmarkUserId', editable: false, hidden: true },
                              { text: 'Bookmark Answer ', datafield: 'BookmarkAnswerid', hidden: true },
                              { text: 'Bookmark Answer Type', datafield: 'BookmarkAnswerTypeId', hidden: true },
                              { text: 'Created', datafield: 'Created', editable: false, hidden: true },
                              { text: 'CreatedBy', datafield: 'CreatedBy', editable: false, hidden: true },
                              { text: 'Updated', datafield: 'Updated', editable: false, hidden: true },
                              { text: 'UpdatedBY', datafield: 'UpdatedBY', editable: false, hidden: true }

            ]

        });



        var bookMarkDataSource =
                  {
                      type: "GET",
                      datatype: "json",
                      async: false,
                      cache: true,
                      url: getBaseURL() + deploymentDomainSubfix + "/api/ApiFillBookmarks/" + projectName,
                      datafields: [
                        { name: 'BookmarkId' },
                        { name: 'BookmarkDescription' },
                        { name: 'BookmarklongDescription' },
                        { name: 'BookmarkProjectId' },
                        { name: 'BookmarkUserId' },
                        { name: 'BookmarkQuestion' },
                        { name: 'BookmarkAnswer' },
                        { name: 'BookmarkAnswerId' },
                        { name: 'BookmarkAnswerTypeId' },
                        { name: 'BookmarkSectionId' },
                        { name: 'Created' },
                        { name: 'CreatedBy' },
                        { name: 'Updated' },
                        { name: 'UpdatedBY' }

                      ],
                      id: 'BookMarkId',
                      updaterow: function (rowid, rowdata, commit) {
                          var projectId = $("#BookmarkProjectId").val()
                          var Bookmark = new BookmarkModel(rowdata.BookmarkId, rowdata.BookmarkAnswer, projectId, rowdata.BookmarkDescription, null, null, null, null, null, null, null, null, null);
                          var Data = JSON.stringify(Bookmark);

                          $.ajax({
                              url: getBaseURL() + deploymentDomainSubfix + "/api/ApiFillBookmarks/" + rowdata.BookmarkId,
                              data: Data,
                              type: 'PUT',
                              async: false,
                              contentType: 'application/json; charset=utf-8',
                              dataType: 'json',
                              success: function (data) {
                                  $("#Brandjqxgrid").jqxGrid('updatebounddata');
                                  alert("Answer Saved");
                                  commit(true);
                              },
                          });
                      }
                  };

        var dataAdapter = new $.jqx.dataAdapter(bookMarkDataSource, {
            contentType: 'application/json; charset=utf-8',
            formatData: function (data) {

            }
        });



        $("#Brandjqxgrid").jqxGrid(
       {
           theme: gridTheme,
           width: '99%',
           altrows: true,
           editable: false,
           sortable: true,
           columnsreorder: true,
           autoheight: true,
           selectionmode: 'singlecell',
           columnsresize: true,
           source: dataAdapter,
           editable: true,
           autorowheight: true,
           rowsheight: rowHeight,
           groupable: true,
           groupsrenderer: groupsrenderer,
           groups: ['BookmarklongDescription'],
           columns: [
            { text: 'Bookmark ID', datafield: 'BookmarkId', editable: false, hidden: true },
                             { text: 'Word Doc Bookmark ', datafield: 'BookmarkDescription', editable: false, width: "30%", hidden: true },
                              { text: 'BookmarklongDescription', datafield: 'BookmarklongDescription', editable: false, hidden: true },
                              { text: 'BookmarkProjectId', datafield: 'BookmarkProjectId', editable: false, hidden: true },
                              { text: '', datafield: 'BookmarkQuestion', editable: false, width: "25%" },
                              { text: '', datafield: 'BookmarkAnswer', editable: true, width: "74%", cellclassname: cellclass, cellsrenderer: renderer },
                              { text: 'BookmarkSectionId', datafield: 'BookmarkSectionId', editable: false, hidden: true },
                              { text: 'BookmarkUserId', datafield: 'BookmarkUserId', editable: false, hidden: true },
                             { text: 'Bookmark Answer ', datafield: 'BookmarkAnswerid', hidden: true },
                             { text: 'Bookmark Answer Type', datafield: 'BookmarkAnswerTypeId', hidden: true },
                             { text: 'Created', datafield: 'Created', editable: false, hidden: true },
                             { text: 'CreatedBy', datafield: 'CreatedBy', editable: false, hidden: true },
                             { text: 'Updated', datafield: 'Updated', editable: false, hidden: true },
                             { text: 'UpdatedBY', datafield: 'UpdatedBY', editable: false, hidden: true }

           ]
       });

    };

    //************************************************************************************POP UP Window Fucntions CRUD
    // general Info generic grid event bigin edit
    $("#jqxgrid").on('cellbeginedit', function (event) {
        $("#otherBoxInput").val('');
        $("#otherBoxInput").css('display', 'none');
        $("#otherBoxInputButton").css('display', 'none');
        var column = args.datafield;
        var row = args.rowindex;
        var value = args.value;
        // condition follows
        var data = $('#jqxgrid').jqxGrid('getrowdata', row);
        if (data.BookmarkDescription != "Client_Name_Project_Lead_Title") {
            $("#jqxgrid").jqxGrid('endcelledit', row, column, true);
        } else {
            $('#myModalLabel').text("Client Title");
            $('#myModal').modal('show');
            $("#edit1").css('display', 'block');
            if (value == null) { document.getElementById("edit1").value = ""; } else { document.getElementById("edit1").value = value; };

            $("#formulationDropdownlist").css('display', 'none');
            $("#RouteOfAdminitrationDropdownlist").css('display', 'none');
            $("#jqxgrid").jqxGrid('endrowedit', row, true);
            $('#jqxgrid').jqxGrid('unselectrow', row);
            $("#jqxgrid").jqxGrid('endcelledit', row, column, true);
            $("#myModal").attr('mycustomrowid', '123456789');
        }
    });

    // Branded generic grid event bigin edit
    $("#Brandjqxgrid").on('cellbeginedit', function (event) {
        var column = args.datafield;
        var row = args.rowindex;
        var value = args.value;
        rowIdForDropdownOnchangeEvent = row
        valueForDropdownOnchangeEvent = value

        $("#listAlert").css('display', 'none');

        var text = $('#Brandjqxgrid').jqxGrid('getcelltext', row, "BookmarkQuestion");
        $("#Brandjqxgrid").jqxGrid('endcelledit', row, column, true);
        if (text == null) { text = "" }
        $('#myModalLabel').text(text);
        $("#tesxtboxinput").css('display', 'none');
        $("#edit1").css('display', 'none');
        $('#myModal').modal('show');
        $("#otherBoxInput").val('');
        $("#otherBoxInput").css('display', 'none');
        $("#otherBoxInputButton").css('display', 'none');

        if (row == 6) {
            $("#edit1").css('display', 'none');
            $("#formulationDropdownlist").css('display', 'block');
            $("#RouteOfAdminitrationDropdownlist").css('display', 'none');

            projectSource = ["", "solution for injection", "suspension for injection ", "oral tablets", "oral capsules", "oral solution ", "oral suspension", "oral syrup ",
                        "metered dose inhaler ", "powder for oral inhalation", "solution for nebulizer", "nasal ointment ", "nasal spray ", "nasal drops", "topical cream",
                        "topical gel", "topical lotion", "opical ointment", "ophthalmic ointment", "ophthalmic solution", "otic ointment", "otic solution", "chewable oral tablets",
                        "controlled release oral tablets", "delayed release oral capsules", "delayed release oral tablet", "disintegrating oral tablets", "effervescent oral tablets",
                        "enteric coated oral capsules", "enteric coated oral tablets", "extended release oral capsules", "extended release oral tablets", "oral concentration",
                        "oral drops", "oral elixir", "oral emulsion", "oral gel", "oral gum", "oral inhaler", "oral liquid", "oral paste", "oral perles", "oral rinse/wash", "oral spray",
                        "oral wafers", "sustained release oral tablets", "prefilled syringe", "reconstitutable powder for injection", "solution for injection", "suspension for injection",
                        "topical shampoo", "topical powder", "topical solution", "topical spray", "topical tincture", "transdermal patch", "enema", "intraurethral pellet",
                        "perineal wash", "rectal suppositories", "vaginal  cream", "vaginal douche ", "vaginal gel", "vaginal insert", "vaginal suppositories", "vaginal tablets",
                        "adhesive bandage", "film", "gas", "implant ", "intrauterine device", "reagent tablets", "reagent test strips ", "swabs", "test kit", "Other"
            ];
            projectSource.sort();
            $("#formulationDropdownlist").jqxDropDownList({ source: projectSource, width: '250px' });

        }
        else if (row == 7) {
            $("#edit1").css('display', 'none');
            $("#formulationDropdownlist").css('display', 'none');
            $("#RouteOfAdminitrationDropdownlist").css('display', 'block');

            projectSource = ["", "Other", "Buccal", "Intravenous(IV)", "Intramuscular(IM) ",
          "Inhalation", "Nasal", " Ophthalmic ", "Ophthalmic", "Oral", "Otic",
            "Rectal", " Sublingual ", "Subcutaneous(SQ, SC)", "Topical", "Transdermal", "Vaginal"
            ];

            $("#RouteOfAdminitrationDropdownlist").jqxDropDownList({ source: projectSource, width: '250px' });

        }
        else if (row == 15 || row == 16 || row == 17 || row == 18 || row == 19 || row == 20) {

            $("#edit1").css('display', 'block');
            $("#listAlert").css('display', 'block');
            if (value == null) { document.getElementById("edit1").value = ""; } else { document.getElementById("edit1").value = value; };
            $("#formulationDropdownlist").css('display', 'none');
            $("#RouteOfAdminitrationDropdownlist").css('display', 'none');
            $("#myModal").attr('mycustomrowid', row);

        }
        else if (row != null) {
            $("#edit1").css('display', 'block');
            if (value == null) { document.getElementById("edit1").value = ""; } else { document.getElementById("edit1").value = value; };
            $("#formulationDropdownlist").css('display', 'none');
            $("#RouteOfAdminitrationDropdownlist").css('display', 'none');
            $("#myModal").attr('mycustomrowid', row);

        };
    });

    //Formulation Dropdown list
    $('#formulationDropdownlist').on('change', function (event) {
        var args = event.args;
        if (args) {
            var index = args.index;
            var item = args.item;
            var label = item.label;
            var value = item.value;
            if (label == "Other") {

                $("#otherBoxInput").css('display', 'block');
                $("#otherBoxInput").val(valueForDropdownOnchangeEvent);
                $("#otherBoxInputButton").css('display', 'block');

            } else {
                $("#otherBoxInput").val('');
                $("#otherBoxInput").css('display', 'none');
                $("#otherBoxInputButton").css('display', 'none');
                $("#Brandjqxgrid").jqxGrid('setcellvalue', rowIdForDropdownOnchangeEvent, "BookmarkAnswer", label);
                $("#Brandjqxgrid").jqxGrid('updaterow', index);
            };

        };
    });

    // Route Of Adminitration Dropdown list
    $('#RouteOfAdminitrationDropdownlist').on('change', function (event) {
        var args = event.args;
        if (args) {
            var index = args.index;
            var item = args.item;
            var label = item.label;
            var value = item.value;
            var row = $("#myModal").attr('mycustomrowid');
            if (label == "Other") {
                $("#otherBoxInput").css('display', 'block');
                $("#otherBoxInput").val(valueForDropdownOnchangeEvent);
                $("#otherBoxInputButton").css('display', 'block');

            } else {
                $("#otherBoxInput").val('');
                $("#otherBoxInput").css('display', 'none');
                $("#otherBoxInputButton").css('display', 'none');
                $("#Brandjqxgrid").jqxGrid('setcellvalue', rowIdForDropdownOnchangeEvent, "BookmarkAnswer", label);
                $("#Brandjqxgrid").jqxGrid('updaterow', index);
            };

        };
    });

    // Other box input click event listener
    $("#otherBoxInputButton").on('click', function () {
        var texboxinput = $("#otherBoxInput").val();
        $("#Brandjqxgrid").jqxGrid('setcellvalue', rowIdForDropdownOnchangeEvent, "BookmarkAnswer", texboxinput);
        $("#otherBoxInput").val('');
        $("#otherBoxInput").css('display', 'none');
        $("#otherBoxInputButton").css('display', 'none');
        $("#Brandjqxgrid").jqxGrid('updaterow', row);
    });

    //************************************************************************************POP

    function GeneratePPRDocument() {


        var projectId = $("#BookmarkProjectId").val();
        var projectIds = $("#currentProject").val();

        var data = new PPRQueueModel(0, projectId, ' ', 'pending', new Date(), ' ', null, ' ');
        var Data = JSON.stringify(data);
        $.ajax({
            url: getBaseURL() + deploymentDomainSubfix + "/api/ApiPPRQueue",
            data: Data,
            type: 'POST',
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                $('#progreesbarModalLabel').text("Document creation In Progress...");
                $('#progreesbarModal').modal('show');

            },
        });
        window.location.replace(getBaseURL() + "/PrintedPPRDocs");
    };

</script>

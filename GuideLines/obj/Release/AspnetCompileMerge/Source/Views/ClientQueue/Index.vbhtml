@ModelType IEnumerable(Of GuideLines.ClientQueue)

@Code
    ViewData("Title") = "PPR Users Log"
End Code

<h2>PPR Users Log</h2>
<script type="text/javascript" src="~/Scripts/jqwidgets/grouping.js"></script>
<div id="clientQueueGrid"></div>

<script type="text/javascript"> 
    var gridTheme = 'bootstrap';
    var projectName = "";
    var projectId = "";
    var rowHeight = 25;
  var deploymentDomainSubfix = "pprwebsite/";
     // var deploymentDomainSubfix = "";
 
    var clientQueueSource = {
        type: "GET",
        datatype: "json",
        async: false,
        cache: true,
        url: getBaseURL() + deploymentDomainSubfix + "api/ApiClientQueue",
        datafields: [
                    { name: 'ClientName', type: 'string' },
                    { name: 'ProjectName', type: 'string' },
                    { name: 'TimeStamp', type: 'string' },
                    { name: 'Browser', type: 'string' },
                    { name: 'Created', type: 'date' },
                    { name: 'CreatedBy', type: 'string' },
                    { name: 'Updated', type: 'date' },
                    { name: 'UpdatedBy', type: 'string' }
        ]
    };

    var clientQueueDataAdapter = new $.jqx.dataAdapter(clientQueueSource, {

    });
    var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
        if (columnfield == "ProjectName") {
            return "<a target ='_new' href='https://tools.brandinstitute.com/pprwebsite?projectName=" + value + "'>" + value + "</a>";
        };
    }


    $("#clientQueueGrid").jqxGrid(
   {
       theme: gridTheme,
       width: '110%',
       altrows: true,
       groupable: true,
       pagesize: 50,
       showfilterrow: true,
       filterable: true,
       sortable: true,
       columnsreorder: true,
       autoheight: true,
       selectionmode: 'singlerow',
       columnsresize: true,
       source: clientQueueDataAdapter,
       autorowheight: true,
       rowsheight: rowHeight,
       height: '30px',
       pageable: true,
       ready: function () {
//           $("#clientQueueGrid").jqxGrid('sortby', 'ProjectName', 'asc');

       },
       columns: [
                         { text: 'ClientName', datafield: 'ClientName', editable: false, width: 120, filtertype: 'textbox', filtercondition: 'starts_with', },
                         { text: 'ProjectName', datafield: 'ProjectName', editable: false, width: 180, cellsrenderer: cellsrenderer, filtertype: 'textbox', filtercondition: 'starts_with', },
                         { text: 'TimeStamp', datafield: 'TimeStamp', editable: false, hidden: true },
                         { text: 'Browser', datafield: 'Browser', editable: false, hidden: true },
                         { text: 'Created', datafield: 'Created', editable: false, width: 170, cellsformat: " MMMM dd, yyyy h:mm tt", filtertype: 'date' },
                         { text: 'CreatedBy', datafield: 'CreatedBy', editable: false, filtertype: 'textbox', filtercondition: 'starts_with', },
                         { text: 'Updated', datafield: 'Updated', editable: false, width: 170, cellsformat: "MMMM dd, yyyy h:mm tt", filtertype: 'date' },
                         { text: 'UpdatedBy', datafield: 'UpdatedBy', editable: false, filtertype: 'textbox', filtercondition: 'starts_with', }
       ]
   });

</script>


//Global vars 

//var deploymentDomainSubfix = "pprwebsite/";
//var deploymentDomainSubfix = "PPRTestingSite/";
var deploymentDomainSubfix = "";

$(window).load(function () {

    $('#content').css('display', 'none');

    var opts = {
        lines: 13 // The number of lines to draw
        ,
        length: 28 // The length of each line
        ,
        width: 14 // The line thickness
        ,
        radius: 42 // The radius of the inner circle
        ,
        scale: 1 // Scales overall size of the spinner
        ,
        corners: 1 // Corner roundness (0..1)
        ,
        color: '#000' // #rgb or #rrggbb or array of colors
        ,
        opacity: 0.25 // Opacity of the lines
        ,
        rotate: 0 // The rotation offset
        ,
        direction: 1 // 1: clockwise, -1: counterclockwise
        ,
        speed: 1 // Rounds per second
        ,
        trail: 60 // Afterglow percentage
        ,
        fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        ,
        zIndex: 2e9 // The z-index (defaults to 2000000000)
        ,
        className: 'spinner' // The CSS class to assign to the spinner
        ,
        top: '50%' // Top position relative to parent
        ,
        left: '50%' // Left position relative to parent
        ,
        shadow: false // Whether to render a shadow
        ,
        hwaccel: false // Whether to use hardware acceleration
        ,
        position: 'absolute' // Element positioning
    }
    //    var target = document.getElementById('foo');
    //    var spinner = new Spinner(opts).spin(target);   
    //    target.parentNode.removeChild(target);
});
var projectName = "";
var projectId = "";
var gridTheme = 'bootstrap';
var rowHeight = 35;
var clientdId = 0;
var clientdEmail = "";
var idleTime = 0;
var checkIdleTimeAgain = "";
var OldValue = "";
var UserTeamOffice = "";
var projectSelectOffice = "";
var beingConsiderByCounter = 0;
var oldValue = "";
var response = new $.jqx.response();
var projectNameFromQueryString = "";
var isProjectSaved = "";

// marketing and research label
$('#MarketingandSafetyResearchLabel').dblclick(function () {
    $('#MarketingandSafetyResearchLabel').hide();
    $('#MarketingandSafetyResearchLabelinput').val($('#MarketingandSafetyResearchLabel').text());
    $('#MarketingandSafetyResearchLabelGroup').show();
    $('#MarketingandSafetyResearchLabelinput').focus();
});

$('#MarketingandSafetyResearchLabelinput').focusout(function () {
    if ($('#MarketingandSafetyResearchLabelinput').val() != "" && $('#MarketingandSafetyResearchLabelinput').val() != null) {
        $('#MarketingandSafetyResearchLabel').text($('#MarketingandSafetyResearchLabelinput').val());
        $('#MarketingandSafetyResearchLabelGroup').find(".form-control").val($('#MarketingandSafetyResearchLabel').text());
    };

    $('#MarketingandSafetyResearchLabel').show();
    $('#MarketingandSafetyResearchLabelGroup').hide();
    autoSavedata();
});

// project name label
$('#currentProject').dblclick(function () {
    $('#currentProject').hide();
    $('#currentProjectinput').val($('#currentProject').text());
    $('#currentProjectinput').show().focus();
});

$('#currentProjectinput').focusout(function () {
    if ($('#currentProjectinput').val() != "" && $('#currentProjectinput').val() != null) {
        $('#currentProject').text($('#currentProjectinput').val());
        $('#Projectinput').val($('#currentProject').text());
    };

    $('#currentProject').show();
    $('#currentProjectinput').hide();
    autoSavedata();
});

// sales date input calendar
$('#salesDate').dblclick(function () {
    $('#salesDate').hide();
    $('#currentDateinput').show();
    $('#currentDateinput').jqxDateTimeInput('open');
});

$('#currentDateinput').on('close', function () {
    var text = $('#currentDateinput').jqxDateTimeInput('getText');
    $('#salesDate').text($('#currentDateinput').val());
    $('#salesDateGroup').find(".form-control").val(text);
    $('#salesDate').show();
    $('#currentDateinput').hide();
    autoSavedata();
});

$('#advanceSearchGrid').on('rowdoubleclick', function () {
    $('#content').css('display', 'block');
    var selectedrowindex = $("#advanceSearchGrid").jqxGrid('getselectedrowindex');
    var data = $('#advanceSearchGrid').jqxGrid('getrowdata', selectedrowindex);
    projectSelectOffice = data.Office;
    loadProjectInformation(null, data.ProjectName, data.ppr_ProjectListId);
    $("#advanceSearchDownbutton").jqxDropDownButton("close");
});

$('#advanceSearchGrid').on('rowclick', function (event) {
    $(".higlight1").css({
        'color': 'white',
        'background-color': '#0094F0'
    });
});

$('#advanceSearchDownbutton').on('open', function () {
    $(".higlight1").css({
        'color': 'black',
        'background-color': '#E0E9F5'
    });
    var width = ($(window).width()) / 2;
    $("#dropDownButtonPopupadvanceSearchDownbutton").css("left", (width - 500));
    $("#statusbaradvanceSearchGrid").css('display', 'block');
});

// Load chosen project 
var loadAdvanceSearchProjects = function (projectDataAdapter) {
    $('#content').css('display', 'block');
    var updateProjects = getBaseURL() + deploymentDomainSubfix + "api/projectlistupdates/" + $("#MyUsername").val();
    $.ajax({
        url: updateProjects,
        type: 'GET',
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (stringinfo) {

            var clientInfo = [];
            clientInfo = stringinfo.split("|");
            if ($.inArray("Divisional Presidents", clientInfo) !== -1) {
                UserTeamOffice = "Divisional Presidents";
            } else if ($.inArray("PPR Review Team", clientInfo) !== -1) {
                UserTeamOffice = "Divisional Presidents";
            } else if ($.inArray("NY-Team1", clientInfo) !== -1) {
                UserTeamOffice = "New York 1";
            } else if ($.inArray("NY-Team1", clientInfo) !== -1) {
                UserTeamOffice = "New York 1";
            } else if ($.inArray("NY-Team2", clientInfo) !== -1) {
                UserTeamOffice = "New York 2";
            } else if ($.inArray("NY-Team3", clientInfo) !== -1) {
                UserTeamOffice = "New York 3";
            } else if ($.inArray("Chicago-Team1", clientInfo) !== -1) {
                UserTeamOffice = "Chicago 1";
            } else if ($.inArray("Chicago-Team2", clientInfo) !== -1) {
                UserTeamOffice = "Chicago 2";
            } else if ($.inArray("Boston Group", clientInfo) !== -1) {
                UserTeamOffice = "Boston";
            } else if ($.inArray("Dallas Group", clientInfo) !== -1) {
                UserTeamOffice = "Dallas";
            } else if ($.inArray("Germany Group", clientInfo) !== -1) {
                UserTeamOffice = "Frankfurt";
            } else if ($.inArray("London Group", clientInfo) !== -1) {
                UserTeamOffice = "London";
            } else if ($.inArray("Los Angeles Group", clientInfo) !== -1) {
                UserTeamOffice = "Los Angeles";
            } else if ($.inArray("Seattle Group", clientInfo) !== -1) {
                UserTeamOffice = "Seattle";
            } else if ($.inArray("Miami Group", clientInfo) !== -1) {
                UserTeamOffice = "Miami";
            } else if ($.inArray("Raleigh Group", clientInfo) !== -1) {
                UserTeamOffice = "Raleigh";
            } else if ($.inArray("San Francisco Group", clientInfo) !== -1) {
                UserTeamOffice = "San Francisco";
            } else if ($.inArray("Basel Group", clientInfo) !== -1) {
                UserTeamOffice = "Switzerland 1";
            } else if ($.inArray("Japan Group", clientInfo) !== -1) {
                UserTeamOffice = "Tokyo";
            } else if ($.inArray("Canada Group", clientInfo) !== -1) {
                UserTeamOffice = "Toronto";
            } else if ($.inArray("Seoul Group", clientInfo) !== -1) {
                UserTeamOffice = "Seoul";
            } else if ($.inArray("IS", clientInfo) !== -1) {
                UserTeamOffice = "Divisional Presidents";
            } else if ($.inArray("MR Team 2", clientInfo) !== -1) {
                UserTeamOffice = "Miami";
            } else if ($.inArray("Market Research", clientInfo) !== -1) {
                UserTeamOffice = "Divisional Presidents";
            } else if ($.inArray("Creative", clientInfo) !== -1) {
                UserTeamOffice = "Divisional Presidents";
            }
            else {
                alert("WARNING:  You may have read access only to the projects. Please Contact IS Team for support if you need to edit a project");
            }
            
        }
    });
    var windowHalf = ($(window).width() - 960) / 2;
    $(".jqx-rc-all").css({
        'left': windowHalf + 'px',
        'top': '0'
    });

    $("#advanceSearchGrid").jqxGrid(
    {
        width: 1000,
        source: projectDataAdapter,
        showfilterrow: true,
        filterable: true,
        pageable: true,
        autoheight: true,
        pagesize: 20,
        groupable: true,
        theme: 'energyblue',
        columnsresize: true,
        showstatusbar: true,
        sortable: true,
        renderstatusbar: function (statusbar) {
            // appends buttons to the status bar.
            var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
            var reloadButton = $("<div style='float: left; margin-left: 5px;'><span class='glyphicon glyphicon-refresh'></span></div>");
            var searchButton = $("<div style='float: left; margin-left: 5px; cursor:pointer; background: #E0E9F5; 'class='btn btn-success higlight1'>Search Selected Project</div>");
            container.append(reloadButton);
            container.append(searchButton);
            statusbar.append(container);
            reloadButton.jqxButton({ width: 20, height: 20 });
            searchButton.jqxButton({ width: 165, height: 20 });

            // reload grid data.
            reloadButton.click(function () {
                $("#advanceSearchGrid").jqxGrid({ source: projectDataAdapter });
            });
            // search for a record.
            searchButton.click(function () {
                $('#content').css('display', 'block');
                var selectedrowindex = $("#advanceSearchGrid").jqxGrid('getselectedrowindex');
                var data = $('#advanceSearchGrid').jqxGrid('getrowdata', selectedrowindex);
                projectSelectOffice = data.Office;
                loadProjectInformation(null, data.ProjectName, data.ppr_ProjectListId);
                $("#advanceSearchDownbutton").jqxDropDownButton("close");
            });
        }
        , ready: function () {
            // filtering by project name if one in query string 
            if (projectNameFromQueryString.length > 0) {
                var filtergroup = new $.jqx.filter();
                var filterOrOperator = 1;
                var filtervalue = projectNameFromQueryString;
                var filtercondition = 'STARTS_WITH';
                var filtertype = 'stringfilter';
                var filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
                filtergroup.addfilter(filterOrOperator, filter);
                $("#advanceSearchGrid").jqxGrid('addfilter', "ProjectName", filtergroup, true);
                $("#advanceSearchGrid").jqxGrid('applyfilters');
            };
            // filtering by BI Teams
           // TEST USER TYPE UserTeamOffice = 'Divisional Presidents';
            if (UserTeamOffice != "") {
                filtergroup = new $.jqx.filter();
                filterOrOperator = 1;
                if (UserTeamOffice != "" && UserTeamOffice != "Divisional Presidents") {
                    filtervalue = UserTeamOffice;
                    filtercondition = 'STARTS_WITH';
                    filtertype = 'stringfilter';
                    filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
                    filtergroup.addfilter(filterOrOperator, filter);
                    $("#advanceSearchGrid").jqxGrid('addfilter', "Office", filtergroup, true);
                };

            };


            $("#advanceSearchGrid").jqxGrid('sortby', 'update', 'desc');
        },
        columns: [
          { text: 'ProjectId', datafield: 'ppr_ProjectListId', hidden: true },
          { text: 'Project ', columntype: 'textbox', filtertype: 'textbox', filtercondition: 'starts_with', datafield: 'ProjectName' },
          { text: 'Splits ', columntype: 'textbox', filtertype: 'textbox', filtercondition: 'starts_with', datafield: 'Split', hidden: true },
          { text: 'Client ', columntype: 'textbox', filtertype: 'textbox', filtercondition: 'starts_with', datafield: 'ClientName', width: 250 },
          { text: 'Lead Director ', columntype: 'textbox', filtertype: 'textbox', filtercondition: 'starts_with', datafield: 'LeadDirectorName' },
          { text: 'Brand Manager ', columntype: 'textbox', filtertype: 'textbox', filtercondition: 'starts_with', datafield: 'BrandManager', width: 150 },
          { text: 'Office', filtertype: 'checkedlist', datafield: 'Office' },
          { text: 'Sales Date', datafield: 'SalesDate', filtertype: 'date', width: 100, cellsalign: 'right', cellsformat: 'd', hidden: true },
          { text: 'Amount', datafield: 'ProjectAmount', filtertype: 'number', cellsalign: 'right', width: 100, hidden: true },
          { text: 'Updated', datafield: 'Created', filtertype: 'date', cellsalign: 'right', cellsformat: 'd', width: 100, hidden: false }
        ]
    });

    $("#statusbaradvanceSearchGrid").css('display', 'none');
    $("#advanceSearchDownbutton").jqxDropDownButton('open');

};

var loadProjectInformation = function (item, projectnameparam, projectidparam) {

    $("#salesDate").text("Month X, 2014");
    $("#currentProject").text("Project");
    $("#MarketingandSafetyResearchLabel").text(" Marketing and Safety Research");


    $.loader({
        className: "blue-with-image",
        content: ''
    });

    $("#PrimaryMarketsInput").val("");
    $("#SecondaryMarketInput").val("");
    $(".versioncontrol").remove();

    var value = "";
    var label = "";
    if (item != null) {

        label = item.label;
        value = item.value;

    }
    else {
        label = projectnameparam;
        value = projectidparam;
    };

    $("#currentProject").text(label);
    $("#currentProject").val(value);
    $("#projectNameDisplay").text(label);
    $("#infoPanel").css('display', 'block');
    var projectNameContainer = $("#projectNameDisplay").text(label);
    $("#projectNameDisplay").parent().parent().css("margin-left", -1 * projectNameContainer.width() - 15);
    projectName = label;
    projectId = value;


    // enables the buttons and the tables input after chosing a project
    ;
    $("#selectQuestions").css('display', 'none');
    $("#sendQuestions").css('display', 'none');
    $("#lockbtn").css("display", "none");
    $("#deleterowbutton").jqxButton({ disabled: false });
    $("#addrowbutton").jqxButton({ disabled: false });
    $("#selectQuestions").removeAttr("disabled", "disabled");
    $("#ProductAttributesTableGroup .bullettTextarea").removeAttr("disabled", "disabled");
    $("#CreativeDirectionTableGroup .bullettTextarea").removeAttr("disabled", "disabled");
    $("#CompetitiveLandscapegrid").jqxGrid({ disabled: false });
    $("#savedataBtn").removeAttr("disabled", "disabled");
    $("#printBtn").removeAttr("disabled", "disabled");
    loadCompetitiveLandscapeData(projectName, projectId);

    var urlForFecthingPpr = getBaseURL() + deploymentDomainSubfix + "api/ApiPPRTemplateForm/" + value;
    $.ajax({
        url: urlForFecthingPpr,
        type: 'GET',
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (data) {

            $('.popover').remove();
            $('.glyphicon-tags').remove();
            $(document).find('.form-control').val("");
            var i;
            if (data.length > 0) {
                if (typeof data[0].TemplateType != undefined && data[0].TemplateType != "" && data[0].TemplateType != null) {
                    templateChoice(data[0].TemplateType);
                    var projectTemplateContainer = $("#templateTypeDisplay").text(data[0].TemplateType);
                    $("#templateTypeDisplay").parent().parent().css("margin-left", -1 * projectTemplateContainer.width() - 15);
                };
                $("#toggleComments").removeAttr('disabled', 'disabled');
                $("#toggleversionControlIn").removeAttr('disabled', 'disabled');
                var listFileds2 = $.merge([], listFileds);
                removeItem4Array(listFileds2, 'ProductAttributesTableGroup');
                removeItem4Array(listFileds2, 'CreativeDirectionTableGroup');
                for (i = 0; i < data.length; i++) {
                    var inputGroup = listFileds2[i];
                    if (inputGroup !== "ProductAttributesTableGroup" && inputGroup != "CreativeDirectionTableGroup") {
                        $('#' + data[i].InputGroup).find('.form-control').val(data[i].Answer).trigger('autosize.resize');
                        if (data[i].VersionControlString != "" && data[i].VersionControlString != null) {
                            $('#' + data[i].InputGroup).find(':checkbox').after("<div class='versioncontrol'>" + data[i].VersionControlString + "</div></br>");
                        };
                        if (data[i].Comment != "" && data[i].Comment != null) {

                            $('#' + data[i].InputGroup).find(':checkbox').before(' <span style="float:right;font-size-adjust:0.6; position: relative; cursor:pointer; top: -35px; right: -14px; color:#004684" ' +
                                'class="glyphicon glyphicon-tags hidden-print"></span>   <div class="clear"></div>');
                            $('#' + data[i].InputGroup).find('.glyphicon').popover({
                                title: data[i].UpdatedBy,
                                content: data[i].Comment,
                                placement: 'rigth',
                            });
                        };
                    };
                };
            } else {
                $.growl.warning({ title: "NEW PPR  ", message: "RX Template Selected by default; please change it if need it and save" });
                templateChoice('RX');
            };


            $("#PrimaryMarketsGroup").find(".glyphicon-tags").css('top', ' -67px');
            $("#SecondaryMarketsGroup").find(".glyphicon-tags").css('top', ' -67px');
            $("#formulationDropdownlistGroup").find(".glyphicon-tags").css('top', ' -67px');
            $("#RouteOfAdminitrationDropdownlistGroup").find(".glyphicon-tags").css('top', ' -67px');

            $('#PrimaryMarketsGroup').find(".glyphicon-tags").css('right', ' -32px');
            $('#SecondaryMarketsGroup').find(".glyphicon-tags").css('right', ' -32px');
            $('#formulationDropdownlistGroup').find(".glyphicon-tags").css('right', ' -32px');
            $('#RouteOfAdminitrationDropdownlistGroup').find(".glyphicon-tags").css('right', ' -32px');

            $("#countriesList").jqxComboBox('uncheckAll');
            $("#countriesList2").jqxComboBox('uncheckAll');
            var primaryMarketsValuesString = $("#PrimaryMarketsInput").val();
            var secondaryMarketsValuesString = $("#SecondaryMarketInput").val();
            var primaryMarketsValues = primaryMarketsValuesString.split(",");
            var secondaryMarketsValues = secondaryMarketsValuesString.split(",");
            for (i = 0; i < primaryMarketsValues.length; i++) {
                var item1 = $("#countriesList").jqxComboBox('getItemByValue', primaryMarketsValues[i]);
                $("#countriesList").jqxComboBox('checkItem', item1);
            };
            for (i = 0; i < secondaryMarketsValues.length; i++) {
                var items = $("#countriesList2").jqxComboBox('getItemByValue', secondaryMarketsValues[i]);
                $("#countriesList2").jqxComboBox('checkItem', items);
            };

            //Locking system begin   
            if (data.length > 0) {
                //sendUpdateTimeSignal();
            };
        }

    });


    if ($("#salesDateinput").val() != "" && $("#salesDateinput").val() != null) {
        $("#salesDate").text($("#salesDateinput").val());
    } else {
        var getDate = $('#currentDateinput').jqxDateTimeInput('getText');
        $("#salesDate").text(getDate);
    };

    if ($("#Projectinput").val() != "" && $("#Projectinput").val() != null) {
        $("#currentProject").text($("#Projectinput").val());
    };
    if ($("#MarketingandSafetyResearchLabelinput").val() != "" && $("#MarketingandSafetyResearchLabelinput").val() != null) {
        $("#MarketingandSafetyResearchLabel").text($("#MarketingandSafetyResearchLabelinput").val());
    };
    fadeInVersionControl();
    loadFeedPageGrid(label);
};

function loadFeedPageGrid(projectName) {

    var url = getBaseURL() + deploymentDomainSubfix + "api/ApiBookmark/" + projectName;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            var mydata = data;

            for (var i = 0; i < mydata.length; i++) {
                var ans = mydata[i].BookmarkAnswer;

                if (mydata[i].BookmarkDescription == "currentClientname") {
                    $("#" + mydata[i].BookmarkDescription).text(ans);
                }
                else if (mydata[i].BookmarkDescription == "salesDate") {

                    //var splitDate = ans.split("/");
                    //var newDate = stringToMonthNumber(splitDate[0]);
                    //splitDate[0] = newDate;
                    //var newdateJoin = splitDate.join('-');
                    //$("#" + mydata[i].BookmarkDescription).text(newdateJoin);
                }
                else if (mydata[i].BookmarkDescription == "Naming_Scope") {

                    if ($('#templateType').text() == "") {
                        $("#" + mydata[i].BookmarkDescription).val(ans);
                        if (ans == "Pharmaceutical") {
                            templateChoice('RX');
                            $("#templateTypeDisplay").text('RX');
                        }
                        else if (ans == "Medical Device") {
                            templateChoice('MEDICAL DEVICE');
                            $("#templateTypeDisplay").text('MEDICAL DEVICE');
                        } else if (ans == "Nonproprietary") {
                            templateChoice('NONPROP');
                            $("#templateTypeDisplay").text('NONPROP');
                        };
                    };
                }
                else {
                    var value = $("#" + mydata[i].BookmarkDescription).val();
                    if (value == "" || value == null) {
                        $("#" + mydata[i].BookmarkDescription).val(ans);
                    };
                }
            };
        },
    });
    $('#salesDateGroup').css("display", "none");
    $('#ProjectGroup').css("display", "none");
    $('#MarketingandSafetyResearchLabelGroup').css("display", "none");
    // READ AND WRITE PERMISSION BY OFFICE TYPE

    var offices = projectSelectOffice.split(',');
    for (var i = 0 ; i < offices.length; i++) {
        if (offices[i].trim() === UserTeamOffice || UserTeamOffice === "Divisional Presidents") {
            $(document).find(".form-control").removeAttr('disabled', 'disabled');
            $("#CompetitiveLandscapegrid").jqxGrid({ disabled: false });
            $("#formulationDropdownlist").jqxComboBox({ disabled: false });
            $("#RouteOfAdminitrationDropdownlist").jqxComboBox({ disabled: false });
            $("#countriesList").jqxComboBox({ disabled: false });
            $("#countriesList2").jqxComboBox({ disabled: false });
            break;
        } else {
            $(document).find(".form-control").attr('disabled', 'disabled');
            $("#CompetitiveLandscapegrid").jqxGrid({ disabled: true });
            $("#formulationDropdownlist").jqxComboBox({ disabled: true });
            $("#RouteOfAdminitrationDropdownlist").jqxComboBox({ disabled: true });
            $("#countriesList").jqxComboBox({ disabled: true });
            $("#countriesList2").jqxComboBox({ disabled: true });

        }
     
    }
    $.loader('close');
};


// idle timer systmem 
var sendUpdateTime = setInterval(sendUpdateTimeSignal, 60000);
var setIdleTimer = setInterval(setIdleTime, 600000);
var checkIdleTimer = setInterval(checkIdleTime, 610000);

var reloadpage = function () {
    $(document).find(".form-control").val('');
    $(document).find("#searchproject").removeAttr('disabled', 'disabled');
    window.location.reload();
};

var stayInSession = function () {
    idleTime = 0;
    clearInterval(checkIdleTimer);
    clearInterval(setIdleTimer);
    clearInterval(checkIdleTimeAgain);
    checkIdleTimer = setInterval(checkIdleTime, 610000);
    setIdleTimer = setInterval(setIdleTime, 600000);
    location.replace(getBaseURL() + deploymentDomainSubfix);
};

var reloadpage = function () {
    location.replace(getBaseURL() + deploymentDomainSubfix);
};

function goTothanksyouPage() {
    location.replace(getBaseURL() + deploymentDomainSubfix);
};

function setIdleTime() {
    idleTime = 1;
};

$(function () {
    // ReSharper disable InconsistentNaming  
    response.pointerMove($(document), function () {
        idleTime = 0;
        clearInterval(checkIdleTimer);
        clearInterval(setIdleTimer);
        checkIdleTimer = setInterval(checkIdleTime, 610000);
        setIdleTimer = setInterval(setIdleTime, 600000);
    });
});

function checkIdleTime() {

    if (idleTime === 1) {
        $('#idleAlert').modal('show');
        // 30 seconds before the idle box has no response 
        checkIdleTimeAgain = setInterval(checkIdleTimerAgain, 30000);
    };
};

var timerIncrement = function () {
    idleTime = 1;
};

function checkIdleTimerAgain() {
    if (idleTime === 1) {
        if (projectName != "" || projectName != null) {
            autoSavedata();
        };
        location.replace(getBaseURL() + deploymentDomainSubfix + 'PPRTemplateForm/thankYou');
    };
};

function sendUpdateTimeSignal() {

    //if (projectName != "" || projectName != null) {
    //    var broserTypeAndversion = response.browser.name + " " + response.browser.version + " " + response.os.name + " " + response.os.version;
    //    var timeStamp = new Date();
    //    var clientName = $("#Client_Name_Project_Lead").val();
    //    var createdBy = $("#MyUsername").val();
    //    var created = timeStamp;
    //    var Updated = new Date();
    //    var UpdatedBy = $("#MyUsername").val();
    //    var clientQueueModel = new NewClientQueueModel(0, clientName, projectName, timeStamp, broserTypeAndversion, created, createdBy, Updated, UpdatedBy);
    //    var data = JSON.stringify(clientQueueModel);
    //    var clientQueueUrl = getBaseURL() + deploymentDomainSubfix + "api/ApiClientQueue/";
    //    $.ajax({
    //        url: clientQueueUrl,
    //        data: data,
    //        type: 'POST',
    //        async: false,
    //        contentType: 'application/json;charset=utf-8',
    //        dataType: 'json',
    //        success: function (data1) {

    //            //                 if (data1.length > 0) {

    //            //                     var dataSplit = data1.split(":");

    //            //                     if (dataSplit[0] == "the account still locked by ") {
    //            //                         $(document).find("input,textarea").attr('disabled', 'disabled');

    //            //                         $("#CompetitiveLandscapegrid").jqxGrid({ disabled: true });
    //            //                         $("#deleterowbutton").jqxButton({ disabled: true });
    //            //                         $("#addrowbutton").jqxButton({ disabled: true });
    //            //                         $("#lockLabel").text("Project is locked by: " + dataSplit[1]);
    //            //                         $("#messagLock").text("Please wait until project is unlocked and refresh your browser to access.");
    //            //                         $("#lockAlert").modal("show");
    //            //                         $("#lockbtn").css("display", "block");

    //            //                     } else if (dataSplit[0] == "the account is unloked, please refresh the page") {
    //            //                         $("#lockbtn").css("display", "none");
    //            //                     };
    //            //                 };
    //        }
    //    });


    //Locking system end


    // };

};

function logUser() {

    if (projectName != "" || projectName != null) {
        var broserTypeAndversion = response.browser.name + " " + response.browser.version + " " + response.os.name + " " + response.os.version;
        var timeStamp = new Date();
        var clientName = $("#Client_Name_Project_Lead").val();
        var createdBy = $("#MyUsername").val();
        var created = timeStamp;
        var Updated = new Date();
        var UpdatedBy = $("#MyUsername").val();
        var clientQueueModel = new NewClientQueueModel(0, clientName, projectName, timeStamp, broserTypeAndversion, created, createdBy, Updated, UpdatedBy);
        var data = JSON.stringify(clientQueueModel);
        var clientQueueUrl = getBaseURL() + deploymentDomainSubfix + "api/ApiClientQueue/";
        $.ajax({
            url: clientQueueUrl,
            data: data,
            type: 'POST',
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            success: function (data1) {

                //                 if (data1.length > 0) {

                //                     var dataSplit = data1.split(":");

                //                     if (dataSplit[0] == "the account still locked by ") {
                //                         $(document).find("input,textarea").attr('disabled', 'disabled');

                //                         $("#CompetitiveLandscapegrid").jqxGrid({ disabled: true });
                //                         $("#deleterowbutton").jqxButton({ disabled: true });
                //                         $("#addrowbutton").jqxButton({ disabled: true });
                //                         $("#lockLabel").text("Project is locked by: " + dataSplit[1]);
                //                         $("#messagLock").text("Please wait until project is unlocked and refresh your browser to access.");
                //                         $("#lockAlert").modal("show");
                //                         $("#lockbtn").css("display", "block");

                //                     } else if (dataSplit[0] == "the account is unloked, please refresh the page") {
                //                         $("#lockbtn").css("display", "none");
                //                     };
                //                 };
            }
        });
    };
};

// End idle timer systmem

var goToBIhelp = function () {
    var strUrl = "http://www.brandinstitute.com/contact_miami.asp";
    window.open(strUrl);
};

var toggleComments = function () {
    $(".glyphicon-tags").click();
};

var fadeInVersionControl = function () {
    $("#toggleversionControlIn").css("display", "none");
    $("#toggleversionControlOut").css("display", "block");
    $(".versioncontrol").fadeOut("slow", "linear");
};

var fadeOutVersionControl = function () {
    $("#toggleversionControlIn").css("display", "block");
    $("#toggleversionControlOut").css("display", "none");
    $(".versioncontrol").fadeIn("slow", "linear");
};

function printPage() {
    window.print();
}

//EMAIL

function selectQuestions() {

    $(".selectCheckboxTextArea").css('display', 'block');
    $(".selectCheckbox").css('display', 'block');
    $("#selectQuestions").css('display', 'none');
    $("#sendQuestions").css('display', 'block');
    $("#sendQuestions").removeAttr("disabled", "disabled");
    $('.selectCheckbox , .selectCheckboxTextArea').prop("checked", false);
    $("#competitiveLandscapeCheckBox").attr('checked', true);
    for (var i = 0; i < listFileds.length; i++) {
        if ($("#" + listFileds[i]).find(".form-control").val() == "" && $("#" + listFileds[i]).is(':visible')) {
            $('#' + listFileds[i]).find('.selectCheckbox , .selectCheckboxTextArea').prop("checked", true);
        };
    };
    $.growl.notice({ title: "Select Questions  ", message: "Please check mark ✔ the questions to be email" });
};

function sendQuestions() {
    $("#sendQuestonsToClientButton").click();

    var currentUser = $("#MyUsername").val();
    var firstNameOfClient = $("#Client_Name_Project_Lead").val().split(" ")[0];
    var leadDirectorPhoneNumber = $("#Brand_Institute_Directors_Phone_Numbers").val().split(",")[0];
    var leadDirectorEmail = $("#Brand_Institute_Directors_Emails").val().split(",")[0];
    var leadManagerEmails = $("#BI_Brand_Manager_Email").val();
    var leadDirector = $("#Brand_Institute_Directors").val().split(",")[0];
    $("#emailAdressesBCC").val(leadDirectorEmail + "," + leadManagerEmails);
    //    $("#emailAdresses").val($("#Client_Name_Project_Lead_Email").val());
    $("#emailAdresses").val(" ");
    $("#clientName").val($("#Client_Name_Project_Lead").val());
    $("#clientTitle").val($("#Client_Name_Project_Lead_Title").val());

    var emailbody = "<div style='font-family:Arial Narrow'>Dear " + firstNameOfClient + ",<br/><br/>" +
        "Please find below a link to access the product profile report.  We kindly ask that you complete this document to the best of your ability.  <br/><br/>" +
        "The text boxes that are outlined in red require your attention.<br/><br/>" +
        "If you do not have certain information you can return to this website at any time to update the document.<br/><br/>" +
        " PPR_LINK <br/><br/>" +
        "Kind regards,<br/>" +
        leadDirector + "<br/>" +
        "Email : " + leadDirectorEmail +
        "<br/>"
        + " Phone : " + leadDirectorPhoneNumber.replace(')', ') ') + "<br/><br/>" +
        "Where Great Brands Begin®<br/>  " +
        "Basel  Boston  Chicago  Dallas  Durham  Frankfurt  London  Los Angeles  Miami  New York  Philadelphia  Rockville  San Francisco  Seattle  Seoul  Tokyo  Toronto " +
        "<div/>";

    $("#emailAdressesBody").val(emailbody);
    $("#adminEmailAdresses").val(currentUser + "@brandinstitute.com");
    $("#emailAdressesSubject").val('Project ' + $("#currentProject").text() + ' Product Profile Report (PPR)');
    $(".selectCheckboxTextArea").css('display', 'none');
    $(".selectCheckbox").css('display', 'none');
    $("#selectQuestions").css('display', 'block');
    $("#sendQuestions").css('display', 'none');
};

var createClientQuestionary = function () {

    // validation
    var isValid = validateInputs();

    if (isValid) {
        var clientQuestionss = [];
        for (var i = 0; i < listFileds.length; i++) {
            var isChecked = $('#' + listFileds[i]).find('.selectCheckbox:checked, .selectCheckboxTextArea:checked');
            if (isChecked.length > 0) {
                clientQuestionss.push(listFileds[i]);
            };
        };

        var clientQuestions = clientQuestionss.join(',');
        var clientFullName = $('#clientName').val();
        var clientTitle = $('#clientTitle').val();
        var clientFirstName = ""; // PENDING
        var clientLastName = "";// PENDING
        var clientPassword = "";// PENDING
        var clientProject = $("#currentProject").text();
        var clientProjectNameDisplay = $("#projectNameDisplay").text();
        var clientProjectId = projectId;
        var clientAddress = "";// PENDING
        var clientPhone = "";// PENDING
        var clientEmail = $('#emailAdresses').val();
        var clientCompany = "";// PENDING
        var dateTime = new Date();
        var createdBy = $("#MyUsername").val();
        var id = $("#MyUsername").val();
        var projectTemplate = $('#templateType').text();
        var leadDirectorEmail = $("#Brand_Institute_Directors_Emails").val().split(",")[0];
        var leadDirector = $("#Brand_Institute_Directors").val().split(",")[0];
        var BCC = $("#emailAdressesCheckBCC").is(':checked');
        var emailsBCC = $("#emailAdressesBCC").val();
        var clientEmailSubject = $("#emailAdressesSubject").val();
        var clientEmailBody = $("#emailAdressesBody").val() + "|" + emailsBCC + "|" + BCC;
        var link = "ClientFullName=" + clientFullName.replace(" ", "%") +
            "&ClientProjectName=" + clientProject.replace(" ", "%") + "&ClientProjectNameDisplay=" + clientProjectNameDisplay.replace(" ", "%") + "&ClientProjectId=" + clientProjectId +
            "&SelectedTemplate=" + projectTemplate.replace(" ", "%") + "&ClientQuestions=" + clientQuestions.replace(" ", "%") +
            "&Created=" + dateTime + "&ClientSender=" + id + "&LeadDirector=" + leadDirector + "&LeadDirectorEmail=" + leadDirectorEmail;

        //var hyperLink = "<a style='color:green; ' target='_blank' href='" + link + "'>PPR Link</a>";
        var hyperLink = "PPRLINK";

        if (clientEmailBody.indexOf("PPR_LINK") !== -1 || clientEmailBody.indexOf("PROJECT_NAME") !== -1) {
            clientEmailBody = clientEmailBody.replace("PPR_LINK", hyperLink);
            if (clientEmailBody.indexOf("PROJECT_NAME") !== -1) {
                clientEmailBody = clientEmailBody.replace("PROJECT_NAME", clientProject);
            }
        } else {
            clientEmailBody = link;
        };

        clientAddress = link;
        var adminEmailAddress = $("#adminEmailAdresses").val();
        var clientProjectTemplate = $("#templateType").text();
        var clientForEmailModel = new NewClientModel(clientdId, clientFullName, clientTitle, clientFirstName,
                                                                                 clientLastName, clientPassword, clientProject, clientProjectId, clientAddress, clientPhone, clientEmail,
                                                                                 clientCompany, clientQuestions, clientEmailSubject, clientEmailBody, adminEmailAddress, clientProjectTemplate,
                                                                                 dateTime, createdBy, null, null);
        var Data = JSON.stringify(clientForEmailModel);
        var clientFormUrls = getBaseURL() + deploymentDomainSubfix + "api/ApiClient/" + id;

        $.ajax({
            url: clientFormUrls,
            type: 'PUT',
            data: Data,
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            success: function (message) {
                if (message == "success") {
                    logUser();
                    $('#saveClientAlertBtn').click();
                } else {
                    alert("Email Failed Please Contact IS for support");
                };
            }
        });
    };
};

// validate the email form
var validateInputs = function () {
    $('.validationMessage').css('display', 'none');
    var a = ['emailAdresses', 'emailAdressesSubject', 'emailAdressesBody',
                'adminEmailAdresses'
    ];

    for (var i = 0; i < a.length ; i++) {
        var isvalid = validationChecker(a[i]);
        if (!isvalid) {
            var message;
            if (a[i] == 'emailAdresses') {
                message = 'Email Adresses';
            }
            else if (a[i] == 'emailAdressesSubject') {
                message = 'Email Subject';
            }
            else if (a[i] == 'emailAdressesBody') {
                message = 'Email Body';
            }
            else if (a[i] == 'adminEmailAdresses') {
                message = 'Admin Email Adresses';
            };
            $('.validationMessage').text("* You are missing the '" + message + "'  field");
            $('.validationMessage').css('display', 'block');
            return false;
        };
    };
    return true;
};

var validationChecker = function (id) {
    var value = $('#' + id).val();
    if (value === "" || typeof value === 'undefined') {
        return false;
    } else { return true; }

};


$('#countriesList').on('close', function () {
    var oldValueContryList = $("#PrimaryMarketsInput").val();
    var items = $("#countriesList").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });
    if (oldValueContryList != selectedItems) {
        if (oldValueContryList.length > 0 && oldValueContryList != "<strike> </strike>" && oldValueContryList != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") {
                randomColor = "rgb(71,164,71)";
            }
            oldValueContryList = oldValueContryList.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#PrimaryMarketsGroup").find(':checkbox').after("  <div class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + oldValueContryList +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");
        };
        $("#PrimaryMarketsInput").val(selectedItems);
        $("#PrimaryMarketsInput").trigger('autosize.resize');

        autoSavedata();
    };
});

$('#countriesList2').on('close', function () {
    oldValueContryList2 = $("#SecondaryMarketInput").val();
    var items = $("#countriesList2").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });

    if (oldValueContryList2 != selectedItems) {
        if (oldValueContryList2.length > 0 && oldValueContryList2 != "<strike> </strike>" && oldValueContryList2 != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") {
                randomColor = "rgb(71,164,71)";
            };
            oldValueContryList2 = oldValueContryList2.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#SecondaryMarketsGroup").find(':checkbox').after("  <div class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" +
                                                                                                        randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " +
                                                                                                        oldValueContryList2 + "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>"
                                                                                                        + adminUser + " " + datetime + "</span></i></br> </div>");
        };

        $("#SecondaryMarketInput").val(selectedItems);
        $("#SecondaryMarketInput").trigger('autosize.resize');

        autoSavedata();
    };
});

$('#formulationDropdownlist').on('close', function () {
    var oldValuFormulation = $("#formulationInput").val();
    var items = $("#formulationDropdownlist").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });
    if (oldValuFormulation != selectedItems) {
        if (oldValuFormulation.length > 0 && oldValuFormulation != "<strike> </strike>" && oldValuFormulation != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") {
                randomColor = "rgb(71,164,71)";
            }
            oldValuFormulation = oldValuFormulation.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#formulationDropdownlistGroup").find(':checkbox').after("  <div class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + oldValuFormulation +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");
        };

        $("#formulationInput").val(selectedItems);
        $("#formulationInput").trigger('autosize.resize');
        autoSavedata();
    };
});

$('#RouteOfAdminitrationDropdownlist').on('close', function () {
    var oldValuRoute = $("#RouteOfAdminitrationInput").val();
    var items = $("#RouteOfAdminitrationDropdownlist").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });
    if (oldValuRoute != selectedItems) {
        if (oldValuRoute.length > 0 && oldValuRoute != "<strike> </strike>" && oldValuRoute != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") {
                randomColor = "rgb(71,164,71)";
            }
            oldValuRoute = oldValuRoute.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#RouteOfAdminitrationDropdownlistGroup").find(':checkbox').after("  <div class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" +
                                                                                                                                    randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " +
                                                                                                                                    oldValuRoute + "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" +
                                                                                                                                    adminUser + " " + datetime + "</span></i></br> </div>");
        };
        $("#RouteOfAdminitrationInput").val(selectedItems);
        $("#RouteOfAdminitrationInput").trigger('autosize.resize');
        autoSavedata();
    };
});

// BLUR event Control over the text input controls
$(".form-control").change(function () {
    if ($(this)[0].id != "searchproject" && $(this)[0].id != "emailAdresses" && $(this)[0].id != "clientName" &&
        $(this)[0].id != "clientTitle" && $(this)[0].id != "emailAdressesSubject" && $(this)[0].id != "emailAdressesBody"
        && $(this)[0].id != "adminEmailAdresses" && $(this)[0].id != "emailAdressesBCC" && $(this)[0].id != "emailAdressesCheckBCC") {

        var newTextinput = $(this).val();
        if (OldValue.length > 17 && OldValue != newTextinput && OldValue != "<strike> </strike>" && OldValue != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") {
                randomColor = "rgb(71,164,71)";
            }
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $(this).parent().find(':checkbox').after("  <div class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + OldValue +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");
        };
        var id = this.parentElement.parentElement.id;
        autoSavedata(id);
    }
});

$('.form-control').click(function () {
    OldValue = $(this).val();
    OldValue = OldValue.strike();
    beingConsiderByCounter = 0;
});

$('.form-control').select(function (e) {
    OldValue = $(this).val();
    OldValue = OldValue.strike();
    beingConsiderByCounter = 0;
});

// Especial dropdown listener

$("#beingConsiderByDropdown").on('click', 'li a', function () {
    $("#BeingConsideredByInput").val($(this).text());
});

$('#beingConsiderByDropdown').on('click', function () {

    if (beingConsiderByCounter == 0) {
        oldValue = $("#BeingConsideredByInput").val();
        beingConsiderByCounter = beingConsiderByCounter + 1;
    } else {

        var newTextinput = $("#BeingConsideredByInput").val();
        beingConsiderByCounter = 0;
        if (oldValue.length > 0 && oldValue != newTextinput && oldValue != "<strike> </strike>" && oldValue != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") {
                randomColor = "rgb(71,164,71)";
            }
            oldValue = oldValue.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#BeingConsideredByGroup").find(':checkbox').after("  <div class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + oldValue +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");

        };
        autoSavedata();
    }

});


var getClockTime = function () {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ap = "AM";
    if (hour > 11) {
        ap = "PM";
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour == 0) {
        hour = 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    var timeString = hour + ':' + minute + ':' + second + " " + ap;
    return timeString;

};

//DOCUMENT READY


$(document).ready(function () {

    projectNameFromQueryString = getParameterByName('projectName');

    $("#currentDateinput").jqxDateTimeInput({ width: '300px', height: '25px', formatString: 'MMMM dd, yyyy', dropDownHorizontalAlignment: 'right' });

    $("#advanceSearchDownbutton").jqxDropDownButton({ width: 150, height: 25 });
    var advanceSearchDropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + 'Project Search' + '</div>';
    $("#advanceSearchDownbutton").jqxDropDownButton('setContent', advanceSearchDropDownContent);


    $("#searchproject").removeAttr("disabled", "disabled");
    $('#emailAdressesBody').jqxEditor({
        height: 800,
        width: 800,
        tools: "bold italic underline  | left center right t",
        createCommand: function (name) {
            switch (name) {
                case "font":
                    return {
                        init: function (widget) {
                            widget.jqxDropDownList({
                                source: [{ label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
                                     { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
                                     { label: 'Courier New', value: '"Courier New", Courier, monospace' },
                                     { label: 'Georgia', value: "Georgia,serif" }]
                            });
                        }
                    }
                case "size":
                    return {
                        init: function (widget) {
                            widget.jqxDropDownList({
                                source: [
                                    { label: "8pt", value: "xx-small" },
                                    { label: "12pt", value: "small" },
                                    { label: "18pt", value: "large" },
                                    { label: "36pt", value: "xx-large" }
                                ]
                            });
                        }
                    }
            }
        }, toolbarPosition: "bottom"
    });

    $("#MarketingandSafetyResearchLabel").jqxTooltip({ content: 'double click to edit', position: 'top', name: 'buttontooltip' });
    $("#salesDate").jqxTooltip({ content: 'double click to choose date', position: 'right', name: 'buttontooltip' });
    $("#currentProject").jqxTooltip({ content: 'double click to edit project', position: 'right', name: 'buttontooltip' });
    $("#toggleComments").jqxTooltip({ content: 'Hide and show all document comments', position: 'left', name: 'buttontooltip' });
    $("#toggleversionControlIn").jqxTooltip({ content: 'Hide document version control', position: 'left', name: 'buttontooltip' });
    // $("#sendQuestions").jqxTooltip({ content: 'Send questions to a client', position: 'left', name: 'buttontooltip' });
    //$("#selectQuestions").jqxTooltip({ content: 'Select the questions to be send', position: 'left', name: 'buttontooltip' });
    //    $("#printBtn").jqxTooltip({ content: 'Print document', position: 'left', name: 'buttontooltip' });
    //$("#savedataBtn").jqxTooltip({ content: 'Save project data', position: 'left', name: 'buttontooltip' });
    $("#CTNGROUP").jqxTooltip({ content: 'Clinical trial name', position: 'left', name: 'buttontooltip' });
    $("#PBNGROUP").jqxTooltip({ content: 'Program brand name', position: 'left', name: 'buttontooltip' });
    $("#CNGROUP").jqxTooltip({ content: 'Class name', position: 'left', name: 'buttontooltip' });
    $("#TBNGROUP").jqxTooltip({ content: 'Technology brand name', position: 'left', name: 'buttontooltip' });
    $("#lockbtn").jqxTooltip({ content: 'This project ss lock wait for it to be unlocked', position: 'left', name: 'lockbtn' });

    //add and delete new rows  buttons for competitive landscape tables     
    $("#toggleComments").attr('disabled', 'disabled');
    $("#toggleversionControlIn").attr('disabled', 'disabled');
    $("#savedataBtn").attr("disabled", "disabled");
    $("#printBtn").attr("disabled", "disabled");
    $("#selectQuestions").attr("disabled", "disabled");
    $("#sendQuestions").attr("disabled", "disabled");

    $("#addrowbutton").jqxButton({
        theme: gridTheme,
        height: 20
    });

    $("#addrowbutton").on('click', function () {
        $("#CompetitiveLandscapegrid").jqxGrid('addrow', null, {});
    });


    $("#deleterowbutton").jqxButton({
        theme: gridTheme,
        height: 20
    });

    $("#deleterowbutton").on('click', function () {
        var selectedrowindex = $("#CompetitiveLandscapegrid").jqxGrid('getselectedrowindex');
        var rowscount = $("#CompetitiveLandscapegrid").jqxGrid('getdatainformation').rowscount;
        if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
            var id = $("#CompetitiveLandscapegrid").jqxGrid('getrowid', selectedrowindex);
            $("#CompetitiveLandscapegrid").jqxGrid('deleterow', id);
        }
    });
    $("#deleterowbutton").jqxButton({ disabled: true });
    $("#addrowbutton").jqxButton({ disabled: true });
    // end adding and delete new rows  buttons for competitive landscape tables


    $("#CompetitiveLandscapegrid").jqxGrid({ disabled: true });
    $('.tableGroup').css('padding', '0');
    $('textarea').autosize();

    var projectSource;
    projectSource = {
        type: "GET",
        datatype: "json",
        async: true,
        cache: true,
        url: getBaseURL() + deploymentDomainSubfix + "api/ApiProjects/",
        datafields:
        [
            { name: 'ppr_ProjectListId', type: 'string' },
            { name: 'ProjectName', type: 'string' },
            { name: 'Split', type: 'string' },
            { name: 'ClientName', type: 'string' },
            { name: 'LeadDirectorName', type: 'string' },
            { name: 'BrandManager', type: 'string' },
            { name: 'Office', type: 'string' },
            { name: 'SalesDate', type: 'date' },
            { name: 'ProjectAmount', type: 'number' },
           { name: 'Created', type: 'date' }
        ]
    };

    var projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
        contentType: 'application/json; charset=utf-8',
    });

    //$("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, placeHolder: 'Projects', valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '150' });

    loadAdvanceSearchProjects(projectDataAdapter);

    projectSource = [
           { html: "<div tabIndex=0 style='padding: 1px;'><div>solution for injection</div>", label: "solution for injection", group: "solution options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>suspension for injection</div>", label: "suspension for injection", group: "solution options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral tablets</div>", label: "oral tablets", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral capsules</div>", label: "oral capsules", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral suspension</div>", label: "oral suspension", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral syrup</div>", label: "oral syrup", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>metered dose inhaler", label: "metered dose inhaler", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>powder for oral inhalation", label: "powder for oral inhalation", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>controlled release oral tablets", label: "controlled release oral tablets", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>delayed release oral capsules", label: "delayed release oral capsules", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>delayed release oral tablet", label: "delayed release oral tablet", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>disintegrating oral tablets", label: "disintegrating oral tablets", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>enteric coated oral capsules", label: "enteric coated oral capsules", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>extended release oral capsules", label: "extended release oral capsules", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>extended release oral tablets", label: "extended release oral tablets", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>chewable oral tablets", label: "chewable oral tablets", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral concentrate", label: "oral concentrate", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral elixir", label: "oral elixir", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral emulsion", label: "oral emulsion", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral gel", label: "oral gel", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral gum", label: "oral gum", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral inhaler", label: "oral inhaler", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral liquid", label: "oral liquid", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral paste", label: "oral paste", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral perles", label: "oral perles", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral rinse/wash", label: "oral rinse/wash", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral spray", label: "oral spray", group: "oral options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral wafers", label: "oral wafers", group: "oral options" },
            { html: "<div tabIndex=0 style='padding: 1px;'><div>sustained release oral tablets", label: "sustained release oral tablets", group: "oral options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>nasal ointment", label: "nasal ointment", group: "nasal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>solution for nebulizer", label: "solution for nebulizer", group: "nasal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>nasal ointment", label: "nasal ointment", group: "nasal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>nasal spray", label: "nasal spray", group: "nasal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>nasal drops", label: "nasal drops", group: "nasal options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical cream", label: "topical cream", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical gel", label: "topical gel", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical lotion", label: "topical lotion", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical ointment", label: "topical ointment", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical shampoo", label: "topical shampoo", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical powder", label: "topical powder", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical solution", label: "topical solution", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical spray", label: "topical spray", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical tincture", label: "topical tincture", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical patch", label: "topical patch", group: "topical options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical transdermal", label: "topical transdermal", group: "topical options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>ophthalmic ointment", label: "ophthalmic ointment", group: "ophthalmic options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>ophthalmic solution", label: "ophthalmic solution", group: "ophthalmic options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>otic ointment", label: "otic ointment", group: "otic options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>otic solution", label: "otic solution", group: "otic options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>prefilled syringe", label: "prefilled syringe", group: "injection options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>reconstitutable powder for injection", label: "reconstitutable powder for injection", group: "injection options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>solution for injection", label: "solution for injection", group: "injection options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>suspension for injection", label: "suspension for injection", group: "injection options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>rectal suppositorieso", label: "rectal suppositories", group: "rectal options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>enema", label: "enema", group: "enema options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>intraurethral pellet", label: "intraurethral pellet", group: "vaginal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>perineal wash", label: "perineal wash", group: "vaginal options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>vaginal cream", label: "vaginal cream", group: "vaginal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>vaginal douche", label: "vaginal douche", group: "vaginal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>vaginal gel", label: "vaginal gel", group: "vaginal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>vaginal insert", label: "vaginal insert", group: "vaginal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>vaginal suppositories", label: "vaginal suppositories", group: "vaginal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>vaginal tablets", label: "vaginal tablets", group: "vaginal options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>intrauterine device", label: "intrauterine device", group: "vaginal options" },

           { html: "<div tabIndex=0 style='padding: 1px;'><div>adhesive bandage ", label: "adhesive bandage ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>film ", label: "film ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>gas ", label: "gas ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>reagent tablets ", label: "reagent tablets ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>implant ", label: "implant ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>reagent test strips ", label: "reagent test strips ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>swabs ", label: "swabs ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>test kit ", label: "test kit ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>topical (exact dosage form not found) ", label: "topical (exact dosage form not found) ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>vaginal (exact dosage form not found) ", label: "vaginal (exact dosage form not found) ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>rectal (exact dosage not found) ", label: "rectal (exact dosage not found) ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>oral (exact dosage form not found ", label: "oral (exact dosage form not found ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>ophthalmic (exact dosage form not found) ", label: "ophthalmic (exact dosage form not found) ", group: "other options" },
           { html: "<div tabIndex=0 style='padding: 1px;'><div>nasal (exact dosage form not found)  ", label: "nasal (exact dosage form not found) ", group: "other options" }
    ];

    $("#formulationDropdownlist").jqxComboBox({ checkboxes: true, source: projectSource, width: '100%', height: '25px', placeHolder: "Dosage dropdown" });
    //  $("#formulationDropdownlist").jqxDropDownList({ source: projectSource, width: '100%', height: '25px' });

    projectSource = ["Other", "Buccal", "Intravenous(IV)", "Intramuscular(IM) ",
     "Inhalation", "Nasal", " Ophthalmic ", "Oral", "Otic",
       "Rectal", " Sublingual ", "Subcutaneous(SQ, SC)", "Topical", "Transdermal", "Vaginal"
    ];
    $("#RouteOfAdminitrationDropdownlist").jqxComboBox({ checkboxes: true, source: projectSource, width: '100%', height: '25px', placeHolder: "Routes dropdown" });
    // $("#RouteOfAdminitrationDropdownlist").jqxDropDownList({ source: projectSource, width: '100%', height: '25px' });      
    //dropdown countries list for primary and secondary markets questions

    var countriesList = ["United States", "Europe Big 5 (France - Germany - Italy - Spain - United Kingdom)", "Europe (All)", "Canada", "Japan",
        "Afghanistan", "Albania", "Algeria", "Andorra",
        "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Belorussia", "Benelux", "Bermuda", "Bes Islands", "Bhutan", "Bolivia",
        "Bosnia-Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burundi", "Cambodia", "Cape Verde",
        "Cayman Islands", "Central America", "Chile", "China", "Colombia", "Congo (Democratic Republic)", "Costa Rica", "Croatia", "Cuba",
        "Curacao", "Cyprus", "Czech Republic", "Denmark", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia",
        "Ethiopia", "Fiji Islands", "Finland", "France", "French West Africa", "Gambia", "Gaza", "Georgia", "Germany", "Ghana", "Gibraltar",
        "Greece", "Grenada", "Guatemala", "Guernsey", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia",
        "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Malta", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
        "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Nigeria", "Norway", "O.A.P.I.", "Oman",
        "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia",
        "Russian Federation", "Rwanda", "Saint Martin", "Saint Vincent and the Grenadines", "Samoa", "Sao Tomé And Principe", "Saudi Arabia",
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain",
        "Sri Lanka", "St. Kitts And Nevis", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
        "Tanzania", "Thailand", "Tonga", "Trinidad And Tobago", "Tunisia", "Turk. Rep. of Northern Cyprus", "Turkey", "Turkmenistan", "Turks and Caicos Islands",
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam",
        "West Bank Of Jordan (Judea And Samaria)", "Yemen", "Zambia", "Zanzibar", "Zimbabwe"];


    $("#countriesList").jqxComboBox({ checkboxes: true, source: countriesList, width: '100%', height: '25px', placeHolder: "Select countries" });
    $("#countriesList2").jqxComboBox({ checkboxes: true, source: countriesList, width: '100%', height: '25px', placeHolder: "Select countries" });
    var clientName = $("#MyUsername").val();
    $.growl.fashion({ title: "Welcome  " + clientName, message: "Please Select A PPR Project" });

});

// query string helper 

var getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var searchProjectChange = function () {

    var value = document.getElementById("searchproject").value;
    var projectSource;
    var projectDataAdapter;
    if (value == "") {

        projectSource = {
            type: "GET",
            datatype: "json",
            async: false,
            cache: true,
            url: getBaseURL() + deploymentDomainSubfix + "api/ApiProjects/"
        };

        projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
            contentType: 'application/json; charset=utf-8'
        });


        $("#jqxdropdownlist").jqxDropDownList('clear');
        $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '150px' });
        $("#jqxdropdownlist").jqxDropDownList('open');

    } else {
        projectSource = {
            type: "GET",
            datatype: "json",
            async: false,
            cache: true,
            url: getBaseURL() + deploymentDomainSubfix + "api/apifilteredprojects/" + value
        };

        projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
            contentType: 'application/json; charset=utf-8'
        });
        $("#jqxdropdownlist").jqxDropDownList('clear');
        $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '150px' });
        $("#jqxdropdownlist").jqxDropDownList('open');
    }


};

$('#ClientDropdown').change(function () {
    clientdId = $(this).val();
    if (clientdId != "" || typeof clientdId != "undefined") {
        var clientUrlGetById = getBaseURL() + deploymentDomainSubfix + "api/ApiClient/" + clientdId;
        $.ajax({
            url: clientUrlGetById,
            type: 'GET',
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            success: function (data) {
                $('#emailAdresses').val("");
                $('#clientName').val("");
                $('#clientTitle').val("");
                $('#emailAdresses').val(data.ClientEmail);
                $('#clientName').val(data.ClientFullName);
                $('#clientTitle').val(data.ClientTitle);
            }
        });
    };
});

// after choose a project
$('#jqxdropdownlist').on('change', function (event) {
    var item = event.args.item;
    loadProjectInformation(item, null, null);
});

// SAVING DATA

var savedata = function () {
    var listofPprTemplateFormModels = [];
    for (var i = 0; i < listFileds.length; i++) {
        if (inputGroup != "ProductAttributesTableGroup" && inputGroup != "CreativeDirectionTableGroup") {
            var inputGroup = listFileds[i];
            var qestion = $.trim($('#' + listFileds[i]).find('.label-forms').text());
            var answer = $('#' + listFileds[i]).find('.form-control').val();
            if (answer != "") {
                var templateType = $('#templateType').text();
                var dateTime = new Date();
                var createdBy = $("#MyUsername").val();
                var versionControlSpans = $('#' + listFileds[i]).find('.versioncontrol');
                var htmlStringForVersionControl = "";
                versionControlSpans.each(function (e, spanElement) {
                    var elem = $(spanElement);
                    htmlStringForVersionControl += elem.context.innerHTML;
                });
                var versionControlString = htmlStringForVersionControl;
                var pprTemplateFormModel = new NewPprDataModel(0, projectId, projectName, null, inputGroup, qestion, answer, templateType, versionControlString, dateTime, createdBy, null, null);
                listofPprTemplateFormModels.push(pprTemplateFormModel);
            };
        } else {
            var inputGroup = listFileds[i];
            var inputGroup = listFileds[i];

        };
    };

    var data = JSON.stringify(listofPprTemplateFormModels);
    var pprTemplateFormUrl = getBaseURL() + deploymentDomainSubfix + "api/ApiPPRTemplateForm";

    $.ajax({
        url: pprTemplateFormUrl,
        type: 'POST',
        data: data,
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function () {
            $('#saveDataAlertBtn').click();
        }
    });
};

var autoSavedata = function (id) {

    $("#selectQuestions").css('display', 'block');
    if (projectName != "" && projectName != null) {

        var listofPprTemplateFormModels = [];
        var listFileds2 = $.merge([], listFileds);
        removeItem4Array(listFileds2, 'ProductAttributesTableGroup');
        removeItem4Array(listFileds2, 'CreativeDirectionTableGroup');
        for (var i = 0; i < listFileds2.length; i++) {
            var inputGroup = listFileds2[i];
            if (inputGroup != "ProductAttributesTableGroup" && inputGroup != "CreativeDirectionTableGroup") {
                var question = $.trim($('#' + listFileds2[i]).find('.label-forms').text());
                var answer = $('#' + listFileds2[i]).find('.form-control').val();
                if ($('#' + listFileds2[i]).css('display') === 'block' ) {
                    var templateType = $('#templateType').text();
                    var dateTime = new Date();
                    var createdBy = $("#MyUsername").val();
                    var versionControlSpans = $('#' + listFileds2[i]).find('.versioncontrol');
                    var htmlStringForVersionControl = "";

                    versionControlSpans.each(function (e, spanElement) {
                        var elem = $(spanElement);
                        htmlStringForVersionControl += elem.context.innerHTML;
                    });
                    var versionControlString = htmlStringForVersionControl;
                    var pprTemplateFormModel = new NewPprDataModel(0, projectId, projectName, null, inputGroup, question, answer, templateType, versionControlString, dateTime, createdBy, null, null);
                    listofPprTemplateFormModels.push(pprTemplateFormModel);
                };
            };
        };
    }
    var data = JSON.stringify(listofPprTemplateFormModels);
    var pprTemplateFormUrl = getBaseURL() + deploymentDomainSubfix + "api/ApiPPRTemplateForm";

    $.ajax({
        url: pprTemplateFormUrl,
        type: 'POST',
        data: data,
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function () {
            $.growl({ title: "Auto saved", message: "Your last input was saved" });
        }
    });
};

var turnInputsOn = function () {

    for (var j = 0; j < ClinicalGroupCheckbox.length; j++) {
        $('#' + ClinicalGroupCheckbox[j]).each(function () { this.checked = false; });

    }

    for (var k = 0; k < ClinicalGroupLabel.length; k++) {
        $("#" + ClinicalGroupLabel[k]).removeAttr("disabled", "disabled");
    }

    for (var i = 0; i < listFileds.length; i++) {
        $('#' + listFileds[i]).css('display', 'block');
    };
};

var turnInputsOff = function () {
    for (var i = 0; i < listFiledsToTurnOff.length; i++) {
        $('#' + listFiledsToTurnOff[i]).css('display', 'none');
    };
};

var hideAllColumnsForGrid = function () {
    $("#CompetitiveLandscapegrid").jqxGrid("hidecolumn", "Company");
    $("#CompetitiveLandscapegrid").jqxGrid("hidecolumn", "BrandName");
    $("#CompetitiveLandscapegrid").jqxGrid("hidecolumn", "PointsOfDifferentiation");
    $("#CompetitiveLandscapegrid").jqxGrid("hidecolumn", "NonproprietaryName");
    $("#CompetitiveLandscapegrid").jqxGrid("hidecolumn", "ClinicalTrialName");
    $("#CompetitiveLandscapegrid").jqxGrid("hidecolumn", "ClassName");


};

var showColumnsForRX_Animal_RXbrand_Modifier = function () {

    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "Company");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "BrandName");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "NonproprietaryName");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "PointsOfDifferentiation");
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "Company", 'width', '25%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "BrandName", 'width', '25%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "NonproprietaryName", 'width', '25%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "PointsOfDifferentiation", 'width', '25%');

};

var showColumnsForMedical_OTC_Technology = function () {

    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "Company");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "BrandName");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "PointsOfDifferentiation");
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "Company", 'width', '33%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "BrandName", 'width', '33%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "PointsOfDifferentiation", 'width', '34%');
};

var showColumnsForClinicalTrialName = function () {
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "Company");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "BrandName");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "PointsOfDifferentiation");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "ClinicalTrialName");
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "Company", 'width', '25%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "BrandName", 'width', '25%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "ClinicalTrialName", 'width', '25%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "PointsOfDifferentiation", 'width', '25%');



};

var showColumnsForClassName = function () {
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "Company");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "BrandName");
    $("#CompetitiveLandscapegrid").jqxGrid("showcolumn", "ClassName");
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "Company", 'width', '33%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "BrandName", 'width', '33%');
    $("#CompetitiveLandscapegrid").jqxGrid("setcolumnproperty", "ClassName", 'width', '33%');

};

//the code for adding the fields when the checkbox is checked

$(".selectTemplateCheckbox").change(function () {
    turnInputsOff();
    $(".selectTemplateCheckbox").each(function () {



        if ($(this).is(":checked")) {
            var i;
            if ((this).id == "PBN") {
                for (i = 0; i < ProgramBrandNameSelectedList.length; i++) {
                    $('#' + ProgramBrandNameSelectedList[i]).css('display', 'block');

                }
            }
            else if ((this).id == "CTN") {
                showColumnsForClinicalTrialName();
                for (i = 0; i < ClinicalTrialNameSelectedList.length; i++) {
                    $('#' + ClinicalTrialNameSelectedList[i]).css('display', 'block');

                }
            }
            else if ((this).id == "CN") {
                showColumnsForClassName();
                for (i = 0; i < ClassNameSelectedList.length; i++) {
                    $('#' + ClinicalTrialNameSelectedList[i]).css('display', 'block');

                }
            }
            else if ((this).id == "TBN") {
                showColumnsForMedical_OTC_Technology();
                for (i = 0; i < TechnologyBrandNameSelectedList.length; i++) {
                    $('#' + TechnologyBrandNameSelectedList[i]).css('display', 'block');

                }

            }
        }


    });
});

var templateChoice = function (id) {
    turnInputsOn();
    hideAllColumnsForGrid();
    $(".tableGroup2").css('padding', '0');
    $(".tableGroup3").css('padding', '0');
    $(".tableGroup2").css('width', '33.3%');
    $('#templateType').text(id);
    var i;
    if (id == "RX") {

        $(".tableGroup").css('width', '25%');
        showColumnsForRX_Animal_RXbrand_Modifier();

        for (i = 0; i < RXListFields.length; i++) {
            $('#' + RXListFields[i]).css('display', 'none');
        };
    }
    else if (id == "MEDICAL DEVICE") {

        for (i = 0; i < MedicalDeviceListFields.length; i++) {
            $('#' + MedicalDeviceListFields[i]).css('display', 'none');
        };
        $(".tableGroup").css('width', '33%');
        showColumnsForMedical_OTC_Technology();
    }
    else if (id == "OTC") {

        $(".tableGroup").css('width', '33.3%');
        showColumnsForMedical_OTC_Technology();

        for (i = 0; i < OTCListFields.length; i++) {
            $('#' + OTCListFields[i]).css('display', 'none');
        };


    }
    else if (id == "NONPROP") {

        for (i = 0; i < NONPROPListFields.length; i++) {
            $('#' + NONPROPListFields[i]).css('display', 'none');
        };
    }
    else if (id == "ANIMAL HEALTH") {

        $(".tableGroup").css('width', '33.3%');
        showColumnsForRX_Animal_RXbrand_Modifier();

        for (i = 0; i < AnimalHealthListFields.length; i++) {
            $('#' + AnimalHealthListFields[i]).css('display', 'none');
        };


    }
    else if (id == "RX BRAND NAME LINE EXTENSION") {
        $(".tableGroup").css('width', '25%');
        showColumnsForRX_Animal_RXbrand_Modifier();

        for (i = 0; i < RxBrandNameLineExtensionListFields.length; i++) {
            $('#' + RxBrandNameLineExtensionListFields[i]).css('display', 'none');
        };
    }
    else if (id == "MODIFIER NAME LINE EXTENSION") {
        $(".tableGroup").css('width', '25%');
        showColumnsForRX_Animal_RXbrand_Modifier();

        for (i = 0; i < ModifierNameLineExtensionListFields.length; i++) {
            $('#' + ModifierNameLineExtensionListFields[i]).css('display', 'none');
        };
    }

    else if (id == "CLINICAL TRIAL NAME") {

        showColumnsForClinicalTrialName();

        $('#CTN').each(function () { this.checked = true; });
        $("#CTNGROUP").attr("disabled", "disabled");

        for (i = 0; i < ClinicalTrialNameListFields.length; i++) {
            $('#' + ClinicalTrialNameListFields[i]).css('display', 'none');
        };

    }

    else if (id == "PROGRAM BRAND NAME") {
        $(".tableGroup").css('width', '50%');
        $('#PBN').each(function () { this.checked = true; });
        $("#PBNGROUP").attr("disabled", "disabled");

        for (i = 0; i < ProgramBrandNameListFields.length; i++) {
            $('#' + ProgramBrandNameListFields[i]).css('display', 'none');
        };

    }

    else if (id == "CLASS NAME") {

        showColumnsForClassName();
        $('#CN').each(function () { this.checked = true; });
        $("#CNGROUP").attr("disabled", "disabled");

        for (i = 0; i < ClassNameListFields.length; i++) {
            $('#' + ClassNameListFields[i]).css('display', 'none');
        };
    }


    else if (id == "TECHNOLOGY BRAND NAME") {

        $(".tableGroup").css('width', '33.3%');
        showColumnsForMedical_OTC_Technology();
        $('#TBN').each(function () { this.checked = true; });
        $("#TBNGROUP").attr("disabled", "disabled");

        for (i = 0; i < TechnologyBrandNameListFields.length; i++) {
            $('#' + TechnologyBrandNameListFields[i]).css('display', 'none');
        };
    };

    var projectTemplateContainer2 = $("#templateTypeDisplay").text(id);
    $("#templateTypeDisplay").parent().parent().css("margin-left", -1 * projectTemplateContainer2.width() - 15);

    $("#ProjectGroup").css("display", "none");
    $("#salesDateGroup").css("display", "none");
    $("#MarketingandSafetyResearchLabelGroup").css("display", "none");

};
// **********************************************Competitive Landscape grid set up *******************************************************//

var loadCompetitiveLandscapeData = function (projectName) {

    var cellclass = function (row, columnfield, value) {
        if (value == "") {
            return 'red';
        }
        else return 'green';
    };
    var competitiveLandscapeSource =
             {
                 type: "GET",
                 datatype: "json",
                 async: false,
                 cache: true,
                 url: getBaseURL() + deploymentDomainSubfix + "api/ApiCompetitiveLandscapes/" + projectName,
                 datafields: [
                    { name: 'CompetitiveLandscapeId' },
                    { name: 'ProjectId' },
                    { name: 'ProjectName' },
                    { name: 'Company' },
                    { name: 'BrandName' },
                    { name: 'NonproprietaryName' },
                    { name: 'PointsOfDifferentiation' },
                    { name: 'ClinicalTrialName' },
                    { name: 'ClassName' },
                    { name: 'Created' },
                    { name: 'CreatedBy' },
                    { name: 'Updated' },
                    { name: 'UpdatedBy' }
                 ],
                 id: 'competitiveLandscapeId',
                 updaterow: function (rowid, rowdata) {
                     var dateTime = new Date();
                     var UpdatedBy = $("#MyUsername").val();
                     var projectIds = $("#currentProject").val();
                     var competitiveLandscapeModel = new NewCompetitiveLandscapeModel(projectIds, rowdata.CompetitiveLandscapeId, projectName,
                         rowdata.Company, rowdata.BrandName, rowdata.NonproprietaryName, rowdata.ClinicalTrialName,
                         rowdata.ClassName, rowdata.PointsOfDifferentiation, rowdata.Created, rowdata.CreatedBy, dateTime, UpdatedBy);
                     var data = JSON.stringify(competitiveLandscapeModel);
                     var CompetitiveLandscapeId;
                     if (typeof rowdata.CompetitiveLandscapeId === 'undefined' || rowdata.CompetitiveLandscapeId === null) {
                         CompetitiveLandscapeId = 0;
                     } else {
                         CompetitiveLandscapeId = rowdata.CompetitiveLandscapeId;
                     };


                     $.ajax({
                         url: getBaseURL() + deploymentDomainSubfix + "api/ApiCompetitiveLandscapes/" + CompetitiveLandscapeId,
                         data: data,
                         type: 'PUT',
                         async: false,
                         contentType: 'application/json; charset=utf-8',
                         dataType: 'json',
                         success: function () {
                             $("#CompetitiveLandscapegrid").jqxGrid('updatebounddata');
                         },
                     });
                 },
                 deleterow: function (rowid) {
                     var rowdata = $('#CompetitiveLandscapegrid').jqxGrid('getrowdata', rowid);
                     var CompetitiveLandscapeId;
                     if (typeof rowdata.CompetitiveLandscapeId === 'undefined' || rowdata.CompetitiveLandscapeId === null) {
                         return;
                     } else {

                         CompetitiveLandscapeId = rowdata.CompetitiveLandscapeId;
                         $.ajax({
                             url: getBaseURL() + deploymentDomainSubfix + "api/ApiCompetitiveLandscapes/" + CompetitiveLandscapeId,
                             type: 'DELETE',
                             async: false,
                             contentType: 'application/json; charset=utf-8',
                             dataType: 'json',
                             success: function () {
                                 $("#CompetitiveLandscapegrid").jqxGrid('updatebounddata');
                             },
                         });
                     };


                 }
             };

    var dataAdapter = new $.jqx.dataAdapter(competitiveLandscapeSource, {
        contentType: 'application/json; charset=utf-8',
        formatData: function () {

        }
    });


    $("#CompetitiveLandscapegrid").jqxGrid(
   {
       theme: gridTheme,
       width: '99%',
       altrows: true,
       sortable: true,
       columnsreorder: true,
       autoheight: true,
       selectionmode: 'singlerow',
       columnsresize: true,
       source: dataAdapter,
       editable: true,
       autorowheight: true,
       rowsheight: rowHeight,
       height: '50px',
       ready: function () {

       },
       columns: [
                         { text: 'Competitive Landscape Id', datafield: 'CompetitiveLandscapeId', editable: false, hidden: true, cellclassname: cellclass },
                         { text: 'projectId', datafield: 'ProjectId', editable: false, hidden: true, cellclassname: cellclass },
                         { text: 'project Name', datafield: 'ProjectName', editable: false, hidden: true, cellclassname: cellclass },
                         { text: 'Company', datafield: 'Company', editable: true, cellclassname: cellclass },
                         { text: 'Brand Name', datafield: 'BrandName', editable: true, cellclassname: cellclass },
                         { text: 'Nonproprietary Name', datafield: 'NonproprietaryName', editable: true, cellclassname: cellclass },
                         { text: 'Point(s) of Differentiation', datafield: 'PointsOfDifferentiation', editable: true, cellclassname: cellclass },
                         { text: 'Clinical TrialName', datafield: 'ClinicalTrialName', editable: true, cellclassname: cellclass },
                         { text: 'Class Name', datafield: 'ClassName', editable: true, cellclassname: cellclass },
                         { text: 'Created', datafield: 'Created', editable: false, hidden: true, cellclassname: cellclass },
                         { text: 'Created By', datafield: 'CreatedBy', editable: false, hidden: true, cellclassname: cellclass },
                         { text: 'Updated', datafield: 'Updated', editable: false, hidden: true, cellclassname: cellclass },
                         { text: 'Updated BY', datafield: 'UpdatedBy', editable: false, hidden: true, cellclassname: cellclass }
       ]
   });

    var rows = $('#CompetitiveLandscapegrid').jqxGrid('getrows');
    var counter = 3 - rows.length;
    if (counter >= 0) {
        for (var i = 0; i < counter; i++) {
            $("#CompetitiveLandscapegrid").jqxGrid('addrow', null, {});
        }
    };
};

// ****************************************************Competitive Landscape grid set up END***************************************************//
// inserts bullet points on the textarea boxes
var linestart = function (txt, st) {
    var ls = txt.split("\n");
    var i = ls.length - 1;
    ls[i] = st + ls[i];
    return ls.join("\n");
};

$('.bullettTextarea').on('keydown', function (e) {

    var t = $(this);
    t.css("max-height", null);
    if (e.which == 13) {
        t.val(linestart(t.val(), ' • '));
    } else if (e.which == 46) {
        t.val(' ');
    }
    return true;
});

function stringToMonthNumber(monthYear) {

    var month = monthNames[monthYear];

    return month;
}
var monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Code to make the pages scroll ease up and down with the controller on the side for the pages 
function filterPath(string) {
    return string
   .replace(/^\//, '')
   .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
   .replace(/\/$/, '');
}
var locationPath = filterPath(location.pathname);
var scrollElem = scrollableElement('html', 'body');
$('a[href*=#]').each(function () {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/, '')) {
        var $target = $(this.hash), target = this.hash;
        if (target) {
            var targetOffset = $target.offset().top;
            $(this).click(function (event) {
                event.preventDefault();
                $(scrollElem).animate({ scrollTop: targetOffset }, 400, function () {
                    // commented line below because it adds a hash to the url and a history item
                    // location.hash = target;
                });
            });
        }
    }
});

// use the first element that is "scrollable"
function scrollableElement() {
    for (var i = 0, argLength = arguments.length; i < argLength; i++) {
        var el = arguments[i],
         $scrollElement = $(el);
        if ($scrollElement.scrollTop() > 0) {
            return el;
        } else {
            $scrollElement.scrollTop(1);
            var isScrollable = $scrollElement.scrollTop() > 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
                return el;
            }
        }
    }
    return [];
};

// remove items from string array helper
var removeItem4Array = function (arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) != -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
};

//lists of the ids by template and the full list


var listFileds = ["ClientNameProjectLeadGroup", "ClientNameProjectLeadTitleGroup", "ClientNameProjectLeadEmailGroup", "ClientNameProjectLeadTelephoneGroup",
                                     "BrandInstituteDirectorsGroup", "BrandInstituteDirectorsEmailsGroup", "BrandInstituteDirectorsPhoneNumbersGroup", "BIBrandManagerGroup", "BIBrandManagerEmailGroup",
                                     "BIBrandManagerTelephoneGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup",
                                     "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",

                                     "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ProductOverviewGroup",
                                     "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
                                     "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
                                     "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
                                     "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                                     "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                                     "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                                     "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                                     "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup", "KeyWordsConceptsClinicalTrialGroup",
                                     "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                                     "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                                     "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
                                     "CreativeDirectionTableGroup", "AdditionalCommentsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
                                     "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "AttributesGroup",
                                     "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                                     , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                                     "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                                     "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
                                     "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
                                       //Consumer fields
                                     "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                     "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                     "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                     "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                     "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                     "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                     "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                                     "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                                     "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                                     "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                                     "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                     "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                     "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                     "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"

];

var NewFeePageList = ["ClientNameProjectLeadGroup", "ClientNameProjectLeadTitleGroup", "ClientNameProjectLeadEmailGroup", "ClientNameProjectLeadTelephoneGroup",
                    "BrandInstituteDirectorsGroup", "BrandInstituteDirectorsEmailsGroup", "BrandInstituteDirectorsPhoneNumbersGroup", "BIBrandManagerGroup",
                    "BIBrandManagerTelephoneGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup",
                    "BIBrandManagerEmailGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup"];

var listFiledsToTurnOff = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",
                       "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
                       "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
                       "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
                       "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                       "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                       "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                       "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                       "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                       "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                       "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                       "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup",
                       "CreativeDirectionTableGroup", "AdditionalCommentsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
                       "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "AttributesGroup",
                       "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                       , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                       "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                       "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
                       "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "CompetitiveLandscapeTableGroup", "KeyWordsConceptsClinicalTrialGroup"
                       //, "ClinicalGroup"


];

var ClinicalTrialNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ClinicalTrialNameGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                                    "WordsAvoidedInTrialNameGroup", "TrialNamingDirectionTableGroup", "AdditionalCommentsGroup", "CompetitiveLandscapeTableGroup"];//competitive landscape is missing

var ProgramBrandNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",
                                     "ConceptStatementGroup", "PositioningGroup", "NamesUnderConstructionGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "ProductAttributesTableGroup",
                                    "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "CreativeDirectionTableGroup", "AdditionalCommentsGroup"];

var ClassNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup", "IndicationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup", "NamesUnderConstructionGroup", "TherapeuticAreaGroup", "ProductDescriptionGroup",
                             "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "CreativeDirectionTableGroup", "AttributesGroup",
                             "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "AdditionalCommentsGroup", "CompetitiveLandscapeTableGroup"];

var TechnologyBrandNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup", "ConceptStatementGroup", "PositioningGroup", "NamesUnderConstructionGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "TechnologyDescriptionGroup",
                                        "ProductAttributesTableGroup", "PhysicianBenefitsGroup", "TechnologyAttributesRankGroup", "PatientBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "CreativeDirectionTableGroup",
                                        "AdditionalCommentsGroup", "CompetitiveLandscapeTableGroup"]; //need to add Attributes and benefits table and Competitive landscape table        

var ClinicalGroupCheckbox = ["CTN", "PBN", "CN", "TBN"];

var ClinicalGroupLabel = ["CTNGROUP", "PBNGROUP", "CNGROUP", "TBNGROUP"];


var RXListFields = ["DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
                    "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                    "LeverageBrandsGroup", "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
                    "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup",
                     "PointsOfDiffCompetitorsGroup", "CombinationProductGroup", "NamingStrategyGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup",
                    "ModifiersConsideredGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup", "ClinicalGroup",

                    "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "KeyWordsConceptsClinicalTrialGroup",
                    //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"

];

var MedicalDeviceListFields = ["MarketSafetyResearchAgenciesGroup", "RXLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "MOAGroup",
                    "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
                     "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                     , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
                     //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup", "CorporateAttributesGroup", "KeyWordsConceptsClinicalTrialGroup"

];

var OTCListFields = ["MarketSafetyResearchAgenciesGroup", "ProductOverviewGroup", "PhysicianBenefitsGroup", "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "NonpropLabel", "AnimalHealthLabel",
                     "NonPropGenericNameGroup", "USANINNSTEMGroup", "StandardDoseGroup", "AdditionalDoseGroup", "FrequencyOfAdministrationGroup", "MOAGroup",
                     "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                    "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
                     "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                     , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
                    , "PhysicianBenefitsGroup", "ClinicalGroup",
                     //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"

];

var NONPROPListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "ProductOverviewGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "AnimalHealthLabel",
                    "DrugClassGroup", "NonPropGenericNameGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup",
                    "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup",
                    "ProductDescriptionGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
                    "CreativeDirectionTableGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup", "NamingStrategyGroup",
                     "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                     , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "ProgramAttributesGroup",
                    "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
                     //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
];

var AnimalHealthListFields = ["MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "ProductOverviewGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "AdditionalDoseGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                     "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
                      "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                      , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
                    , "PhysicianBenefitsGroup", "ClinicalGroup",
                     //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"

];

var RxBrandNameLineExtensionListFields = ["RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup",
                                        "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup", "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup",
                                        "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup", "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup",
                                        "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup", "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup",
                                        "WordsApproproateInTrialNameGroup", "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup",
                                        "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
                                         "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                                        , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                                         "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
                                          //Consumer fields
                                        "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                        "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                        "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                        "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                        "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                        "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                        "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                                        "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                                        "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                                        "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                                        "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                        "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                        "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                        "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"


];

var ModifierNameLineExtensionListFields = ["RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup",
                                            "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup", "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup",
                                            "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup", "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup",
                                            "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup", "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup",
                                            "WordsApproproateInTrialNameGroup", "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup",
                                            "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", , "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup",
                                            "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup"
                                            , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                                             "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
                                              //Consumer fields
                                            "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                            "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                            "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                            "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                            "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                            "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                            "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                                            "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                                            "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                                            "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                                            "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                            "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                            "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                            "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
];


var ClinicalTrialNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
                                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
                                    "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                                    "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                                    "LeverageBrandsGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
                                       "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "CreativeDirectionTableGroup",
                                    "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "ProgramAttributesGroup",
                                    "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
                                                     //Consumer fields
                                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"

];

var ProgramBrandNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup",
                    "MOAGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                    "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup",
                    "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "CompetitiveLandscapeTableGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                    , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
                     //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"


];

var ClassNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup",
                    "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticClassGroup",
                     "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                    "LeverageBrandsGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup",
                    "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup",
                     "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                     , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "ProgramAttributesGroup",
                    "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
                     //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
];


var TechnologyBrandNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup",
                     "MOAGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup",
                     "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                    "LeverageBrandsGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup",
                    "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup"
                    , "CorporateAttributesGroup", "ProductAttributesGroup", "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup", "ProductBenefitsGroup", "ServiceBenefitsGroup",
                    "ProgramAttributesGroup", "ProgramBenefitsGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup", "NamingStrategyGroup",
                    "ModifiersConsideredGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup",
                     //Consumer fields
                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"


];

var ConsumerListFields = ["CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                                "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup",
                                "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "YourRankInServiceCategoryGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                                "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                                "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup", "PointsOfDiffCompetitorsGroup"

];

var ConsumerBusinessProduct = ["PrimaryMarketsGroup", "SecondaryMarketsGroup", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
                                "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
                                "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "MOAGroup",
                                "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                                "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                                "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                                "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                                "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                                "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                                "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                                "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
                                "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
                                "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "AttributesGroup",
                                "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                               , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                                 "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
                                "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
                                //Green template fields
                                "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                                "VisionStatementGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "OrgInternalNamingGuidelinesGroup",
                                "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourServiceGroup",
                               "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsPrimarySegmentedGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"



];

var CorporateIDListFields = ["MarketSafetyResearchAgenciesGroup",
                                "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ProductOverviewGroup",
                                "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
                                "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
                                "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "MOAGroup",
                                "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                                "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                                "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                                "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                                "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                                "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                                "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                                "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
                                 "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
                                "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                                , "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                                "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "ServiceAttributesGroup",
                                "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
                                "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
                                  //Consumer fields
                               "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup",
                                "CurrentlyUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "OrgInternalNamingGuidelinesGroup",
                                 "YourRankInProductCategoryGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                                "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                                "AboutServiceProudGroup", "CompetitorsKnownGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"



];

var ServiceListFields = ["ClientNameProjectLeadGroup", "ClientNameProjectLeadTitleGroup", "ClientNameProjectLeadEmailGroup", "ClientNameProjectLeadTelephoneGroup",
                                "BrandInstituteDirectorsGroup", "BrandInstituteDirectorsEmailsGroup", "BrandInstituteDirectorsPhoneNumbersGroup", "BIBrandManagerGroup", "BIBrandManagerEmailGroup",
                                "BIBrandManagerTelephoneGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup",
                                "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",

                                "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ProductOverviewGroup",
                                "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
                                "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
                                "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
                                "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
                                "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
                                "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
                                "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
                                "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
                                "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
                                "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
                                "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
                                "CreativeDirectionTableGroup", "AdditionalCommentsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
                                "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "AttributesGroup",
                                "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
                                , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
                                "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
                                "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
                                "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
                                  //Consumer fields
                                "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
                                "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
                                "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
                                "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
                                "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"


];

//
//var listFileds = ["ClientNameProjectLeadGroup", "ClientNameProjectLeadTitleGroup", "ClientNameProjectLeadEmailGroup", "ClientNameProjectLeadTelephoneGroup",
//                                "BrandInstituteDirectorsGroup", "BrandInstituteDirectorsEmailsGroup", "BrandInstituteDirectorsPhoneNumbersGroup", "BIBrandManagerGroup", "BIBrandManagerEmailGroup",
//                                "BIBrandManagerTelephoneGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup",
//                                "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",
//
//                                "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ProductOverviewGroup",
//                                "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
//                                "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
//                                "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
//                                "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                                "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                                "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                                "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                                "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                                "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                                "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                                "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
//                                "CreativeDirectionTableGroup", "AdditionalCommentsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
//                                "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "AttributesGroup",
//                                "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                                , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                                "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                                "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
//                                "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
//                                  //Consumer fields
//                                "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                                "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                                "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                                "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                                "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//];
//
//var NewFeePageList = ["ClientNameProjectLeadGroup", "ClientNameProjectLeadTitleGroup", "ClientNameProjectLeadEmailGroup", "ClientNameProjectLeadTelephoneGroup",
//                    "BrandInstituteDirectorsGroup", "BrandInstituteDirectorsEmailsGroup", "BrandInstituteDirectorsPhoneNumbersGroup", "BIBrandManagerGroup",
//                    "BIBrandManagerTelephoneGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup",
//                    "BIBrandManagerEmailGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup"];
//
//var listFiledsToTurnOff = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",
//                       "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
//                       "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
//                       "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
//                       "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                       "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                       "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                       "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                       "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                       "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                       "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                       "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup",
//                       "CreativeDirectionTableGroup", "AdditionalCommentsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
//                       "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "AttributesGroup",
//                       "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                       , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                       "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                       "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
//                       "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "CompetitiveLandscapeTableGroup"
//                       //, "ClinicalGroup"
//
//
//];
//
//var ClinicalTrialNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ClinicalTrialNameGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                                    "WordsAvoidedInTrialNameGroup", "TrialNamingDirectionTableGroup", "AdditionalCommentsGroup", "CompetitiveLandscapeTableGroup"];//competitive landscape is missing
//
//var ProgramBrandNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",
//                                     "ConceptStatementGroup", "PositioningGroup", "NamesUnderConstructionGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "ProductAttributesTableGroup",
//                                    "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "CreativeDirectionTableGroup", "AdditionalCommentsGroup"];
//
//var ClassNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup", "IndicationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup", "NamesUnderConstructionGroup", "TherapeuticAreaGroup", "ProductDescriptionGroup",
//                             "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "CreativeDirectionTableGroup", "AttributesGroup",
//                             "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "AdditionalCommentsGroup", "CompetitiveLandscapeTableGroup"];
//
//var TechnologyBrandNameSelectedList = ["ClientNameProjectLeadTitleGroup", "PrimaryMarketsGroup", "SecondaryMarketsGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup", "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup", "ConceptStatementGroup", "PositioningGroup", "NamesUnderConstructionGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "TechnologyDescriptionGroup",
//                                        "ProductAttributesTableGroup", "PhysicianBenefitsGroup", "TechnologyAttributesRankGroup", "PatientBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "CreativeDirectionTableGroup",
//                                        "AdditionalCommentsGroup", "CompetitiveLandscapeTableGroup"]; //need to add Attributes and benefits table and Competitive landscape table        
//
//var ClinicalGroupCheckbox = ["CTN", "PBN", "CN", "TBN"];
//
//var ClinicalGroupLabel = ["CTNGROUP", "PBNGROUP", "CNGROUP", "TBNGROUP"];
//
//var RXListFields = ["DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
//                    "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                    "LeverageBrandsGroup", "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
//                    "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup",
//                     "PointsOfDiffCompetitorsGroup", "CombinationProductGroup", "NamingStrategyGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup",
//                    "ModifiersConsideredGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup", "ClinicalGroup",
//
//                    "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "KeyWordsConceptsClinicalTrialGroup",
//                    //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//];
//
//var MedicalDeviceListFields = ["MarketSafetyResearchAgenciesGroup", "RXLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "MOAGroup",
//                    "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
//                     "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                     , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
//                     //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup", "CorporateAttributesGroup"
//
//];
//
//var OTCListFields = ["MarketSafetyResearchAgenciesGroup", "ProductOverviewGroup", "PhysicianBenefitsGroup", "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "NonpropLabel", "AnimalHealthLabel",
//                     "NonPropGenericNameGroup", "USANINNSTEMGroup", "StandardDoseGroup", "AdditionalDoseGroup", "FrequencyOfAdministrationGroup", "MOAGroup",
//                     "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                    "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
//                     "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                     , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
//                    , "PhysicianBenefitsGroup", "ClinicalGroup",
//                     //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//];
//
//var NONPROPListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "ProductOverviewGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "AnimalHealthLabel",
//                    "DrugClassGroup", "NonPropGenericNameGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup",
//                    "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup",
//                    "ProductDescriptionGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
//                    "CreativeDirectionTableGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup", "NamingStrategyGroup",
//                     "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                     , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "ProgramAttributesGroup",
//                    "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
//                     //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//];
//
//var AnimalHealthListFields = ["MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "ProductOverviewGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "AdditionalDoseGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                     "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
//                      "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                      , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
//                    , "PhysicianBenefitsGroup", "ClinicalGroup",
//                     //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//];
//
//var RxBrandNameLineExtensionListFields = ["RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup",
//                                        "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup", "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup",
//                                        "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup", "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup",
//                                        "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup", "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup",
//                                        "WordsApproproateInTrialNameGroup", "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup",
//                                        "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
//                                         "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                                        , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                                         "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
//                                          //Consumer fields
//                                        "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                        "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                        "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                        "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                        "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                        "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                        "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                                        "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                                        "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                                        "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                                        "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                        "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                        "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                        "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//
//];
//
//var ModifierNameLineExtensionListFields = ["RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup", "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup",
//                                            "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup", "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup",
//                                            "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup", "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup",
//                                            "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup", "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup",
//                                            "WordsApproproateInTrialNameGroup", "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup",
//                                            "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", , "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup",
//                                            "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup"
//                                            , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                                             "ProductBenefitsGroup", "ServiceBenefitsGroup", "ProgramAttributesGroup", "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup",
//                                              //Consumer fields
//                                            "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                            "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                            "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                            "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                            "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                            "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                            "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                                            "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                                            "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                                            "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                                            "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                            "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                            "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                            "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//];
//
//
//var ClinicalTrialNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
//                                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
//                                    "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                                    "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                                    "LeverageBrandsGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                                    "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                                    "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup",
//                                       "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "CreativeDirectionTableGroup",
//                                    "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "ProgramAttributesGroup",
//                                    "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
//                                                     //Consumer fields
//                                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//];
//
//var ProgramBrandNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
//                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup",
//                    "MOAGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                    "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                    "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup",
//                    "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "CompetitiveLandscapeTableGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                    , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
//                     //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//
//];
//
//var ClassNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
//                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup",
//                    "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticClassGroup",
//                     "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                    "LeverageBrandsGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup",
//                    "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup",
//                     "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup", "NamingStrategyGroup", "ModifiersConsideredGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                     , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                    "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "PhysicianBenefitsGroup", "ProgramAttributesGroup",
//                    "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup",
//                     //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//];
//
//
//var TechnologyBrandNameListFields = ["MarketSafetyResearchLabel", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel", "ProductOverviewGroup", "DrugClassGroup",
//                    "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup", "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup",
//                     "MOAGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup",
//                     "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                    "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                    "LeverageBrandsGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                    "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                    "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup", "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup",
//                    "WordsInClassNameGroup", "NovelConceptsGroup", "UnderlyingTechGroup", "ClassDifferenceGroup", "AttributesGroup", "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup"
//                    , "CorporateAttributesGroup", "ProductAttributesGroup", "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                    "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup", "ProductBenefitsGroup", "ServiceBenefitsGroup",
//                    "ProgramAttributesGroup", "ProgramBenefitsGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup", "NamingStrategyGroup",
//                    "ModifiersConsideredGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup",
//                     //Consumer fields
//                    "TargetAudienceGroup", "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                    "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                    "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                    "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                    "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                    "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                    "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                    "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                    "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                    "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                    "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                    "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                    "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                    "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//
//];
//
//var ConsumerListFields = ["CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                                "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup",
//                                "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "YourRankInServiceCategoryGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                                "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                                "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup", "PointsOfDiffCompetitorsGroup"
//
//];
//
//var ConsumerBusinessProduct = ["PrimaryMarketsGroup", "SecondaryMarketsGroup", "MarketSafetyResearchAgenciesGroup", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
//                                "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
//                                "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "MOAGroup",
//                                "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                                "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                                "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                                "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                                "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                                "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                                "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                                "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
//                                "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
//                                "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "AttributesGroup",
//                                "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                               , "OrganizationAttributesGroup", "OrganizationBenefitsGroup", "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                                 "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
//                                "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
//                                //Green template fields
//                                "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                                "VisionStatementGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "OrgInternalNamingGuidelinesGroup",
//                                "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourServiceGroup",
//                               "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsPrimarySegmentedGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//
//
//];
//
//var CorporateIDListFields = ["MarketSafetyResearchAgenciesGroup",
//                                "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ProductOverviewGroup",
//                                "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
//                                "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
//                                "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "MOAGroup",
//                                "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                                "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                                "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                                "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                                "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                                "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                                "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                                "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
//                                 "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
//                                "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                                , "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                                "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "ServiceAttributesGroup",
//                                "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
//                                "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
//                                  //Consumer fields
//                               "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup",
//                                "CurrentlyUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "OrgInternalNamingGuidelinesGroup",
//                                 "YourRankInProductCategoryGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                                "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                                "AboutServiceProudGroup", "CompetitorsKnownGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//
//
//];
//
//var ServiceListFields = ["ClientNameProjectLeadGroup", "ClientNameProjectLeadTitleGroup", "ClientNameProjectLeadEmailGroup", "ClientNameProjectLeadTelephoneGroup",
//                                "BrandInstituteDirectorsGroup", "BrandInstituteDirectorsEmailsGroup", "BrandInstituteDirectorsPhoneNumbersGroup", "BIBrandManagerGroup", "BIBrandManagerEmailGroup",
//                                "BIBrandManagerTelephoneGroup", "NamingScopeGroup", "BIServicesGroup", "TrademarkClassGroup",
//                                "MarketSafetyResearchLabel", "MarketSafetyResearchCountriesGroup", "MarketSafetyResearchAgenciesGroup",
//
//                                "PrimaryMarketsGroup", "SecondaryMarketsGroup", "ProductOverviewGroup",
//                                "MarketSafetyResearchLabel", "RXLabel", "MedicalDeviceLabel", "OTCLabel", "NonpropLabel", "AnimalHealthLabel",
//                                "DrugClassGroup", "NonPropGenericNameGroup", "USANINNSTEMGroup", "IndicationGroup", "StandardDoseGroup", "AdditionalDoseGroup",
//                                "formulationDropdownlistGroup", "RouteOfAdminitrationDropdownlistGroup", "FrequencyOfAdministrationGroup", "ConceptStatementGroup", "PositioningGroup", "MOAGroup",
//                                "NamesUnderConstructionGroup", "BeingConsideredByGroup", "NamesRejectedGroup", "RationaleForRejectionGroup", "DeviceDescriptionGroup", "ContainDrugGroup", "TherapeuticAreaGroup", "TherapeuticClassGroup",
//                                "ProductDescriptionGroup", "INDNumberGroup", "CASNumberGroup", "MolecularFormulaGroup", "MolecularWeightGroup", "StructuralFormulaGroup", "PharmacologicalGroup",
//                                "ChemicalNameGroup", "ManufacturerSubmitterGroup", "ClinicalTrialStartDateGroup", "ClinicalDevelopmentGroup", "CompanionOrLivestockGroup", "AssociatedUnderlyingDrugTechnologyGroup",
//                                "LeverageBrandsGroup", "ClinicalTrialNameGroup", "TrialPhaseGroup", "TrialOverviewGroup", "TrialObjectivesGroup", "TrialNamesUnderConsiderationGroup",
//                                "TrialNamesForOtherPhasesGroup", "LeveragePastTrialNamesGroup", "ClinicalTrialsForTherapeuticAgentsGroup", "WordsIncludedInTrialNameGroup", "WordsApproproateInTrialNameGroup",
//                                "WordsAvoidedInTrialNameGroup", "ProgramDescriptionGroup", "BusinessUnitTherapeuticAreaGroup",
//                                "OverlappingValuesGroup", "MarketNeedGroup", "CompetitiveServicesOfferedGroup", "NameFocusGroup", "WordsInClassNameGroup", "NovelConceptsGroup",
//                                "UnderlyingTechGroup", "ClassDifferenceGroup", "TechnologyDescriptionGroup", "ProductAttributesTableGroup", "CompetitiveLandscapeTableGroup",
//                                "CreativeDirectionTableGroup", "AdditionalCommentsGroup", "ProductLineExtensionGroup", "ReasonForNewProductGroup", "CombinationProductGroup",
//                                "NamingStrategyGroup", "ModifiersConsideredGroup", "PhysicianBenefitsGroup", "KeyWordsConceptsGroup", "ImageryGroup", "AvoidGroup", "AttributesGroup",
//                                "BenefitsGroup", "DistinguishingCharacteristicsKeywordsGroup", "TrialNamingDirectionTableGroup", "WordsAndAssociationsGroup"
//                                , "CorporateAttributesGroup", "ProductAttributesGroup", "OrganizationAttributesGroup", "OrganizationBenefitsGroup",
//                                "TechnologyAttributesGroup", "TechnologyBenefitsGroup", "CorporateBenefitsGroup", "ServiceAttributesGroup",
//                                "ProductBenefitsGroup", "ServiceBenefitsGroup", "PatientBenefitsGroup", "ProgramAttributesGroup",
//                                "ProgramBenefitsGroup", "TechnologyAttributesRankGroup", "IndustrySpecificTerminologyGroup", "PointsOfDiffCompetitorsGroup", "ClinicalGroup", "ProjectGroup", "salesDateGroup", "MarketingandSafetyResearchLabelGroup",
//                                  //Consumer fields
//                                "CorporateOverviewGroup", "ServiceOverviewGroup", "ProductServiceOverviewGroup", "ConceptStatementProductOverviewGroup", "OrganizationOverviewGroup",
//                                "TechnologyOverviewGroup", "ProjectObjectiveGroup", "CorporateMissionStatementGroup", "PrimaryCompetitionGroup", "ConceptsUsedByCompetitionGroup", "ColorsUsedByCompetitionGroup",
//                                "ConceptsToExploreGroup", "ConceptsToAvoidGroup", "ColorsToExploreGroup", "ShapesToExploreGroup", "ImageryConveyedInNewLogoGroup", "LogoActionMovementGroup",
//                                "LogoWithParticularStyleGroup", "NewLogoWordsGroup", "CompanyTagLineGroup", "CompanyMissionStatementGroup", "MainDomainNameGroup", "OtherDomainNamesGroup",
//                                "WebHostingGroup", "WebsiteConnectedToDatabaseGroup", "RequireDatabaseGroup", "DescribeWhatCompanyDoesGroup", "AbsolutelyWantOnSiteGroup", "MustBeOnHomepageGroup",
//                                "MustBeVisibleGroup", "LinksNeededGroup", "CompetitorsGroup", "WhatCompetitorsUseGroup", "ListGeneralSitesGroup", "TextLogosAvailableGroup", "SupplyingTheTextGroup",
//                                "SupplyYourOwnGraphicsGroup", "RequireSpaceForAdvertisingGroup", "CommunicateWithYourVisitorsGroup", "SiteNoNosGroup", "AdditionalCommentsFeedbackGroup", "MissionStatementGroup",
//                                "VisionStatementGroup", "CurrentlyUnderConsiderationGroup", "CorporateNamesUnderConsiderationGroup", "TaglinesUnderConsiderationGroup", "TaglinesUsedGroup", "InternalNamingGuidelinesGroup", "OrgInternalNamingGuidelinesGroup",
//                                "PartOfTheIndustryGroup", "YourRankInProductCategoryGroup", "RankProductCategoryNewCompanyGroup", "YourRankInServiceCategoryGroup", "YourRankInProductCategoryTechGroup", "WorldNeedsYourProductGroup", "WorldNeedsYourServiceGroup",
//                                "ProvideAudienceGroup", "UnsungAbilityAboutProductGroup", "UnsungAbilityAboutYouGroup", "UnsungAbilityAboutYourServiceGroup", "AboutProductProudGroup",
//                                "AboutCompanyProudGroup", "AboutServiceProudGroup", "CompetitorsKnownGroup", "CompetitorsPrimarySegmentedGroup", "WinHeadToHeadGroup", "CompanyMissionValuesGroup", "CategoryProductIndustryGroup", "ProductUniqueGroup", "RankPointOFDiffGroup",
//                                "ImageryAssociatedAttriBenefitGroup", "NovelProprietaryGroup", "TaglinesCompetitorsGroup", "CompanyMissionGroup", "CompanyVisionGroup", "CompanyPersonailtyGroup",
//                                "TaglineReflectiveGroup", "OrganizationCoreFocusGroup", "OrganizationRankGroup", "WorldNeedYourOrgGroup", "WorldNeedYourTechGroup", "ProvideYourAudienceGroup",
//                                "UnsungAbilityOrgGroup", "UnsungAbilityTechGroup", "OrganizationProudGroup", "TechnologyProudGroup", "HeadToHeadGroup", "OrgMissionValuesGroup"
//
//
//];

var TaglineListfields = [


];

var NonProfitListFields = [


];

var TechnologyListFields = [


];

var LogoDesignListFields = [

];

var WebsiteDesignListFields = [


];

var OtherCustomListFields = [

];
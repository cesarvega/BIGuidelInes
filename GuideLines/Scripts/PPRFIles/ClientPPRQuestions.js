
//Global vars 
//var deploymentDomainSubfix = "pprwebsite/";
var deploymentDomainSubfix = "";

var projectName = "";
var projectId = "";
var gridTheme = 'bootstrap';
var rowHeight = 35;
var clientdId = 0;
var ClientFullName = "";
var ClientProjectName = "";
var idleTime = 0;
var checkIdleTimeAgain = "";
var oldValue = "";
var oldValue2 = "";
var sender = "";
var leadDirector = "";
var leadDirectorEmail = "";
var beingConsiderByCounter = 0;
var response = new $.jqx.response();
// idle timer systmem 
var goToBIhelp = function () {
    //    var strUrl = "http://www.brandinstitute.com/contact_miami.asp";
    //    window.open(strUrl);
    $("#intructionsAlert").modal('show');
};

var sendUpdateTime = setInterval(sendUpdateTimeSignal, 60000);
var setIdleTimer = setInterval(setIdleTime, 600000);
var checkIdleTimer = setInterval(checkIdleTime, 610000);

var fadeInVersionControl = function () {
    //$("#toggleversionControlIn").css("display", "none");
    //$("#toggleversionControlOut").css("display", "block");
    $(".versioncontrol").fadeOut("slow", "linear");
};

var fadeOutVersionControl = function () {
    //$("#toggleversionControlIn").css("display", "block");
    //$("#toggleversionControlOut").css("display", "none");
    $(".versioncontrol").fadeIn("slow", "linear");
};

var reloadpage = function () {

    window.location.reload();

};

var stayInSession = function () {
    idleTime = 0;
    clearInterval(checkIdleTimer);
    clearInterval(setIdleTimer);
    clearInterval(checkIdleTimeAgain);
    checkIdleTimer = setInterval(checkIdleTime, 610000);
    setIdleTimer = setInterval(setIdleTime, 600000);
};

function setIdleTime() {
    idleTime = 1;
};

function goTothanksyouPage() {
    location.replace(getBaseURL() + deploymentDomainSubfix + '/PPRTemplateForm/thankYou');

};

// check on mouseve motion
$(function () {
    var response = new $.jqx.response();
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
        $('#idleAlert').modal('show')
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
        location.replace(getBaseURL() + deploymentDomainSubfix + '/PPRTemplateForm/thankYou');
    };
};

function sendUpdateTimeSignal() {

    //if (projectName != "" || projectName != null) {
    //    var browserTypeAndversion = response.browser.name + " " + response.browser.version + " " + response.os.name + " " + response.os.version;
    //    var clientName = ClientFullName;
    //    var projectName = ClientProjectName;
    //    var createdBy = "";
    //    var timeStamp = new Date();
    //    var created = "";
    //    var Updated = timeStamp;
    //    var UpdatedBy = clientName;
    //    var clientQueueModel = new NewClientQueueModel(0, clientName, projectName, timeStamp, browserTypeAndversion, created, createdBy,Updated, UpdatedBy);
    //    var Data = JSON.stringify(clientQueueModel);
    //    var clientQueueUrl = getBaseURL() + deploymentDomainSubfix + "api/ApiClientQueue/";
    //    $.ajax({
    //        url: clientQueueUrl,
    //        data: Data,
    //        type: 'POST',
    //        async: false,
    //        contentType: 'application/json;charset=utf-8',
    //        dataType: 'json',
    //        success: function (data) {

    //            //if (data.length > 0) {

    //            //    var dataSplit = data.split(":");

    //            //    if (dataSplit[0] == "the account still locked by ") {
    //            //        $(document).find("input,textarea").attr('disabled', 'disabled');
    //            //        $("#savedataBtn").attr("disabled", "disabled");
    //            //        $("#CompetitiveLandscapegrid").jqxGrid({ disabled: true });
    //            //        $("#deleterowbutton").jqxButton({ disabled: true });
    //            //        $("#addrowbutton").jqxButton({ disabled: true });
    //            //        $("#lockLabel").text("Project is locked by: " + dataSplit[1]);
    //            //        $("#messagLock").text("Please wait until project is unlocked and refresh your browser to access.");
    //            //        $("#lockAlert").modal("show");
    //            //        $("#lockbtn").css("display", "block");
    //            //        $("#refreshbtn").css("display", "none");
    //            //    } else if (dataSplit[0] == "the account is unloked, please refresh the page") {
    //            //        $("#lockbtn").css("display", "none");
    //            //        $("#refreshbtn").css("display", "block");
    //            //    };
    //            //};
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
        var UpdatedBy = clientName;
        var clientQueueModel = new NewClientQueueModel(0, clientName, ClientProjectName, timeStamp, broserTypeAndversion, created, createdBy, Updated, UpdatedBy);
        var data = JSON.stringify(clientQueueModel);
        var clientQueueUrl = getBaseURL() + deploymentDomainSubfix + "api/ApiClientQueue/";
        $.ajax({
            url: clientQueueUrl,
            data: data,
            type: 'POST',
            async: false,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            success: function(data1) {

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

function printPage() {
    window.print();
}

function selectQuestions() {
    $(".selectCheckboxTextArea").css('display', 'block');
    $("#selectQuestions").css('display', 'none');
    $("#sendQuestions").css('display', 'block');
    $("#sendQuestions").removeAttr("disabled", "disabled");

};

function sendQuestions() {
    $("#sendQuestonsToClientButton").click();
    $(".selectCheckboxTextArea").css('display', 'none');
    $(".selectCheckboxTextArea").css('display', 'none');
    $("#selectQuestions").css('display', 'block');
    $("#sendQuestions").css('display', 'none');
};

var createClientQuestionary = function () {
    var clientQuestions = "";
    var clientFullName = ClientFullName.replace("%", " ");
    var clientTitle = $('#clientTitle').val();;
    var clientFirstName = ""; // PENDING
    var clientLastName = "";// PENDING
    var clientPassword = "";// PENDING
    var clientProject = ClientProjectName;
    var clientProjectId = projectId;
    var clientAddress = sender;
    var clientPhone = "";// PENDING
    var clientEmail = $('#emailAdresses').val();
    var clientCompany = "";// PENDING
    var dateTime = new Date();
    var createdBy = $("#MyUsername").val();
    var clientEmailSubject = $("#currentProject").text();
    var clientEmailBody = "Dear " + sender + "<br/><br/>Project " + "<a href='https://tools.brandinstitute.com/pprwebsite?projectName=" + ClientProjectName + "'>" + ClientProjectNameDisplay + "</a>" + " was edited by the client : <strong>" + clientFullName + "</strong><br/>Thank you!<br/>";
    // var adminEmailAddress = "spiergrossi@brandInstitute.com";
    var adminEmailAddress = "cvega@brandinstitute.com";
    var clientProjectTemplate = $("#templateType").text();
    var clientForEmailModel = new NewClientModel(clientdId, clientFullName, clientTitle, clientFirstName,
                                                                             clientLastName, clientPassword, clientProject, clientProjectId, clientAddress, clientPhone, clientEmail,
                                                                           clientCompany, clientQuestions, clientEmailSubject, clientEmailBody, adminEmailAddress, clientProjectTemplate,
                                                                             dateTime, createdBy, null, null);
    var Data = JSON.stringify(clientForEmailModel);
    var clientFormURL = getBaseURL() + deploymentDomainSubfix + "api/ApiClient";

    $.ajax({
        url: clientFormURL,
        type: 'POST',
        data: Data,
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (data) {
            $('#saveClientAlertBtn').click();
        }
    });

    //leavePageOrNot();
};

function leavePageOrNot() {

    if (confirm("Press a button!") == true) {
        location.replace(getBaseURL() + deploymentDomainSubfix + '/PPRTemplateForm/thankYou');
    }
}

var validateInputs = function () {
    $('.validationMessage').css('display', 'none');
    var a = ['emailAdresses', 'emailAdressesSubject', 'emailAdressesBody',
                'adminEmailAdresses', 'clientName', 'clientTitle'
    ];

    for (i = 0; i < a.length ; i++) {
        var isvalid = validationChecker(a[i]);
        if (!isvalid) {
            if (a[i] == 'emailAdresses')
            { message = 'Email Adresses' }
            else if (a[i] == 'emailAdressesSubject')
            { message = 'Email Subject' }
            else if (a[i] == 'emailAdressesBody')
            { message = 'Email Body' }
            else if (a[i] == 'adminEmailAdresses')
            { message = 'Admin Email Adresses' }
            else if (a[i] == 'clientName')
            { message = 'Client Name' }
            else if (a[i] == 'clientTitle')
            { message = 'Client Title' };
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
    } else { return true; };
};

$('#countriesList').on('close', function () {
    var oldValue = $("#PrimaryMarketsInput").val();
    var items = $("#countriesList").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });
    if (oldValue != selectedItems) {
        if (oldValue.length > 0 && oldValue != "<strike> </strike>" && oldValue != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") { randomColor = "rgb(71,164,71)" };
            oldValue = oldValue.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#PrimaryMarketsGroup").find('.selectCheckboxTextArea').after("  <div style='display:none' class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + oldValue +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");
        };

        $("#PrimaryMarketsInput").val(selectedItems);
        $("#PrimaryMarketsInput").trigger('autosize.resize');

        autoSavedata();
    };
});

$('#countriesList2').on('close', function () {
    var oldValue = $("#SecondaryMarketInput").val();
    var items = $("#countriesList2").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });

    if (oldValue != selectedItems) {
        if (oldValue.length > 0 && oldValue != "<strike> </strike>" && oldValue != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") { randomColor = "rgb(71,164,71)" };
            oldValue = oldValue.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#SecondaryMarketsGroup").find('.selectCheckboxTextArea').after("  <div  style='display:none'  class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" +
                                                                                                        randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " +
                                                                                                        oldValue + "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>"
                                                                                                        + adminUser + " " + datetime + "</span></i></br> </div>");
        };

        $("#SecondaryMarketInput").val(selectedItems);
        $("#SecondaryMarketInput").trigger('autosize.resize');

        autoSavedata();
    };
});

$('#formulationDropdownlist').on('close', function () {
    var oldValue = $("#formulationInput").val();
    var items = $("#formulationDropdownlist").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });
    if (oldValue != selectedItems) {
        if (oldValue.length > 0 && oldValue != "<strike> </strike>" && oldValue != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") { randomColor = "rgb(71,164,71)" };
            oldValue = oldValue.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#formulationDropdownlistGroup").find('.selectCheckboxTextArea').after("  <div   style='display:none' class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + oldValue +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");
        };

        $("#formulationInput").val(selectedItems);
        $("#formulationInput").trigger('autosize.resize');
        autoSavedata();
    };
});

$('#RouteOfAdminitrationDropdownlist').on('close', function () {
    var oldValue = $("#RouteOfAdminitrationInput").val();
    var items = $("#RouteOfAdminitrationDropdownlist").jqxComboBox('getCheckedItems');
    var selectedItems = "";
    $.each(items, function (index) {
        selectedItems += this.label;
        if (items.length - 1 != index) {
            selectedItems += ", ";
        }
    });
    if (oldValue != selectedItems) {
        if (oldValue.length > 0 && oldValue != "<strike> </strike>" && oldValue != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") { randomColor = "rgb(71,164,71)" };
            oldValue = oldValue.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#RouteOfAdminitrationDropdownlistGroup").find('.selectCheckboxTextArea').after("  <div  style='display:none' class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" +
                                                                                                                                    randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " +
                                                                                                                                    oldValue + "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" +
                                                                                                                                    adminUser + " " + datetime + "</span></i></br> </div>");
        };
        $("#RouteOfAdminitrationInput").val(selectedItems);
        $("#RouteOfAdminitrationInput").trigger('autosize.resize');
        autoSavedata();
    };
});

$("#beingConsiderByDropdown").on('click', 'li a', function () {
    $("#BeingConsideredByInput").val($(this).text());
});

$(".form-control").change(function () {
    if ($(this)[0].id != "searchproject" && $(this)[0].id != "emailAdresses" && $(this)[0].id != "clientName" &&
        $(this)[0].id != "clientTitle" && $(this)[0].id != "emailAdressesSubject" && $(this)[0].id != "emailAdressesBody" && $(this)[0].id != "adminEmailAdresses") {

        var newTextinput = $(this).val();
        if (OldValue.length > 17 && OldValue != newTextinput && OldValue != "<strike> </strike>" && OldValue != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") { randomColor = "rgb(71,164,71)" }
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $(this).parent().find('.selectCheckboxTextArea').after("  <div  style='display:none' class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + OldValue +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");
        };
        autoSavedata();
    }
});

$('.form-control').click(function () {
    OldValue = $(this).val();
    OldValue = OldValue.strike();
    var beingConsiderByCounter = 0
});

$('.form-control').select(function (e) {
    OldValue = $(this).val();
    OldValue = OldValue.strike();
    var beingConsiderByCounter = 0;
});

// Especial dropdown listener
$('#beingConsiderByDropdown').on('click', function () {

    if (beingConsiderByCounter == 0) {
        oldValue2 = $("#BeingConsideredByInput").val();
        beingConsiderByCounter = beingConsiderByCounter + 1;
    } else {

        var newTextinput = $("#BeingConsideredByInput").val();
        beingConsiderByCounter = 0;
        if (oldValue2.length > 0 && oldValue2 != newTextinput && oldValue2 != "<strike> </strike>" && oldValue2 != "<strike>  </strike>") {
            var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            if (randomColor == "rgb(255,255,255)") {
                randomColor = "rgb(71,164,71)";
            };
            oldValue2 = oldValue2.strike();
            var currentdate = new Date();
            var datetime = " : " + stringToMonthNumber(currentdate.getMonth()) + " /  " + (currentdate.getDate() + 1) + " / " + currentdate.getFullYear() +
                " Time:  " + getClockTime();
            var adminUser = $("#MyUsername").val();
            $("#BeingConsideredByGroup").find('.selectCheckboxTextArea').after("  <div style='display:none' class='versioncontrol'><span class='versionControlItem' id='TestingInputLabel' style='color:" + randomColor + ";max-width:500px; display:block; word-wrap:break-word;'> " + oldValue2 +
                "</span> " + "<i><span class='versionControlItem' style='color: darkgrey;font-size-adjust: 0.5;float: right;'>" + adminUser + " " + datetime + "</span></i></br> </div>");

        };
        autoSavedata();
    };

});

$(".selectCheckboxTextArea ").change(function () {
    autoSavedata();
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

    //add and delete new rows  buttons for competitive landscape tables    

    //$("#intructionsAlert").modal('show');
    $("#savedataBtn").attr("disabled", "disabled");
    $("#printBtn").attr("disabled", "disabled");
    $("#selectQuestions").attr("disabled", "disabled");
    $("#sendQuestions").attr("disabled", "disabled");
    $("#CompetitiveLandscapegrid").jqxGrid({ disabled: true });
    // disabling all inputs 
    $(document).find("input,textarea").attr('disabled', 'disabled');
    $(".selectCheckboxTextArea").removeAttr('disabled', 'disabled');
    $(".selectCheckboxTextArea").addClass('hidden-print');
    $("#deleterowbutton").jqxButton({ disabled: true });
    $("#addrowbutton").jqxButton({ disabled: true });

    // Guets the query string info to load the questions and the right project with its respective template.
    var queries = {};
    var i;

    //  implementation from the query string gettinh GUID ID

    var prodId = getParameterByName('id');
    var queryStringURL = "";
    var gettingQueryStringURL = getBaseURL() + deploymentDomainSubfix + "api/ppremaillinks/" + prodId;
    $.ajax({
        url: gettingQueryStringURL,
        type: 'GET',
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (dataQuery) {
            queryStringURL = dataQuery;
        }
    });
    $.each(queryStringURL.split('&'), function (c, q) {
        i = q.split('=');
        queries[i[0].toString()] = i[1].toString();
    });
    var enableQuestions = queries.ClientQuestions.split(',');

    sender = queries.ClientSender;
    if (typeof queries.ClientFullName !== "undefined" && queries.ClientFullName !== "") {
        ClientFullName = queries.ClientFullName.split('%25').join(' ');
        $("#currentClientname").text(ClientFullName.replace('%', ' '));
        ClientProjectName = queries.ClientProjectNameDisplay;
        ClientProjectNameDisplay = queries.ClientProjectName;
    };

    leadDirector = queries.LeadDirector.replace("%20", " ");
    leadDirectorEmail = queries.LeadDirectorEmail;
    if (leadDirector !== "") {
        $(".LEAD_DIRECTOR").text(leadDirector);
    } else {
        $(".LEAD_DIRECTOR").text("LeadDirector");
    };

    if (leadDirectorEmail !== "") {
        $("#LEAD_DIRECTOR_EMAIL").text(leadDirectorEmail);
    } else {
        $("#LEAD_DIRECTOR_EMAIL").text("LeadDirectorEmail");
    };

    loadProjectInformation(queries.ClientProjectName, queries.ClientProjectId, queries.SelectedTemplate);

    //tooltips
    //$("#submitData").jqxTooltip({ content: 'Submit the document when finished', position: 'left', name: 'buttontooltip' });
    //$("#help").jqxTooltip({ content: 'Instructions for help', position: 'left', name: 'buttontooltip' });
    //$("#toggleversionControlIn").jqxTooltip({ content: 'hide document version control', position: 'left', name: 'buttontooltip' });
   // $("#sendQuestions").jqxTooltip({ content: 'Send questions to a client', position: 'left', name: 'buttontooltip' });
  //  $("#selectQuestions").jqxTooltip({ content: 'Select the questions to be send', position: 'left', name: 'buttontooltip' });
    //    $("#printBtn").jqxTooltip({ content: 'Print document', position: 'left', name: 'buttontooltip' });
    $("#savedataBtn").jqxTooltip({ content: 'Save data', position: 'left', name: 'buttontooltip' });
    $("#CTNGROUP").jqxTooltip({ content: 'Clinical trial name', position: 'left', name: 'buttontooltip' });
    $("#PBNGROUP").jqxTooltip({ content: 'Program brand name', position: 'left', name: 'buttontooltip' });
    $("#CNGROUP").jqxTooltip({ content: 'Class name', position: 'left', name: 'buttontooltip' });
    $("#TBNGROUP").jqxTooltip({ content: 'Technology brand name', position: 'left', name: 'buttontooltip' });
    $("#lockbtn").jqxTooltip({ content: 'This project is lock wait for it to be unlocked', position: 'left', name: 'lockbtn' });
    $("#addrowbutton").jqxButton({
        theme: gridTheme,
        height: 20
    });
    $("#addrowbutton").on('click', function () {
        $("#CompetitiveLandscapegrid").jqxGrid('addrow', null, {})
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
            var commit = $("#CompetitiveLandscapegrid").jqxGrid('deleterow', id);
        }
    });

    // end adding and delete new rows  buttons for competitive landscape tables


    $('.tableGroup').css('padding', '0');

    var projectSource = {
        type: "GET",
        datatype: "json",
        async: false,
        cache: true,
        url: getBaseURL() + deploymentDomainSubfix + "api/ApiProjects/"
    };

    var projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
        contentType: 'application/json; charset=utf-8',
    });

    $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '150' });

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

    //dropdown countries list for primary and secondary markets questions

    var countriesList = ["United States", "Europe Big 5 (France - Germany - Italy - Spain - United Kingdom)", "Europe (All)", "Canada", "Japan", "Afghanistan", "Albania", "Algeria", "Andorra",
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



    //pre-select the ones already in the box
    var primaryMarketsValuesString = $("#PrimaryMarketsInput").val();
    var secondaryMarketsValuesString = $("#SecondaryMarketInput").val();
    var primaryMarketsValues = primaryMarketsValuesString.split(",");
    var secondaryMarketsValues = secondaryMarketsValuesString.split(",");
    var item;
    for (i = 0; i < primaryMarketsValues.length; i++) {
        item = $("#countriesList").jqxComboBox('getItemByValue', primaryMarketsValues[i]);
        $("#countriesList").jqxComboBox('checkItem', item);
    };
    for (i = 0; i < secondaryMarketsValues.length; i++) {
        item = $("#countriesList").jqxComboBox('getItemByValue', primaryMarketsValues[i]);
        $("#countriesList2").jqxComboBox('checkItem', item);
    };

    $("#countriesList").jqxComboBox({ disabled: true });
    $("#countriesList2").jqxComboBox({ disabled: true });
    $("#formulationDropdownlist").jqxComboBox({ disabled: true });
    $("#RouteOfAdminitrationDropdownlist").jqxComboBox({ disabled: true });
    //$(".selectCheckboxTextArea").css("border", "2px solid #ff0066");
    for (i = 0; i < enableQuestions.length; i++) {
        $("#" + enableQuestions[i]).find("input,textarea").removeAttr('disabled', 'disabled');
        $("#" + enableQuestions[i]).find(".form-control").css('border', '2px solid #ff0066');
        if (enableQuestions[i] == "CompetitiveLandscapeTableGroup") {
            $("#CompetitiveLandscapegrid").jqxGrid({ disabled: false });
            $("#CompetitiveLandscapeTableGroup").css("border", "2px solid #ff0066");
            $("#deleterowbutton").jqxButton({ disabled: false });
            $("#addrowbutton").jqxButton({ disabled: false });
        };
        if (enableQuestions[i] == "BeingConsideredByGroup") {
            $("#beingConsiderByDropdown").css("display", "block");
            $("#beingConsiderByDropdown").css("border", "2px solid #ff0066");
        };
        if (enableQuestions[i] == "PrimaryMarketsGroup") {
            $("#countriesList").jqxComboBox({ disabled: false });
            $("#countriesList").css("border", "2px solid #ff0066");
        }
        else if (enableQuestions[i] == "SecondaryMarketsGroup") {
            $("#countriesList2").jqxComboBox({ disabled: false });
            $("#countriesList2").css("border", "2px solid #ff0066");
        }
        else if (enableQuestions[i] == "formulationDropdownlistGroup") {
            $("#formulationDropdownlist").jqxComboBox({ disabled: false });
            $("#formulationDropdownlist").css("border", "2px solid #ff0066");
        }
        else if (enableQuestions[i] == "RouteOfAdminitrationDropdownlistGroup") {
            $("#RouteOfAdminitrationDropdownlist").jqxComboBox({ disabled: false });
            $("#RouteOfAdminitrationDropdownlist").css("border", "2px solid #ff0066");
        };
    };

    $('textarea').autosize();
    $(".versioncontrol").fadeOut("slow", "linear");



});

$("#searchproject").keypress(function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        searchProjectChange();
        // remainder of your code
    }
});

var searchProjectChange = function () {

    var value = document.getElementById("searchproject").value;

    if (value == "") {

        projectSource = {
            type: "GET",
            datatype: "json",
            async: false,
            cache: true,
            url: getBaseURL() + deploymentDomainSubfix + "api/ApiProjects/"
        };

        projectDataAdapter = new $.jqx.dataAdapter(projectSource, {
            contentType: 'application/json; charset=utf-8',
            formatData: function (data) {

            }
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
            contentType: 'application/json; charset=utf-8',
            formatData: function (data) {

            }
        });
        $("#jqxdropdownlist").jqxDropDownList('clear');
        $("#jqxdropdownlist").jqxDropDownList({ source: projectDataAdapter, valueMember: 'ppr_ProjectListId', displayMember: 'ProjectName', width: '150px' });
        $("#jqxdropdownlist").jqxDropDownList('open');
    }


};

$('#ClientDropdown').change(function (event) {
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

    $.loader({
        className: "blue-with-image",
        content: ''
    });

    var args = event.args;
    if (args) {
        var index = args.index;
        var item = args.item;
        var label = item.label;
        var value = item.value;
        $("#currentProject").text(label);
        $("#currentProject").val(value);
        projectName = label;
        projectId = value;
        loadFeedPageGrid(label);

        // enables the buttons and the tables input after chosing a project
        $("#deleterowbutton").jqxButton({ disabled: false });
        $("#addrowbutton").jqxButton({ disabled: false });
        $("#selectQuestions").removeAttr("disabled", "disabled");
        $("#CompetitiveLandscapegrid").jqxGrid({ disabled: false });
        $("#savedataBtn").removeAttr("disabled", "disabled");
        $("#printBtn").removeAttr("disabled", "disabled");
        loadCompetitiveLandscapeData(projectName, projectId);
    };
});

var loadProjectInformation = function (ClientProjectName, ClientProjectId) {

    $("#currentProject").text(ClientProjectName);
    $("#currentProject").val(ClientProjectId);
    projectName = ClientProjectName;
    projectId = ClientProjectId;
    $("#infoPanel").css('display', 'block');
    $("#PrimaryMarketsInput").val("");
    $("#SecondaryMarketInput").val("");
    $("#savedataBtn").removeAttr("disabled", "disabled");
    $("#printBtn").removeAttr("disabled", "disabled");
    loadCompetitiveLandscapeData(ClientProjectName, ClientProjectId);

    var urlForFecthingPpr = getBaseURL() + deploymentDomainSubfix + "api/ApiPPRTemplateForm/" + ClientProjectId;
    $.ajax({
        url: urlForFecthingPpr,
        type: 'GET',
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (data) {
            $(document).find('.form-control').val("");
            if (data.length > 0) {
                if (typeof data[0].TemplateType != "undefined" && data[0].TemplateType != "" && data[0].TemplateType != null) {
                    templateChoice(data[0].TemplateType);
                }
                else {
                    templateChoice("RX");
                };
                var listFileds2 = $.merge([], listFileds);
                removeItem4Array(listFileds2, 'ProductAttributesTableGroup');
                removeItem4Array(listFileds2, 'CreativeDirectionTableGroup');
                for (i = 0; i < data.length; i++) {
                    var inputGroup = listFileds2[i];
                    if (inputGroup != "ProductAttributesTableGroup" && inputGroup != "CreativeDirectionTableGroup") {
                        $('#' + data[i].InputGroup).find('.form-control').val(data[i].Answer).trigger('autosize.resize');
                        $('#' + data[i].InputGroup).find('.selectCheckboxTextArea').val(data[i].Comment);
                        if (data[i].VersionControlString != "" && data[i].VersionControlString != null) {
                            $('#' + data[i].InputGroup).find('.selectCheckboxTextArea').after("<div  style='display:none' style='display:none' class='versioncontrol'>" + data[i].VersionControlString + "</div></br>");
                        };
                    };
                };
            };
            $('#loadingdata').css('display', 'none');
        }
    });

    $("#countriesList").jqxComboBox('uncheckAll');
    $("#countriesList2").jqxComboBox('uncheckAll');
    var primaryMarketsValuesString = $("#PrimaryMarketsInput").val();
    var secondaryMarketsValuesString = $("#SecondaryMarketInput").val();
    var primaryMarketsValues = primaryMarketsValuesString.split(",");
    var secondaryMarketsValues = secondaryMarketsValuesString.split(",");
    var item;
    for (i = 0; i < primaryMarketsValues.length; i++) {
        item = $("#countriesList").jqxComboBox('getItemByValue', primaryMarketsValues[i]);
        $("#countriesList").jqxComboBox('checkItem', item);
    };
    for (var i = 0; i < secondaryMarketsValues.length; i++) {
        item = $("#countriesList2").jqxComboBox('getItemByValue', secondaryMarketsValues[i]);
        $("#countriesList2").jqxComboBox('checkItem', item);
    };
    $("#competitvelandscapeform").val("competitvelandscapeform");
    loadFeedPageGrid(ClientProjectName);
};

function loadFeedPageGrid(projectName) {

    var Url = getBaseURL() + deploymentDomainSubfix + "api/ApiBookmark/" + projectName;
    $.ajax({
        url: Url,
        type: 'GET',
        async: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            var mydata = data;
            var mydata;
            for (var i = 0; i < mydata.length; i++) {
                var ans = mydata[i].BookmarkAnswer

                if (mydata[i].BookmarkDescription == "currentClientname") {
                    $("#" + mydata[i].BookmarkDescription).text(ans);
                }
                else if (mydata[i].BookmarkDescription == "salesDate") {

                    var splitDate = ans.split("/");
                    var newDate = stringToMonthNumber(splitDate[0])
                    splitDate[0] = newDate;
                    var newdateJoin = splitDate.join('-');
                    $("#" + mydata[i].BookmarkDescription).text(newdateJoin);
                }
                else {
                    var value = $("#" + mydata[i].BookmarkDescription).val();
                    if (value == "" || value == null) {
                        $("#" + mydata[i].BookmarkDescription).val(ans);
                    };
                };
            };
        },
    });


    if ($("#salesDateinput").val() != "" && $("#salesDateinput").val() != null) {
        $("#salesDate").text($("#salesDateinput").val());
    }

    if ($("#Projectinput").val() != "" && $("#Projectinput").val() != null) {
        $("#currentProject").text($("#Projectinput").val());
    };
    var projectNameContainer = $("#projectNameDisplay").text($("#currentProject").text());
    $("#projectNameDisplay").parent().parent().css("margin-left", -1 * projectNameContainer.width() - 15);

    if ($("#MarketingandSafetyResearchLabelinput").val() != "" && $("#MarketingandSafetyResearchLabelinput").val() != null) {
        $("#MarketingandSafetyResearchLabel").text($("#MarketingandSafetyResearchLabelinput").val());
    };

};

function saveData () {
    logUser();
    createClientQuestionary();
    autoSavedata();
};


var autoSavedata = function () {
    var listofPPRTemplateFormModels = [];
    var listFileds2 = $.merge([], listFileds);
    removeItem4Array(listFileds2, 'ProductAttributesTableGroup');
    removeItem4Array(listFileds2, 'CreativeDirectionTableGroup');
    for (i = 0; i < listFileds2.length; i++) {
        var inputGroup = listFileds2[i];
        if (inputGroup != "ProductAttributesTableGroup" && inputGroup != "CreativeDirectionTableGroup") {
            var qestion = $.trim($('#' + listFileds2[i]).find('.label-forms').text());
            var answer = $('#' + listFileds2[i]).find('.form-control').val();
            var comment = $('#' + listFileds2[i]).find('.selectCheckboxTextArea').val();
            var versionControlSpans = $('#' + listFileds2[i]).find('.versioncontrol');
            var htmlStringForVersionControl = "";
            versionControlSpans.each(function (i, spanElement) {
                var elem = $(spanElement);
                htmlStringForVersionControl += elem.context.innerHTML;
            });
            var versionControlString = htmlStringForVersionControl;
            if (answer != "" || comment != "") {
                if (typeof answer != "undefined" || typeof comment != "undefined") {
                    var templateType = $('#templateType').text();
                    var dateTime = new Date();
                    var createdBy = ClientFullName;
                    var PPRTemplateFormModel = new NewPprDataModel(0, projectId, ClientProjectName, comment, inputGroup, qestion,
                                                                                                        answer, templateType, versionControlString,
                                                                                                        dateTime, createdBy, dateTime, ClientFullName);
                    listofPPRTemplateFormModels.push(PPRTemplateFormModel);
                };
            };
        };
    };

    var Data = JSON.stringify(listofPPRTemplateFormModels);
    var pprTemplateFormURL = getBaseURL() + deploymentDomainSubfix + "api/ApiPPRTemplateForm";

    $.ajax({
        url: pprTemplateFormURL,
        type: 'POST',
        data: Data,
        async: false,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (data) {
            $.growl({ title: "Auto saved", message: "Your last input was saved" });
         
        }
    });
};


var turnInputsOn = function () {
    for (var i = 0; i < listFileds.length; i++) {
        $('#' + listFileds[i]).css('display', 'block');
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

var templateChoice = function (id) {
    turnInputsOn();
    hideAllColumnsForGrid();
    $(".tableGroup2").css('padding', '0px');
    $(".tableGroup3").css('padding', '0px');
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
        $(".tableGroup").css('width', '33%');
        for (i = 0; i < MedicalDeviceListFields.length; i++) {
            $('#' + MedicalDeviceListFields[i]).css('display', 'none');
        };
        showColumnsForMedical_OTC_Technology();
    }
    else if (id == "OTC") {

        $(".tableGroup").css('width', '33.3%');


        for (i = 0; i < OTCListFields.length; i++) {
            $('#' + OTCListFields[i]).css('display', 'none');
        };

        showColumnsForMedical_OTC_Technology();
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

    var projectTemplateContainer = $("#templateTypeDisplay").text(id);
    $("#templateTypeDisplay").parent().parent().css("margin-left", -1 * projectTemplateContainer.width() - 15);

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
    }


    var competitiveLandscapeSource =
             {
                 type: "GET",
                 datatype: "json",
                 async: false,
                 cache: true,
                 url: getBaseURL() + deploymentDomainSubfix + "api/ApiCompetitiveLandscapes/" + ClientProjectName,
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
                    { name: 'UpdatedBy' },
                 ],
                 id: 'competitiveLandscapeId',
                 updaterow: function (rowid, rowdata, commit) {
                     var dateTime = new Date();
                     var UpdatedBy = $("#MyUsername").val();
                     var projectId = $("#currentProject").val();
                     var competitiveLandscapeModel = new NewCompetitiveLandscapeModel(projectId, rowdata.CompetitiveLandscapeId, projectName,
                         rowdata.Company, rowdata.BrandName, rowdata.NonproprietaryName, rowdata.ClinicalTrialName,
                         rowdata.ClassName, rowdata.PointsOfDifferentiation, rowdata.Created, rowdata.CreatedBy, dateTime, UpdatedBy);
                     var Data = JSON.stringify(competitiveLandscapeModel);
                     var CompetitiveLandscapeId = "";
                     if (typeof rowdata.CompetitiveLandscapeId === 'undefined' || rowdata.CompetitiveLandscapeId === null) {
                         CompetitiveLandscapeId = 0;
                     } else { CompetitiveLandscapeId = rowdata.CompetitiveLandscapeId };


                     $.ajax({
                         url: getBaseURL() + deploymentDomainSubfix + "api/ApiCompetitiveLandscapes/" + CompetitiveLandscapeId,
                         data: Data,
                         type: 'PUT',
                         async: false,
                         contentType: 'application/json; charset=utf-8',
                         dataType: 'json',
                         success: function (data) {
                             $("#CompetitiveLandscapegrid").jqxGrid('updatebounddata');
                         },
                     });
                 },
                 deleterow: function (rowid, commit) {
                     var rowdata = $('#CompetitiveLandscapegrid').jqxGrid('getrowdata', rowid);
                     if (typeof rowdata.CompetitiveLandscapeId === 'undefined' || rowdata.CompetitiveLandscapeId === null) {
                         return;
                     } else {

                         CompetitiveLandscapeId = rowdata.CompetitiveLandscapeId
                         $.ajax({
                             url: getBaseURL() + deploymentDomainSubfix + "api/ApiCompetitiveLandscapes/" + CompetitiveLandscapeId,
                             type: 'DELETE',
                             async: false,
                             contentType: 'application/json; charset=utf-8',
                             dataType: 'json',
                             success: function (data) {
                                 $("#CompetitiveLandscapegrid").jqxGrid('updatebounddata');
                             },
                         });
                     };


                 }
             };

    var dataAdapter = new $.jqx.dataAdapter(competitiveLandscapeSource, {
        contentType: 'application/json; charset=utf-8'
    });


    $("#CompetitiveLandscapegrid").jqxGrid(
   {
       theme: gridTheme,
       width: '99%',
       altrows: true,
       editable: false,
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

};

// ****************************************************Competitive Landscape grid set up END***************************************************//

// query string helper 

var getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


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
        t.val(linestart(t.val(), ' • ') + '\n');
        return true;
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
}

//lists of the ids by template and the full list
//ELIMINATED "CreativeStartDateGroup", "TrademarksStartDateGroup", "ExpectedNDASubDateGroup","ExpectedApprovalDateGroup"

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

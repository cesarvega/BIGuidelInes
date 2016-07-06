@Code
    ViewData("Title") = "Index"
End Code

<script type="text/javascript" src="~/Scripts/PluginsJS/jquery.autosize.min.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/alert.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/tooltip.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/transition.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/modal.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/alert.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/popover.js"></script>
<script type="text/javascript" src="~/Scripts/jqwidgets/jqxresponse.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/jquery.growl.js"></script>
<script type="text/javascript" src="~/Scripts/PluginsJS/jquery.loader.min.js"></script>
<script type="text/javascript" src="~/Scripts/jqwidgets/jqxeditor.js"></script>
<script type="text/javascript" src="~/Scripts/jqwidgets/jqxdropdownbutton.js"></script>
<script type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.grouping.js"></script>
<script type="text/javascript" src="~/Scripts/jqwidgets/jqxresponse.js"></script>
<link type="text/css" href="~/Content/jquery.loader.css" rel="stylesheet" />

<style type="text/css">

    textarea {
        font-family: Tahoma, sans-serif;
        width: 100%;
        overflow: hidden;
        word-wrap: break-word;
        resize: vertical;
        font-size-adjust: 0.5;
        min-height: 20px;
    }

    .bullettTextarea {
        padding: 0;
    }

    .navbar {
        margin-bottom: 10px;
        margin-top: 10px;
        min-height: 50px;
        position: relative;
        z-index: 1000;
    }

    ul.list-group li {
        color: darkblue;
    }

    form label {
        color: darkblue;
        font-weight: normal;
        font-size-adjust: 0.5;
        padding-top: 15px;
    }

    .list-group-item {
        color: darkblue;
        font-weight: normal;
        font-size-adjust: 0.5;
        padding: 5px 0px 5px 5px;
    }

    h3 {
        font-weight: bolder;
        float: left;
        padding-right: 10px;
    }

    .form-control {
        height: 30px;
        width: 100%;
    }

    .label-forms {
        float: left;
        padding: 5px 0px 5px 5px;
        color: darkblue;
        font-size-adjust: 0.5;
    }

    .label-forms-prepopulate {
        color: black;
        float: left;
        font-size-adjust: 0.5;
        padding: 5px 0px 5px 5px;
    }

    .input-forms {
        float: right;
        min-width: 70%;
        padding: 5px 8px 5px 5px;
    }

    .input-header {
        background-color: #fff;
    }

    .dropdown-menu button {
        background-color: white;
    }

    .green {
        color: #555555;
        background-color: #ffffff;
        border: 1px solid #D3D3D3;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
        margin-bottom: 0;
        word-wrap: break-word;
    }

    .red {
        background-color: #FFFFFF;
        border: 1px solid #D3D3D3;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
        word-wrap: break-word;
    }

    .green:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .green:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        color: #555555;
        background-color: #ffffff;
        border: 1px solid #D3D3D3;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
        margin-top: 0;
        word-wrap: break-word;
    }

    .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
        background-color: #FFFFFF;
        border: 1px solid #D3D3D3;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
        transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
        word-wrap: break-word;
    }

    .selectCheckbox {
        position: relative;
        top: -25px;
        right: 5px;
        display: none;
    }

    .selectCheckboxTextArea {
        position: relative;
        top: -50px;
        right: 5px;
        display: none;
    }

    .tableGroup, .tableGroup2 {
        float: left;
        padding: 0;
    }

    .popover {
        text-align: left;
        white-space: normal;
        width: 300px;
    }
    input [type=text] {
    padding:5px;
    }

</style>
<div id="foo"></div>

<button id="sendQuestonsToClientButton" class="btn btn-primary" style="display:none;" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>
@*Modal Boxes*@
<div id="sendQuestonsToClientModalBox" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="padding: 25px;">

            <form role="form">

                <div id="emailAdressesGroup">
                    <div class="label-forms">
                        Email address:
                    </div>
                    <div class="input-forms">
                        <input class="form-control" id="emailAdresses" />
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="adminEmailAdressesGroup">
                    <div class="label-forms">
                        Email From:
                    </div>
                    <div class="input-forms">
                        <input class="form-control" id="adminEmailAdresses" />
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="emailAdressesSubjectGroup">
                    <div class="label-forms">
                        Email Subject:
                    </div>
                    <div class="input-forms">
                        <input class="form-control" id="emailAdressesSubject" />
                    </div>
                    <div class="clear"></div>
                </div>


                <div id="emailAdressesBCCGroup">
                    <div class="label-forms">
                        BCC:
                    </div>
                    <div class="input-group">
                        <input class="form-control" id="emailAdressesBCC" placeholder="optional" style="height: 30px;float: right;width: 72%;" />
                        <span class="input-group-addon">
                            <input type="checkbox" id="emailAdressesCheckBCC" title="Yes" checked="checked" />
                        </span>
                    </div>
                    <div class="clear"></div>
                </div>


                <div id="emailAdressesBodyGroup">
                    <div class="label-forms">
                        Email Body:
                    </div>
                    <div class="input-forms">
                        <div contenteditable="true" id="emailAdressesBody"
                             style="font-family: Arial Narrow; font-size: 16px; float: right; padding: 10px; border: solid 1px lightgrey">
                        </div>
                        @*   <textarea class="form-control" id="emailAdressesBody"></textarea>*@
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="clientNameGroup" style="display: none;">
                    <div class="label-forms">
                        Client Name:
                    </div>
                    <div class="input-forms">
                        <input class="form-control" id="clientName" />
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="clientTitleGroup" style="display: none;">
                    <div class="label-forms">
                        Client Title:
                    </div>
                    <div class="input-forms">
                        <input class="form-control" id="clientTitle" />
                    </div>
                    <div class="clear"></div>
                </div>

                <div class="alert alert-danger validationMessage" style="display: none;"></div>

                <div class="row clearfix">
                    <div class="col-md-12 column">
                        <div class="row clearfix">
                            <div class="col-md-8 column">
                            </div>
                            <div class="col-md-2 column">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            </div>
                            <div class="col-md-2 column">
                                <button type="button" class="btn btn-info" onclick="createClientQuestionary()" data-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Small modal -->
<button id="saveDataAlertBtn" style="display:none;" class="btn btn-primary" data-toggle="modal" data-target="#saveDataAlert"></button>

<div id="saveDataAlert" class="modal fade saveDataAlert" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div role="alert" class="alert alert-info fade in" style="display:block;">
                <h4 id="mySmallModalLabel" class="modal-title">Thank you.</h4>
                <p>   The project was successfully saved.<br />   Click on “OK” to dismiss window and continue editing.</p>
                <button style="float:right;" type="button" class="btn btn-info" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>

<button id="saveClientAlertBtn" style="display:none;" class="btn btn-primary" data-toggle="modal" data-target="#saveClientAlert"></button>

<!-- Small modal -->
<div id="intructionsAlert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="SmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header" style="background-color: red;">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 style="color: white;" class="modal-title embose">
                    Warning Zoom Compability
                </h4>
            </div>
            <div class="modal-body">
                <div>
                    Please reset your windows zoom if you have trouble viewing the application;
                    you may use <span style="color: #0094ff;">"CTRL +" or "CTRL -" </span> to zoom in and out in most browsers. <br />
                    or click <a target="_top" href="http://support.inspiredelearning.com/entries/20830582-Resetting-Your-Browser-s-Zoom-Level">here for zoom tutorials</a>
                </div>
                <br />
                <span style="color: #f20909">Very kind regards,</span>
                <br />
                <span style="color: #f20909">Brand Institute IS Deparment</span>
                <br />
                <div class="modal-footer">
                    <button style="float: right; background-color:red;" type="button" class="btn btn-danger" data-dismiss="modal">Dismiss</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Small modal -->
<div id="saveClientAlert" class="modal fade saveClientAlert" tabindex="-1" role="dialog" aria-labelledby="SmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div role="alert" class="alert alert-info fade in" style="display:block;">
                <h4 id="SmallModalLabel" class="modal-title">The email was successfully sent.</h4>
                <button style="float:right;" type="button" class="btn btn-info" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>


@*Idle Modal box*@
<div id="idleAlert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="idleLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div role="alert" class="alert alert-warning fade in" style="display:block;">
                <h4 id="idleLabel" class="modal-title">Your Session is been idle for 10 minutes</h4>
                <p>
                    <br />Your session expires after several minutes of inactivity, and all information is saved in our data base; Click on the "Stay" if you wanna continue with the session!
                </p>
                <button style="float:right;" type="button" class="btn btn-info" onclick="stayInSession()" data-dismiss="modal">Stay</button>
                <button style="float:right; margin-right: 10px;" type="button" class="btn btn-danger" onclick="goTothanksyouPage()" data-dismiss="modal">Leave</button>
            </div>
        </div>
    </div>
</div>


@*Lock Modal box*@
<div id="lockAlert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="idleLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div role="alert" class="alert alert-warning fade in" style="display:block;">
                <h4 id="lockLabel" class="modal-title"> </h4>
                <p id="messagLock">
                    <br />
                </p>
                <button style="float:right;" type="button" class="btn btn-info" onclick="stayInSession()" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>

<div class="col-md-12">
    @Html.Partial("_LoginPartial")
</div>

@*Navigation bar menu*@

<nav id="mainmenu" class="navbar navbar-default hidden-print" role="navigation" style="background-color:white;">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div id="advanceSearchDownbutton" style="float:left; margin: 11px 0px 0px 11px;">
                <div style="border-color: transparent;" id="advanceSearchGrid">
                </div>
            </div>
            <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                    @*  <input class="form-control" type="text" id="searchproject" onchange="searchProjectChange()" placeholder="Search by project keywords " style="float: left; font-size: 0.8em;" />*@
                    @*       <input type="text" class="form-control" placeholder="Search">*@
                </div>
                @*   <button type="button" class="btn btn-default">Search</button>*@
            </form>
            <ul class="nav navbar-nav">
                <li>
                    @*   <div class="hidden-print" id='jqxdropdownlist' style="margin: 11px 0px 0px 11px;"></div>*@
                </li>
            </ul>
            <ul id="templateMenu" class="nav navbar-nav navbar-right">
                <li class="dropdown" style="cursor: pointer;">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Templates <b class="caret"></b></a>
                    <div class="dropdown-menu">
                        <div>
                            <button id="RX" class="btn" onclick="templateChoice(id)" type="button" title="RX"> RX</button>
                        </div>
                        <div>
                            <button id="MEDICAL DEVICE" class="btn" onclick="templateChoice(id)" type="button" title="MEDICAL DEVICE" />
                            MEDICAL DEVICE
                        </div>
                        <div>
                            <button id="OTC" class="btn" onclick="templateChoice(id)" type="button" title="OTC" />
                            OTC
                        </div>
                        <div>
                            <button id="NONPROP" class="btn" onclick="templateChoice(id)" type="button" title="NONPROP" />
                            NONPROP
                        </div>
                        <div>
                            <button id="ANIMAL HEALTH" class="btn" onclick="templateChoice(id)" type="button" title="ANIMAL HEALTH" />
                            ANIMAL HEALTH
                        </div>
                        <div>
                            <button id="RX BRAND NAME LINE EXTENSION" class="btn" onclick="templateChoice(id)" type="button" title="RX BRAND NAME LINE EXTENSION" />
                            RX BRAND NAME LINE EXTENSION
                        </div>
                        <div>
                            <button id="MODIFIER NAME LINE EXTENSION" class="btn" onclick="templateChoice(id)" type="button" title="MODIFIER NAME LINE EXTENSION" />
                            MODIFIER NAME LINE EXTENSION
                        </div>
                        <div>
                            <button id="CLINICAL TRIAL NAME" class="btn" onclick="templateChoice(id)" type="button" title="CLINICAL TRIAL NAME" />
                            CLINICAL TRIAL NAME
                        </div>
                        <div>
                            <button id="PROGRAM BRAND NAME" class="btn" onclick="templateChoice(id)" type="button" title="PROGRAM BRAND NAME" />
                            PROGRAM BRAND NAME
                        </div>
                        <div>
                            <button id="CLASS NAME" class="btn" onclick="templateChoice(id)" type="button" title="CLASS NAME" />
                            CLASS NAME
                        </div>
                        <div>
                            <button id="TECHNOLOGY BRAND NAME" class="btn" onclick="templateChoice(id)" type="button" title="TECHNOLOGY BRAND NAME" />
                            TECHNOLOGY BRAND NAME
                        </div>
                        @*      <div>
                                <button id="CONSUMER/BUSINESS PRODUCT" class="btn" onclick="templateChoice(id)" type="button" title="CONSUMER/BUSINESS PRODUCT" />
                               CONSUMER/BUSINESS PRODUCT
                            </div>
                             <div>
                                <button id="CORPORATE ID" class="btn" onclick="templateChoice(id)" type="button" title="CORPORATE ID" />
                               CORPORATE ID
                            </div>
                            <div>
                                <button id="SERVICE" class="btn" onclick="templateChoice(id)" type="button" title="SERVICE" />
                                SERVICE
                            </div>
                            <div>
                                <button id="TAGLINE" class="btn" onclick="templateChoice(id)" type="button" title="TAGLINE" />
                                TAGLINE
                            </div>
                            <div>
                                <button id="NONPROFIT" class="btn" onclick="templateChoice(id)" type="button" title="NONPROFIT" />
                                NONPROFIT
                            </div>
                             <div>
                                <button id="TECHNOLOGY" class="btn" onclick="templateChoice(id)" type="button" title="TECHNOLOGY" />
                                TECHNOLOGY
                            </div>
                            <div>
                                <button id="LOGO DESIGN" class="btn" onclick="templateChoice(id)" type="button" title="LOGO DESIGN" />
                                LOGO DESIGN
                            </div>
                             <div>
                                <button id="WEBSITE DESIGN" class="btn" onclick="templateChoice(id)" type="button" title="WEBSITE DESIGN" />
                                WEBSITE DESIGN
                            </div>
                            <div>
                                <button id="OTHER/CUSTOM" class="btn" onclick="templateChoice(id)" type="button" title="OTHER/CUSTOM" />
                               OTHER/CUSTOM
                            </div>
                        *@
                    </div>


                </li>
            </ul>

        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>



@*Side Menu*@

<div id="infoPanel" class="hidden-print" style="display:none; float: left; left: inherit; margin-left: -78px; position: fixed; top: 3%;">
    <div class="list-group">
        <label id="templateTypeDisplay" style=" border-radius: 4px; text-align: right; margin-bottom: 5px;  padding: 3px; display:block;" class="alert alert-info">Template</label>
        <div class="clear"></div>
        <label id="projectNameDisplay" style="border-radius: 4px; text-align: right; margin-bottom: 0px;  padding: 3px; display:block;" class="alert alert-warning ">Project</label>
    </div>
</div>

<div class="hidden-print" style="float: left; left: inherit; margin-left: -60px; position: fixed; top: 94px;text-align:center;">
    <div class="list-group">
        <button style="width:54px" id="savedataBtn" disabled class="btn btn-success" type="button" onclick="autoSavedata()"><span class="glyphicon glyphicon-floppy-save"></span> <br /> <span>save</span></button>
        <div class="clear"></div>
        <button style="width:54px" id="selectQuestions" disabled onclick="selectQuestions();" class="btn btn-warning"><span class="glyphicon glyphicon-envelope"></span><br /> <span>email</span></button>
        <div class="clear"></div>
        <button style="width:54px; display:none;" id="sendQuestions" onclick="sendQuestions();" class="btn btn-danger"><span class="glyphicon glyphicon-send"></span><br /> <span>send</span></button>
        <div class="clear"></div>
        <button style="width:54px" id="printBtn" disabled class="btn btn-info" type="button" onclick="printPage()"><span class="glyphicon glyphicon-print"></span><br /> <span>print</span></button>
        <div class="clear"></div>
     @*   <a id="#mainmenu" href="#mainmenu" style="color:#004684;" class="list-group-item btn btn-info"><span class="glyphicon glyphicon-arrow-up"></span><br /> <span>up</span></a>
        <a id="#page2" href="#page2" style="color:#004684" class="list-group-item btn btn-info"><span class="glyphicon glyphicon-minus"></span><br /> <span>center</span></a>
        <a id="#page3" href="#page3" style="color:#004684" class="list-group-item btn btn-info"><span class="glyphicon glyphicon-arrow-down"></span><br /> <span>down</span></a>*@
        <button style="width:54px; display:none" id="lockbtn" class="btn btn-danger" type="button" onclick="reloadpage()"><span class="glyphicon glyphicon-lock"></span><br /> <span>unlock</span></button>
        <button style="width:54px; background-color:#0094ff" id="toggleversionControlIn" class="btn btn-info" type="button" onclick="fadeInVersionControl()"><span class="glyphicon glyphicon-info-sign"></span><br /> <span>ver</span></button>
        <button style="width:54px; display:none; background-color:#0094f0" id="toggleversionControlOut" class="btn" type="button" onclick="fadeOutVersionControl()"><span class="glyphicon glyphicon-info-sign"></span><br /> <span>ver</span></button>
        <div class="clear"></div>
        <button style="width:54px; background-color:#0094ff; display:none;" id="toggleComments" class="btn btn-info" type="button" onclick="toggleComments()"><span class="glyphicon glyphicon-comment"></span><br /> <span>coms</span></button>

        <div id="ClinicalGroup">
            <div id="CTNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size: xx-small; width:54px;">
                <label>CTN</label>
                <br />
                <input id="CTN" type="checkbox" class="selectTemplateCheckbox" />
                <div class="clear"></div>
            </div>
            <br />

            <div id="PBNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size: xx-small; width:54px;">
                <label>PBN</label>
                <br />
                <input id="PBN" type="checkbox" class="selectTemplateCheckbox" /><br />
                <div class="clear"></div>
            </div>
            <br />

            <div id="CNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size: xx-small; width:54px;">
                <label>CN&nbsp&nbsp</label>
                <br />
                <input id="CN" type="checkbox" class="selectTemplateCheckbox" /><br />
                <div class="clear"></div>
            </div>
            <br />

            <div id="TBNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size:xx-small; width:54px;">
                <label>TBN</label>
                <br />
                <input id="TBN" type="checkbox" class="selectTemplateCheckbox" /><br />
                <div class="clear"></div>
            </div>
            <br />
        </div>

    </div>


</div>


<form id="content" class="form-horizontal form-inline" role="form">

    @*Page 1*@

    <div class="panel panel-default">
        <div class="panel-body">

            @*BI Logos and template type *@
            <div class="col-md-12 column">
                <img class="media-object" alt="64x64" data-src="holder.js/64x64" style="width: 20%; float: left;" src="~/Images/BiLogoDoc2.jpg" />
                <div class="hidden-print" id="templateType" style="float: left; margin: auto; text-align: center; width: 60%; font-size: larger;"></div>
                <img class="media-object" alt="64x64" data-src="holder.js/64x64" style="width: 20%; float: right;" src="~/Images/DsiLogo.jpg" />
            </div>
            <div class="clear"></div>

            @* Client Name Project Name and Date of the project *@
            <div class="col-md-12 column" style="font-weight: 100;">
                <div class="row clearfix">
                    <div class="col-md-12 column">
                        <h3 id="currentClientname" style="padding-right:0px">ClientName</h3>
                        <h3>&nbsp - &nbsp</h3>
                        <h3> Project Name: </h3>
                        <input style="display:none;" title="double click to edit" id="currentProjectinput" type="text" class="form-control" />
                        <h3 style="cursor:pointer;  font-style: italic;" id="currentProject">Project  </h3>
                        <div id="ProjectGroup" style="display:none;">
                            <div class="label-forms">currentProjectinput</div>
                            <div class="input-forms">
                                <input class="form-control" id="Projectinput" />
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-md-12 column">
                        <h3>Product Profile Report  (PPR) - </h3>
                        <div style="display:none;" id="currentDateinput"></div>
                        <h3 style="cursor:pointer;" id="salesDate">Month X, 2014 </h3>


                        <div id="salesDateGroup" style="display:block;">
                            <div class="label-forms">salesDate</div>
                            <div class="input-forms">
                                <input class="form-control" id="salesDateinput" />
                            </div>
                            <div class="clear"></div>
                        </div>

                    </div>

                </div>
            </div>

            <ul class="list-group">

                <li class="list-group-item" style="background-color: lightgray;">

                    <div id="ClientNameProjectLeadGroup">
                        <div class="label-forms">Client Name Project Lead:</div>
                        <div class="input-forms">
                            <input class="form-control" id="Client_Name_Project_Lead" /><input style="float: right; display: none;" type="checkbox" />
                        </div>
                        <div class="clear"></div>
                    </div>


                </li>
                <li class="list-group-item">


                    <div id="ClientNameProjectLeadTitleGroup">
                        <div class="label-forms">
                            Title:
                        </div>
                        <div class="input-forms">
                            <input class="form-control" id="Client_Name_Project_Lead_Title" /><input class="selectCheckbox" style="float: right;" type="checkbox" />
                        </div>
                        <div class="clear"></div>
                    </div>



                    <div id="ClientNameProjectLeadEmailGroup">
                        <div class="label-forms">E-mail Address:</div>
                        <div class="input-forms">
                            <input class="form-control" id="Client_Name_Project_Lead_Email" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>
                    </div>



                    <div id="ClientNameProjectLeadTelephoneGroup">
                        <div class="label-forms">Telephone Number:</div>
                        <div class="input-forms">
                            <input class="form-control" id="Client_Name_Project_Lead_Telephone" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>
                    </div>


                </li>
                <li class="list-group-item" style="background-color: lightgray">
                    <div id="BrandInstituteDirectorsGroup">
                        <div class="label-forms">
                            Brand Institute Directors:
                        </div>
                        <div class="input-forms">
                            <input class="form-control input-header" id="Brand_Institute_Directors" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>
                <li class="list-group-item">
                    <div id="BrandInstituteDirectorsEmailsGroup">
                        <div class="label-forms">
                            Email Addresses:
                        </div>
                        <div class="input-forms">
                            <input class="form-control" id="Brand_Institute_Directors_Emails" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>

                    </div>

                    <div id="BrandInstituteDirectorsPhoneNumbersGroup">
                        <div class="label-forms">
                            Telephone Numbers:
                        </div>
                        <div class="input-forms">
                            <input class="form-control" id="Brand_Institute_Directors_Phone_Numbers" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>

                <li class="list-group-item" style="background-color: lightgray">
                    <div id="BIBrandManagerGroup">
                        <div class="label-forms">BI Brand Manager:</div>
                        <div class="input-forms">
                            <input class="form-control input-header" id="BI_Brand_Manager" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>
                <li class="list-group-item">
                    <div id="BIBrandManagerEmailGroup">
                        <div class="label-forms">Email Address:</div>
                        <div class="input-forms">
                            <input class="form-control" id="BI_Brand_Manager_Email" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div id="BIBrandManagerTelephoneGroup">
                        <div class="label-forms">Telephone Number:</div>
                        <div class="input-forms">
                            <input class="form-control" id="BI_Brand_Manager_Telephone" /><input style="float: right; display: none;" type="checkbox" />
                            <span style="float: right; display: none; position: relative; cursor: pointer; top: -25px; right: -18px; color: #47A447" class="glyphicon glyphicon-tag"></span>
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>

            </ul>

            <div id="NamingScopeGroup">
                <div class="label-forms">
                    Naming Scope:
                </div>
                <div class="input-forms">
                    <input class="form-control" id="Naming_Scope" /><input style="float: right; display: none;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="BIServicesGroup">
                <div class="label-forms">
                    BI Services:
                </div>
                <div class="input-forms">
                    <input class="form-control" id="Bi_Services" /><input style="float: right; display: none;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TargetAudienceGroup">
                <div class="label-forms">
                    Target Audience
                </div>
                <div class="input-forms">
                    <input class="form-control" id="TargetAudience" /><input style="float: right; display: none;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="PrimaryMarketsGroup">
                <div class="label-forms">
                    Primary Markets:
                </div>
                <div class="input-forms">
                    <div class="col-md-12 column" style="padding-left: 0px;">
                        <textarea style="background-color:white;" class="form-control" id="PrimaryMarketsInput"></textarea>
                        <div class="hidden-print" style="float: right;margin-top:10px;" id='countriesList'></div>
                        <input class="selectCheckboxTextArea" style="float:right; top: -88px;" type="checkbox" />
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div id="SecondaryMarketsGroup">
                <div class="label-forms">
                    Secondary Markets:
                </div>
                <div class="input-forms">
                    <div class="col-md-12 column" style="padding-left: 0px;">
                        <textarea style="background-color:white;" class="form-control" id="SecondaryMarketInput"></textarea>
                        <div class="hidden-print" style="float: right;margin-top:10px;" id='countriesList2'></div>
                        <input class="selectCheckboxTextArea" style="float:right; top: -88px;" type="checkbox" />
                    </div>
                </div>
                <div class="clear"></div>
            </div>


            <label><u><b>Trademarks</b></u></label><br />

            <div id="TrademarkClassGroup">
                <div class="label-forms">
                    Trademark Class(s):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="Trademark_Class"></textarea><input style="float: right; display: none;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MarketSafetyResearchLabel">
                <div class="label-forms">
                    <div style="cursor:pointer; text-decoration:underline; font-weight:bold;" id="MarketingandSafetyResearchLabel"> Marketing and Safety Research<br /> </div>

                    <div id="MarketingandSafetyResearchLabelGroup" style="display:none;">
                        <div class="label-forms">MarketingandSafetyResearchLabel</div>
                        <div class="input-forms">
                            <input class="form-control" id="MarketingandSafetyResearchLabelinput" />
                        </div>
                    </div>

                </div>
                <div class="clear"></div>
            </div>


            <div id="MarketSafetyResearchCountriesGroup">
                <div class="label-forms">
                    In which countries will market/safety research be conducted?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="In_which_countries_will_market_safety"></textarea><input style="float: right; display: none;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MarketSafetyResearchAgenciesGroup">
                <div class="label-forms">
                    To which agencies will names be submitted?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="To_which_agencies_will_names_be_submitte"></textarea><input style="float: right; display: none;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

        </div>

    </div>

    @*Page 2*@


    <div id="page2" class="panel panel-default">
        <div class="panel-body">


            <br />

            <div id="RXLabel">
                <div class="label-forms">
                    <u><b>Rx Brand Name/Branded Generic</b></u><br />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MedicalDeviceLabel">
                <div class="label-forms">
                    <u><b>Medical Device Brand Name</b></u><br />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OTCLabel">
                <div class="label-forms">
                    <u><b>OTC Brand Name</b></u><br />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NonpropLabel">
                <div class="label-forms">
                    <u><b>Nonproprietary (USAN/INN) Name</b></u><br />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AnimalHealthLabel">
                <div class="label-forms">
                    <u><b>Animal Health Brand Name</b></u><br />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProductOverviewGroup">
                <div class="label-forms">
                    Product Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProductOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CorporateOverviewGroup">
                <div class="label-forms">
                    Corporate Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CorporateOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ServiceOverviewGroup">
                <div class="label-forms">
                    Service Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ServiceOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProductServiceOverviewGroup">
                <div class="label-forms">
                    Product/Service Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProductServiceOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ConceptStatementProductOverviewGroup">
                <div class="label-forms">
                    Concept Statement/Product Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ConceptStatementProductOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OrganizationOverviewGroup">
                <div class="label-forms">
                    Organization Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OrganizationOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TechnologyOverviewGroup">
                <div class="label-forms">
                    Technology Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TechnologyOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProjectObjectiveGroup">
                <div class="label-forms">
                    Project Objective:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProjectObjectiveInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CorporateMissionStatementGroup">
                <div class="label-forms">
                    Corporate Mission Statement:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CorporateMissionStatementInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="PrimaryCompetitionGroup">
                <div class="label-forms">
                    Primary Competition:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="PrimaryCompetitionInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ConceptsUsedByCompetitionGroup">
                <div class="label-forms">
                    Concepts Used By Competition:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ConceptsUsedByCompetitionInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ColorsUsedByCompetitionGroup">
                <div class="label-forms">
                    Colors Used By Competition:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ColorsUsedByCompetitionInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ConceptsToExploreGroup">
                <div class="label-forms">
                    Concepts to Explore:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ConceptsToExploreInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ConceptsToAvoidGroup">
                <div class="label-forms">
                    Concepts to Avoid:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ConceptsToAvoidInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ColorsToExploreGroup">
                <div class="label-forms">
                    Colors to Explore:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ColorsToExploreInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ShapesToExploreGroup">
                <div class="label-forms">
                    Shapes to Explore:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ShapesToExploreInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ImageryConveyedInNewLogoGroup">
                <div class="label-forms">
                    What imagery and/or associations should be conveyed in the new logo?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ImageryConveyedInNewLogoInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="LogoActionMovementGroup">
                <div class="label-forms">
                    Should the logo convey action/movement?  Please explain.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="LogoActionMovementInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="LogoWithParticularStyleGroup">
                <div class="label-forms">
                    Are there any logos that have a particular style that you like?  Please explain.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="LogoWithParticularStyleInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NewLogoWordsGroup">
                <div class="label-forms">
                    In the fewest words possible, what should your new logo say?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NewLogoWordsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanyTagLineGroup">
                <div class="label-forms">
                    Company Tag Line (if any):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanyTagLineInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanyMissionStatementGroup">
                <div class="label-forms">
                    Company Mission Statement:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanyMissionStatementInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MainDomainNameGroup">
                <div class="label-forms">
                    Main Domain Name:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MainDomainNameInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OtherDomainNamesGroup">
                <div class="label-forms">
                    What other domain names do you own (if any)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OtherDomainNamesInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WebHostingGroup">
                <div class="label-forms">
                    Do you have web hosting? If so, what type (e.g. IIS, Apache)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WebHostingInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WebsiteConnectedToDatabaseGroup">
                <div class="label-forms">
                    Will the website be connected to a database? If so, what type (e.g.SQL, MySQL)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WebsiteConnectedToDatabaseInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="RequireDatabaseGroup">
                <div class="label-forms">
                    Is there any content that may require a database or scripting (e.g. contact forms, shopping carts, newsletters etc)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="RequireDatabaseInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="DescribeWhatCompanyDoesGroup">
                <div class="label-forms">
                    Briefly describe what your company does:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="DescribeWhatCompanyDoesInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AbsolutelyWantOnSiteGroup">
                <div class="label-forms">
                    What do you absolutely want on the site (this list could include members log in, private areas, gallery newsletter, contact forms, advertising space, different languages, etc.)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AbsolutelyWantOnSiteInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MustBeOnHomepageGroup">
                <div class="label-forms">
                    What absolutely must be on the homepage and what is the order of priority (this could be phone number(s), email, help icons, downloads, cart total, core product links etc.)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MustBeOnHomepageInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MustBeVisibleGroup">
                <div class="label-forms">
                    What, if anything, must be visible at all times (Every page has a fold. A fold is below the visual part of the page and requires you to scroll down to see it.)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MustBeVisibleInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="LinksNeededGroup">
                <div class="label-forms">
                    How many links will be needed and how many levels of navigation will there be (this will help us understand the journey paths and decide how to help the user navigate)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="LinksNeededInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompetitorsGroup">
                <div class="label-forms">
                    Who are your competitors (please provide URLs)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompetitorsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WhatCompetitorsUseGroup">
                <div class="label-forms">
                    Do your competitors use something on their site that you really like (e.g. navigation structure, form layout, etc.)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WhatCompetitorsUseInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ListGeneralSitesGroup">
                <div class="label-forms">
                    List 5 general sites that you like and why (this could be navigation method, color scheme, fonts, etc.)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ListGeneralSitesInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TextLogosAvailableGroup">
                <div class="label-forms">
                    Do you have any text / copy / graphics / Logos available for the site?  If so, please provide.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TextLogosAvailableInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="SupplyingTheTextGroup">
                <div class="label-forms">
                    Will you be supplying the text in a ready to go copy/paste format or will someone have to input all the text into the site?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="SupplyingTheTextInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="SupplyYourOwnGraphicsGroup">
                <div class="label-forms">
                    Will you supply your own graphics that need to be included, or will this need to be purchased from stock sites?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="SupplyYourOwnGraphicsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CommunicateWithYourVisitorsGroup">
                <div class="label-forms">
                    How would you like to communicate with you visitors (telephone, email, live chat, blog’s or discussions, mailing list, brochure/magazines)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CommunicateWithYourVisitorsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="SiteNoNosGroup">
                <div class="label-forms">
                    Site No-Nos: Do you have any definite remarks on what you DON’T want to have on your website (e.g. flash, splash page, the color pink)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="SiteNoNosInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AdditionalCommentsFeedbackGroup">
                <div class="label-forms">
                    Do you have any additional comments, feedback or direction?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AdditionalCommentsFeedbackInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="DrugClassGroup">
                <div class="label-forms">
                    Drug Class/Classification:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="DrugClassInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NonPropGenericNameGroup">
                <div class="label-forms">
                    Nonproprietary/Generic Name:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e. established name)" id="NonPropGenericNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="USANINNSTEMGroup">
                <div class="label-forms">
                    USAN/INN Stem:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="USANINNSTEMInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="IndicationGroup">
                <div class="label-forms">
                    Indication(s):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e. proposed indication, e.g. For the treatment of asthma)" id="IndicationInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="StandardDoseGroup">
                <div class="label-forms">
                    Standard Dose:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e. product strength, e.g. 50mg or 100mg)" id="StandardDoseInput"></textarea>
                    <input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AdditionalDoseGroup">
                <div class="label-forms">
                    Additional Dose:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AdditionalDoseInput"></textarea>
                    <input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="formulationDropdownlistGroup">
                <div class="label-forms" style="float: left;">
                    Formulation:
                </div>
                <div class="input-forms">
                    <div class="col-md-12 column" style="padding-left:0px;">
                        <textarea style="background-color:white;" class="form-control" id="formulationInput"></textarea>
                        <div class="hidden-print" style="float: right;margin-top:10px;" id='formulationDropdownlist'></div>
                        <input class="selectCheckboxTextArea" style="float:right;top: -88px;" type="checkbox" />
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div id="RouteOfAdminitrationDropdownlistGroup">
                <div class="label-forms" style="float: left;">
                    Route(s) of Administration:
                </div>
                <div class="input-forms">
                    <div class="col-md-12 column" style="padding-left:0px;">
                        <textarea style="background-color:white;" class="form-control" id="RouteOfAdminitrationInput"></textarea>
                        <div class="hidden-print" style="float: right;margin-top:10px;" id='RouteOfAdminitrationDropdownlist'></div>
                        <input class="selectCheckboxTextArea" style="float:right;top: -88px;" type="checkbox" />
                    </div>
                </div>
                <div class="clear"></div>
            </div>


            <div id="FrequencyOfAdministrationGroup">
                <div class="label-forms">
                    Frequency of Administration:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e., once daily, twice daily, etc.)" id="FrequencyOfAdministrationInput"></textarea>
                    <input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ConceptStatementGroup">
                <div class="label-forms">
                    Concept Statement:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ConceptStatementInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="PositioningGroup">
                <div class="label-forms">
                    Positioning:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="PositioningInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MOAGroup">
                <div class="label-forms">
                    Mechanism of Action (MOA):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MOAInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NamesUnderConstructionGroup">
                <div class="label-forms">
                    Name(s) Under Consideration:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NamesUnderConstructionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="BeingConsideredByGroup">
                <div class="label-forms">
                    Being Considered By:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="BeingConsideredByInput"></textarea>
                    <input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />

                    <div id="beingConsiderByDropdown" class="dropdown" style="float: right; padding-top: 5px;">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                            Options <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" style="cursor: pointer;">
                            <li role="presentation" class="dropdown-header">Please Select One</li>
                            <li role="presentation" class="divider"></li>
                            <li><a role="menuitem" tabindex="-1">FDA</a></li>
                            <li><a role="menuitem" tabindex="-1">EMA</a></li>
                            <li><a role="menuitem" tabindex="-1">Health Canada</a></li>
                            <li><a role="menuitem" tabindex="-1">Japan (MHLW)</a></li>
                            <li><a role="menuitem" tabindex="-1">Other (Please Specify)</a></li>
                            <li><a role="menuitem" tabindex="-1">Not Submitted</a></li>
                        </ul>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div id="NamesRejectedGroup">
                <div class="label-forms">
                    Name(s) Rejected:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NamesRejectedInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="RationaleForRejectionGroup">
                <div class="label-forms">
                    Rationale for Rejection:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="RationaleForRejectionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="DeviceDescriptionGroup">
                <div class="label-forms">
                    Device Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="DeviceDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ContainDrugGroup">
                <div class="label-forms">
                    Does this device contian a drug?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ContainDrugInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TherapeuticAreaGroup">
                <div class="label-forms">
                    Therapeutic Area:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TherapeuticAreaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TherapeuticClassGroup">
                <div class="label-forms">
                    Therapeutic Class:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TherapeuticClassInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProductDescriptionGroup">
                <div class="label-forms">
                    Product Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProductDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="INDNumberGroup">
                <div class="label-forms">
                    IND Number:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="INDNumberInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CASNumberGroup">
                <div class="label-forms">
                    CAS Number:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CASNumberInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MolecularFormulaGroup">
                <div class="label-forms">
                    Molecular Formula:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MolecularFormulaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MolecularWeightGroup">
                <div class="label-forms">
                    Molecular Weight:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MolecularWeightInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="StructuralFormulaGroup">
                <div class="label-forms">
                    Structural Formula:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="StructuralFormulaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="PharmacologicalGroup">
                <div class="label-forms">
                    Pharmacological Group (if any):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="PharmacologicalGroupInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ChemicalNameGroup">
                <div class="label-forms">
                    Chemical Name (or Description):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ChemicalNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ManufacturerSubmitterGroup">
                <div class="label-forms">
                    Manufacturer or Submitter:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ManufacturerSubmitterInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ClinicalTrialStartDateGroup">
                <div class="label-forms">
                    Date Clinical Trial Began:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalTrialStartDateInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ClinicalDevelopmentGroup">
                <div class="label-forms">
                    Phase of Clinical Development:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalDevelopmentInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanionOrLivestockGroup">
                <div class="label-forms">
                    Companion or Livestock:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanionOrLivestockInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="AssociatedUnderlyingDrugTechnologyGroup">
                <div class="label-forms">
                    Is there an underlying technology associated with this drug?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AssociatedUnderlyingDrugTechnologyInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="LeverageBrandsGroup">
                <div class="label-forms  col-md-6">
                    Are there any leveragable/equitable brands within your animal health portfolio with which this new brand might be associated?
                </div>
                <div class="input-forms col-md-6">
                    <textarea class="form-control" id="LeverageBrandsInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MissionStatementGroup">
                <div class="label-forms  col-md-6">
                    Mission Statement:
                </div>
                <div class="input-forms col-md-6">
                    <textarea class="form-control" id="MissionStatementInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>


            <div id="VisionStatementGroup">
                <div class="label-forms  col-md-6">
                    Vision Statement:
                </div>
                <div class="input-forms col-md-6">
                    <textarea class="form-control" id="VisionStatementInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>


            <div id="ClinicalTrialNameGroup">
                <div class="label-forms">
                    <b>Clinical Trial Name</b>
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalTrialNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialPhaseGroup">
                <div class="label-forms">
                    Trial Phase:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialPhaseInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialOverviewGroup">
                <div class="label-forms">
                    Trial Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialObjectivesGroup">
                <div class="label-forms">
                    Trial Objectives/Endpoints:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialObjectivesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialNamesUnderConsiderationGroup">
                <div class="label-forms">
                    Are there any trial names currently under consideration? If so, please provide with rationale.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialNamesUnderConsiderationInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialNamesForOtherPhasesGroup">
                <div class="label-forms">
                    Are there trial names for other phases of this compound? If so, please provide with rationale.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialNamesForOtherPhasesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="LeveragePastTrialNamesGroup">
                <div class="label-forms">
                    Should the past trial name(s) be leveraged in any way for this new trial (if applicable)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="LeveragePastTrialNamesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="ClinicalTrialsForTherapeuticAgentsGroup">
                <div class="label-forms">
                    Are there currently other clinical trials for competitive therapeutic agents? If so, please provide drug brand/nonproprietary name and clinical trial name(if known).
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalTrialsForTherapeuticAgentsInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="WordsIncludedInTrialNameGroup">
                <div class="label-forms">
                    What words, if any, <u>must</u> be included in this clinical trial name?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsIncludedInTrialNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WordsApproproateInTrialNameGroup">
                <div class="label-forms">
                    What words <u>might</u> be appropriate to include in this clinical trial name (possibly, but may not be necessary)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsApproproateInTrialNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WordsAvoidedInTrialNameGroup">
                <div class="label-forms">
                    What words should be <u>avoided</u>?
                    Key words, concepts and associations relating to the trial objectives, intended therapeutic outcomes and/or product attributes/benefits to be explored in creative development (you may also include words associated with  your corporate mission, values, etc). These words will serves as a basis around which BI will create

                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsAvoidedInTrialNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>


            <div id="KeyWordsConceptsClinicalTrialGroup">
                <div class="label-forms">
                    Key words, concepts and associations relating to the trial objectives, intended therapeutic outcomes and/or product attributes/benefits to be explored in creative development (you may also include words associated with  your corporate mission, values, etc). These words will serves as a basis around which BI will create
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="KeyWordsConceptsClinicalTrialInput"></textarea>
                    <input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProgramDescriptionGroup">
                <div class="label-forms">
                    Program Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProgramDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="BusinessUnitTherapeuticAreaGroup">
                <div class="label-forms">
                    Business Unit/Therapeutic Area:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="BusinessUnitTherapeuticAreaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="OverlappingValuesGroup">
                <div class="label-forms">
                    What are the overlapping values and attributes of this Program and ClientName?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OverlappingValuesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="MarketNeedGroup">
                <div class="label-forms">
                    What market need does this program fill (what is the reason for the Program)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MarketNeedInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="CompetitiveServicesOfferedGroup">
                <div class="label-forms">
                    Are there any competitive programs/services currently offered? If so, please provide brand names and thoughts on their positioning.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompetitiveServicesOfferedInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="NameFocusGroup">
                <div class="label-forms">
                    Should this name focus on the funcitonal elements (attributes) of the Program or the aspirational elements (benefits)? Please explain your answer.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NameFocusInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="WordsInClassNameGroup">
                <div class="label-forms">
                    Are there any words that <i>must</i> be in the class name?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsInClassNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="NovelConceptsGroup">
                <div class="label-forms">
                    Have any novel concepts or terminology been developed in association with this drug class?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NovelConceptsInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="UnderlyingTechGroup">
                <div class="label-forms">
                    Is there an underlying technology associated with this class?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="UnderlyingTechInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="ClassDifferenceGroup">
                <div class="label-forms">
                    How does this class differ from existing/previous therapies?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClassDifferenceInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TechnologyDescriptionGroup">
                <div class="label-forms">
                    Technology Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TechnologyDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CurrentlyUnderConsiderationGroup">
                <div class="label-forms">
                    Are there currently any names under consideration?  If so, please provide with rationales.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CurrentlyUnderConsiderationInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CorporateNamesUnderConsiderationGroup">
                <div class="label-forms">
                    Are there currently any corporate names under consideration?  If so, please provide with rationales.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CorporateNamesUnderConsiderationInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TaglinesUnderConsiderationGroup">
                <div class="label-forms">
                    Are there currently any taglines under consideration?  If so, please provide with rationales.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TaglinesUnderConsiderationInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TaglinesUsedGroup">
                <div class="label-forms">
                    Have any taglines been used for this product in the past?  Were these taglines marketed?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TaglinesUsedInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="InternalNamingGuidelinesGroup">
                <div class="label-forms">
                    Does your company have any internal naming guidelines?  If so, please explain.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="InternalNamingGuidelinesInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OrgInternalNamingGuidelinesGroup">
                <div class="label-forms">
                    Does your organization have any internal naming guidelines?  If so, please explain.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OrgInternalNamingGuidelinesInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="PartOfTheIndustryGroup">
                <div class="label-forms">
                    Explain what part of the industry you’re in and what group of customers you serve.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="PartOfTheIndustryInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="YourRankInProductCategoryGroup">
                <div class="label-forms">
                    Where do you rank in your product category: one, two, three?  Or is this your first product to serve this audience?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="YourRankInProductCategoryInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="RankProductCategoryNewCompanyGroup">
                <div class="label-forms">
                    Where do you rank in your product category/categories: one, two, three?  Or are you a new company/new to your product category?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="RankProductCategoryNewCompanyInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="YourRankInServiceCategoryGroup">
                <div class="label-forms">
                    Where do you rank in your service category: one, two, three?  Or is this your first service for this audience?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="YourRankInServiceCategoryInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="YourRankInProductCategoryTechGroup">
                <div class="label-forms">
                    Where do you rank in your product category: one, two, three?  Or is this the first technology to serve this audience?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="YourRankInServiceCategoryTechInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WorldNeedsYourProductGroup">
                <div class="label-forms">
                    Why does the world need your product?  What does your audience want most?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WorldNeedsYourProductInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WorldNeedsYourServiceGroup">
                <div class="label-forms">
                    Why does the world need your service?  What does your audience want most?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WorldNeedsYourServiceInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProvideAudienceGroup">
                <div class="label-forms">
                    What can you provide your audience that nobody else can?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProvideAudienceInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="UnsungAbilityAboutProductGroup">
                <div class="label-forms">
                    What’s your “unsung” ability – the #1 thing the market needs to know about your product they don’t know now?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="UnsungAbilityAboutProductInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="UnsungAbilityAboutYouGroup">
                <div class="label-forms">
                    What’s your “unsung” ability – the #1 thing the market needs to know about you they don’t know now?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="UnsungAbilityAboutYouInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="UnsungAbilityAboutYourServiceGroup">
                <div class="label-forms">
                    What’s your “unsung” ability – the #1 thing the market needs to know about your service they don’t know now?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="UnsungAbilityAboutYourServiceInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AboutProductProudGroup">
                <div class="label-forms">
                    What about your product makes you most proud?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AboutProductProudInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AboutCompanyProudGroup">
                <div class="label-forms">
                    What about your company makes you most proud?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AboutCompanyProudInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AboutServiceProudGroup">
                <div class="label-forms">
                    What about your service makes you most proud?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AboutServiceProudInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompetitorsKnownGroup">
                <div class="label-forms">
                    Who are your competitors?  What are they known for, if anything?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompetitorsKnownInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompetitorsPrimarySegmentedGroup">
                <div class="label-forms">
                    Who are your competitors (primary and segmented)?  What are they known for, if anything?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompetitorsPrimarySegmentedInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WinHeadToHeadGroup">
                <div class="label-forms">
                    Why would you win and in a head-to-head competition?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WinHeadToHeadInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanyMissionValuesGroup">
                <div class="label-forms">
                    Does your company have a mission or set of values?  What is it/are they?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanyMissionValuesInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CategoryProductIndustryGroup">
                <div class="label-forms">
                    To what category does your product belong and which industry does it serve?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CategoryProductIndustryInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProductUniqueGroup">
                <div class="label-forms">
                    What makes your product unique?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProductUniqueInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="RankPointOFDiffGroup">
                <div class="label-forms">
                    Please rank your product’s Points of Differentiation vs. its competitors (everything that your product offers that its competitors cannot):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="RankPointOFDiffInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ImageryAssociatedAttriBenefitGroup">
                <div class="label-forms">
                    What imagery do you associate with the attributes and benefits of this product (if you were to create a metaphor for this product, what would it be)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ImageryAssociatedAttriBenefitInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NovelProprietaryGroup">
                <div class="label-forms">
                    Is there a novel/proprietary technology, ingredient or skill that only your product uses?  Please explain.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NovelProprietaryInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TaglinesCompetitorsGroup">
                <div class="label-forms">
                    What are the taglines being used by your competitors (if known/applicable)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TaglinesCompetitorsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanyMissionGroup">
                <div class="label-forms">
                    Company Mission:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanyMissionInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanyVisionGroup">
                <div class="label-forms">
                    Company Vision:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanyVisionInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanyPersonailtyGroup">
                <div class="label-forms">
                    How would you describe the personality of your company?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanyPersonailtyInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TaglineReflectiveGroup">
                <div class="label-forms">
                    How important is it that this tagline is reflective of the values and positioning of the company?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TaglineReflectiveInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OrganizationCoreFocusGroup">
                <div class="label-forms">
                    Explain what your organization’s core focus is and what group of customers you serve.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OrganizationCoreFocusInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OrganizationRankGroup">
                <div class="label-forms">
                    Where does your organization rank amongst comparable nonprofit organizations: one, two, three?  Or is this the first/only organization to serve this audience?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OrganizationRankInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WorldNeedYourOrgGroup">
                <div class="label-forms">
                    Why does the world need your organization?  What does your audience need most?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WorldNeedYourOrgInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WorldNeedYourTechGroup">
                <div class="label-forms">
                    Why does the world need your technology?  What does your audience want most?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WorldNeedYourTechInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProvideYourAudienceGroup">
                <div class="label-forms">
                    What can you provide your audience that nobody else can?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProvideYourAudienceInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="UnsungAbilityOrgGroup">
                <div class="label-forms">
                    What’s your “unsung” ability – the #1 thing the market needs to know about your organization they don’t know now?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="UnsungAbilityOrgInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="UnsungAbilityTechGroup">
                <div class="label-forms">
                    What’s your “unsung” ability – the #1 thing the market needs to know about your technology they don’t know now?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="UnsungAbilityTechInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OrganizationProudGroup">
                <div class="label-forms">
                    What about your organization makes you most proud?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OrganizationProudInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TechnologyProudGroup">
                <div class="label-forms">
                    What about your technology makes you most proud?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TechnologyProudInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="HeadToHeadGroup">
                <div class="label-forms">
                    Why would you be selected in a head-to-head competition?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="HeadToHeadInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="OrgMissionValuesGroup">
                <div class="label-forms">
                    Does your organization have a mission or set of values?  What is it/are they?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OrgMissionValuesInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>

    @*Page 3*@

    <div id="page3" class="panel panel-default">
        <div class="panel-body">

            @*Table Attributes and Benefits for RX*@


            <div id="ProductAttributesTableGroup">
                <label><u><b>Attributes and Benefits:</b></u></label><br />
                <input class="selectCheckbox" style="float: right;" type="checkbox" />
                <table class="table table-bordered " style="background-color: lightgray;">
                    <tr>
                        <td id="CorporateAttributesGroup" class="tableGroup">
                            <div class="label-forms">Corporate Attributes (Rank)</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="CorporateAttributesInput"></textarea>
                            </div>
                        </td>
                        <td id="ProductAttributesGroup" class="tableGroup">
                            <div class="label-forms">Product Attributes (Rank)</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="ProductAttributesInput"></textarea>
                            </div>
                        </td>

                        <td id="OrganizationAttributesGroup" class="tableGroup">
                            <div class="label-forms">Organization Attributes</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="OrganizationAttributesInput"></textarea>
                            </div>
                        </td>
                        <td id="OrganizationBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Organization Benefits</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="OrganizationBenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="TechnologyAttributesGroup" class="tableGroup">
                            <div class="label-forms">Technology Attributes</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TechnologyAttributesInput"></textarea>
                            </div>
                        </td>
                        <td id="TechnologyBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Technology Benefits </div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TechnologyBenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="CorporateBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Corporate Benefits</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="CorporateBenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="ServiceAttributesGroup" class="tableGroup">
                            <div class="label-forms">Service Attributes</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="ServiceAttributesInput"></textarea>
                            </div>
                        </td>
                        <td id="ProductBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Product Benefits</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="ProductBenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="ServiceBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Service Benefits</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="ServiceBenefitsInput"></textarea>
                            </div>
                        </td>

                        <td id="PatientBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Patient Benefits (Rank)</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="PatientBenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="PhysicianBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Physician Benefits (Rank) </div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="PhysicianBenefitsInput"></textarea>
                            </div>
                        </td>

                        <td id="ProgramAttributesGroup" class="tableGroup">
                            <div class="label-forms">Program Attributes </div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="ProgramAttributesInput"></textarea>
                            </div>
                        </td>
                        <td id="ProgramBenefitsGroup" class="tableGroup">
                            <div class="label-forms">Program Benefits </div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="ProgramBenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="TechnologyAttributesRankGroup" class="tableGroup">
                            <div class="label-forms">Technology Attributes (Rank)</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TechnologyAttributesRankInput"></textarea>
                            </div>
                        </td>
                        <td id="IndustrySpecificTerminologyGroup" class="tableGroup">
                            <div class="label-forms">Industry Specific Terminology</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="IndustrySpecificTerminologyInput"></textarea>
                            </div>
                        </td>
                        <td id="PointsOfDiffCompetitorsGroup" class="tableGroup">
                            <div class="label-forms">Points of Differentiation (Vs. Competitors): (ES UNA LISTA)</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="PointsOfDiffCompetitorsInput"></textarea>
                            </div>
                        </td>
                    </tr>
                </table>
                <hr />
            </div>

            @*Table Competitive landscape*@

            <div id="CompetitiveLandscapeTableGroup">
                <div style="float: left; padding: 5px;">
                    <label id="competitvelandscapeLabel"><u><b>Competitive landscape:</b></u></label><br />
                </div>
                <div class="hidden-print" style="float: right; padding: 5px;">
                    <input id="competitiveLandscapeCheckBox" checked="true" class="selectCheckbox" style="float: right; top: 0;" type="checkbox" />
                </div>

                <div class="hidden-print" style="float: right; padding: 5px;">
                    <input id="addrowbutton" type="button" value="Add Competitor" data-toggle="tooltip" data-placement="top" title="add rows to the table" />
                </div>
                <div class="hidden-print" style="float: right; padding: 5px;">
                    <input id="deleterowbutton" type="button" value="Delete Selected Row" />
                </div>

                <div class="clear"></div>
                <div id="CompetitiveLandscapegrid">
                </div>
                <hr />
            </div>

            @*Table Creative Direction*@

            <div id="CreativeDirectionTableGroup">
                <label><u><b>Creative Direction:</b></u></label><br />
                <input class="selectCheckbox" style="float: right;" type="checkbox" />
                <table class="table table-bordered " style="background-color: lightgray;">
                    <tr>
                        <td id="KeyWordsConceptsGroup" class="tableGroup2">
                            <div class="label-forms">Key Words/Word Parts/Concepts</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="KeyWordsConceptsInput"></textarea>
                            </div>
                        </td>
                        <td id="ImageryGroup" class="tableGroup2">
                            <div class="label-forms">Imagery</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="ImageryInput"></textarea>
                            </div>
                        </td>
                        <td id="AvoidGroup" class="tableGroup2">
                            <div class="label-forms">Avoid</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="AvoidInput"></textarea>
                            </div>
                        </td>
                        <td id="AttributesGroup" class="tableGroup2">
                            <div class="label-forms">Attributes</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="AttributesInput"></textarea>
                            </div>
                        </td>
                        <td id="BenefitsGroup" class="tableGroup2">
                            <div class="label-forms">Benefits</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="BenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="DistinguishingCharacteristicsKeywordsGroup" class="tableGroup2">
                            <div class="label-forms">Distinguishing Characteristics/Keywords</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="DistinguishingCharacteristicsKeywordsInput"></textarea>
                            </div>
                        </td>
                    </tr>
                </table>
                <hr />
            </div>

            @*****************************************************************************************************************************************@


            <div id="AdditionalCommentsGroup">
                <div class="label-forms">
                    <u><b>Additional Comments: </b></u>
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AdditionalCommentsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProductLineExtensionGroup">
                <div class="label-forms">
                    Briefly describe the product line extension.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProductLineExtensionInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ReasonForNewProductGroup">
                <div class="label-forms">
                    What market need does this line extension fill (what is the reason for the new product)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ReasonForNewProductInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CombinationProductGroup">
                <div class="label-forms">
                    If this is a combination product, what drugs are being combined (include brand and nonproprietary names if known)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CombinationProductInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NamingStrategyGroup">
                <div class="label-forms">
                    What is the preferred naming strategy for this line extension (new/independent brand, current base brand associated and/or modifier)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NamingStrategyInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ModifiersConsideredGroup">
                <div class="label-forms">
                    Are any names or modifiers currently being considered (if so, please provide names/modifiers with rationales)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ModifiersConsideredInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>

            @*Table Trial Naming Direction*@
            <div id="TrialNamingDirectionTableGroup">
                <label><u><b>Trial Naming Direction:</b></u></label><br />
                <input class="selectCheckbox" style="float: right;" type="checkbox" />
                <table class="table table-bordered " style="background-color: lightgray;">
                    <tr>
                        <td id="TrialAttributesGroup" class="tableGroup3">
                            <div class="label-forms">Attibutes</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TrialAttributesInput"></textarea>
                            </div>
                        </td>
                        <td id="TrialBenefitsGroup" class="tableGroup3">
                            <div class="label-forms">Benefits/Outcomes</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TrialBenefitsInput"></textarea>
                            </div>
                        </td>
                        <td id="TrialImageryGroup" class="tableGroup3">
                            <div class="label-forms">Imagery</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TrialImageryInput"></textarea>
                            </div>
                        </td>
                        <td id="TrialScienceGroup" class="tableGroup3">
                            <div class="label-forms">Science</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TrialScienceInput"></textarea>
                            </div>
                        </td>
                        <td id="TrialCorporateGroup" class="tableGroup3">
                            <div class="label-forms">Corporate</div>
                            <div class="input-forms" style="float: none; width: 100%;">
                                <textarea disabled class="form-control bullettTextarea" id="TrialCorporateInput"></textarea>
                            </div>
                        </td>

                    </tr>
                </table>
            </div>


            <div id="WordsAndAssociationsGroup">
                <div class="label-forms">
                    Words and Associations:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsAndAssociationsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="checkbox" />
                </div>
                <div class="clear"></div>
            </div>


        </div>
    </div>
    @*end of the panel*@
</form>


@*<button class="btn btn-info" onclick="turnInputsOn()"></button>*@

@code
    Dim MyUsername = User.Identity.Name

End Code
<input id="MyUsername" style="display:none;" value="@MyUsername" />

<script src="~/Scripts/PPRFIles/PPRTemplateForm.js"></script>

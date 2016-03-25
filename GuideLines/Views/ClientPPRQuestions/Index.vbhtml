@Code
    ViewData("Title") = "Index"
End Code
<script  type="text/javascript" src="~/Scripts/PluginsJS/jquery.autosize.min.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/alert.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/jquery.growl.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/tooltip.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/transition.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/modal.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/alert.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/popover.js"></script>
<script  type="text/javascript" src="~/Scripts/jqwidgets/jqxresponse.js"></script>
<script  type="text/javascript" src="~/Scripts/PluginsJS/jquery.growl.js"></script>
<script  type="text/javascript"  src="~/Scripts/jqwidgets/jqxresponse.js"></script>
 <link  type="text/css" href="~/Content/jquery.growl.css" rel="stylesheet" />
<style type="text/css">

    body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #333333;
  background-color: #ffffff;
}

    textarea {    
       font-family: Tahoma, sans-serif;
       width: 100%;
       overflow: hidden; 
       word-wrap: break-word; 
       resize: vertical;   
         font-size-adjust: 0.5;
       min-height:20px;
    }
    .bullettTextarea {
    padding:0;
    
    }

    .navbar {

    margin-bottom:10px;
    margin-top:10px;
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
        float:left;
        font-size-adjust: 0.5;
         padding: 5px 0px 5px 5px;
    }
    
    .input-forms {
          float: right;
          min-width:70%;
          padding: 5px 8px 5px 5px;

        }

    .input-header {
         background-color: #fff;
    }

    .dropdown-menu button{ 
        background-color:white;
    }

    .green {
           color: #555555;
            background-color: #ffffff;
            border: 1px solid #D3D3D3;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
           -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;            
            margin-bottom:0;
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
           margin-top:0;
            word-wrap: break-word;    
        }
      
    .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected), .jqx-widget .red:not(.jqx-grid-cell-hover):not(.jqx-grid-cell-selected) {
               background-color: #FFFFFF;
                border: 1px solid #D3D3D3;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
                transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;             
                 word-wrap: break-word;    
        }

    .selectCheckboxTextArea {
                position: relative;
                bottom: 29px;
                right: -241px;
                display:block;
                font-size-adjust:0.3;
                border-radius: 4px;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
                display:none;
       }  
    
      .selectCheckboxTextArea:focus {
            border-color: #66afe9;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
            outline: 0 none;
       }

    .tableGroup , .tableGroup2{
            float:left;     
            padding:0;       
    } 

    .embose{
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        text-shadow:  0px -1px rgba(0, 0, 0, 0.2);
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        -ms-text-rendering: optimizeLegibility;
        -o-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
}

    .pageBreak { 
            page-break-before:always; 
    }

</style>

@*Modal Boxes*@
<button id="sendQuestonsToClientButton" class="btn btn-primary" style="display:none;" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>

<div id="sendQuestonsToClientModalBox" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="padding: 25px;">

            <form role="form">

                <div id="ClientGroup">
                    <div class="label-forms">
                        Client:            
                    </div>
                    <div class="input-forms">
                        @Code
                            Dim objConn = Database.Open("GuideLinesModel")
                            Dim strSQL As String = "SELECT * FROM Clients"
                            Dim result = objConn.Query(strSQL)
                            Dim clientItems = New SelectList(result, "ClientId", "ClientFullName", "")
                        End Code
                        <div class="text-box">
                            @Html.DropDownList("ClientDropdown", clientItems, "Select your Client or type a new one", New With {.style = " float: right; width:85%; border-radius: 4px;"})
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="emailAdressesGroup">
                    <div class="label-forms">
                        Email address:            
                    </div> 
                    <div class="input-forms">
                        <input class="form-control" id="emailAdresses" />
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

                <div id="emailAdressesBodyGroup">
                    <div class="label-forms">
                        Email Body:            
                    </div>
                    <div class="input-forms">
                        <textarea class="form-control" id="emailAdressesBody"></textarea>
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="adminEmailAdressesGroup">
                    <div class="label-forms">
                        Admin Email address:            
                    </div>
                    <div class="input-forms">
                        <input class="form-control" id="adminEmailAdresses" />
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="clientNameGroup">
                    <div class="label-forms">
                        Client Name:            
                    </div>
                    <div class="input-forms">
                        <input class="form-control" id="clientName" />
                    </div>
                    <div class="clear"></div>
                </div>

                <div id="clientTitleGroup">
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
<button   id="saveDataAlertBtn" style="display:none;" class="btn btn-primary" data-toggle="modal" data-target="#saveDataAlert"></button>

<div id="saveDataAlert" class="modal fade saveDataAlert" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div role="alert" class="alert alert-info fade in" style="display:block;">
            <h4 id="mySmallModalLabel" class="modal-title">The project was sucessfuly saved</h4>
      <p>Thank you,<br /> click on the "OK" to dismissed this window and continue editing</p>    
              <button style="float:right;" type="button" class="btn btn-info"  data-dismiss="modal">OK</button> 
    </div>
           
    </div>
  </div>
</div>

<button   id="saveClientAlertBtn" style="display:none;" class="btn btn-primary" data-toggle="modal" data-target="#saveClientAlert"></button>
<!-- Small modal -->
<div id="saveClientAlert" class="modal fade saveClientAlert" tabindex="-1" role="dialog" aria-labelledby="SmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div role="alert" class="alert alert-info fade in" style="display:block;">
            <h4 id="SmallModalLabel" class="modal-title">Brand Institute was successfully emailed.</h4><br /> 
              <p>You may close this window if you are done! </p>  
              <p>Thank you.</p>  
              <button style="float:right;" type="button" class="btn btn-info"  data-dismiss="modal">OK</button> 
    </div>           
    </div>
  </div>
</div>

@*Idle Modal box*@
<div id="idleAlert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="idleLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div role="alert" class="alert alert-warning fade in" style="display:block;">
            <h4  id="idleLabel" class="modal-title">Your Session is been idle for 10 minutes</h4>
              <p >
                  <br />Your session expires after several minutes of inactivity, and all information is saved in our data base; Click on the "Stay" if you wanna continue with the session!
               </p>    
              <button style="float:right;" type="button" class="btn btn-info"  onClick="stayInSession()" data-dismiss="modal">Stay</button> 
              <button style="float:right; margin-right: 10px;" type="button" class="btn btn-danger"  onClick="location.href='goTothanksyouPage()'" data-dismiss="modal" >Leave</button> 
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
              <button style="float:right;" type="button" class="btn btn-info"  onClick="stayInSession()" data-dismiss="modal">Stay</button> 
              <button style="float:right; margin-right: 10px;" type="button" class="btn btn-danger"  onClick="goTothanksyouPage()" data-dismiss="modal">Leave</button> 
    </div>           
    </div>
  </div>
</div>


<!--Intruccions modal box -->
<div id="intructionsAlert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="SmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div role="alert" class="alert  alert-dismissible fade in" style="display:block;">
            <div class="alert alert-info">
                <div> <h4  class="modal-title embose">Thank you for taking the time to complete your project’s Product Profile Report (PPR)</h4>    </div><hr />
                <div>1. Please fill in this form to the best of your availability by completing the text boxes with red borders.</div><br />
                <div>2. If any of the information is inaccurate, or you would simply like to comment on any section, please do so in the corresponding Comments box on the right.</div><br />
                <div>3. Once you are finished, please click the done button on the left.  You can also print a copy for your records by clicking the print button.</div><br />
                <div style="color:#0094ff; ">Please note that this is a working draft that will be updated and evolve over time. 
                     If you would like Brand Institute to send this form to one of your colleagues, please send the name and email of that individual 
                    to <span style="color:black" class="LEAD_DIRECTOR "> </span> at <span style="color:black" id="LEAD_DIRECTOR_EMAIL"></span>, and let us know which section you would like them to address.</div><br />
                <br /><div>Very kind regards,</div><br />
                <div><span style="color:black" class="LEAD_DIRECTOR"></span></div>              
            </div>
           
              <button style="float:right;" type="button" class="btn btn-info"  data-dismiss="modal">Dismiss</button> 
    </div>           
    </div>
  </div>
</div>
@*End Of Modal Boxes*@


@*Navigation bar menu*@
<nav  class="navbar navbar-default hidden-print" role="navigation" style="background-color:white;display:none;">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Admin</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> 
        <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
               <input class="form-control" type="text" id="searchproject" onchange="searchProjectChange()" placeholder="Search By Project Keywords" style="float: left; font-size: 0.8em;" />
   @*       <input type="text" class="form-control" placeholder="Search">*@
        </div>
           <button type="button" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav">
  @*      <li class="active"><a href="#">link</a> </li>*@
        <li><div class="hidden-print" id='jqxdropdownlist' style="margin:11px 0px 0px 11px;"></div></li>        
      </ul>
        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">PPR Templates <b class="caret"></b></a>
                <div class="dropdown-menu">
                    <div>
                        <button id="RX" class="btn" onclick="templateChoice(id)" type="button" title="RX" > RX </button>                     
                    </div>
                    <div>
                        <button id="MEDICAL DEVICE" class="btn" onclick="templateChoice(id)" type="button" title="MEDICAL DEVICE"></button>
                        MEDICAL DEVICE
                    </div>
                    <div>
                        <button id="OTC" class="btn" onclick="templateChoice(id)" type="button" title="OTC" ></button>
                        OTC
                    </div>
                    <div>
                        <button id="NONPROP" class="btn" onclick="templateChoice(id)" type="button" title="NONPROP" ></button>
                        NONPROP
                    </div>
                    <div>
                        <button id="ANIMAL HEALTH" class="btn" onclick="templateChoice(id)" type="button" title="ANIMAL HEALTH" ></button>
                        ANIMAL HEALTH
                    </div>
                    <div>
                        <button id="RX BRAND NAME LINE EXTENSION" class="btn" onclick="templateChoice(id)" type="button" title="RX BRAND NAME LINE EXTENSION" ></button>
                        RX BRAND NAME LINE EXTENSION
                    </div>
                    <div>
                        <button id="MODIFIER NAME LINE EXTENSION" class="btn" onclick="templateChoice(id)" type="button" title="MODIFIER NAME LINE EXTENSION" ></button>
                        MODIFIER NAME LINE EXTENSION
                    </div>
                    <div>
                        <button id="CLINICAL TRIAL NAME" class="btn" onclick="templateChoice(id)" type="button" title="CLINICAL TRIAL NAME" ></button>
                        CLINICAL TRIAL NAME
                    </div> 
                    <div>
                        <button id="PROGRAM BRAND NAME" class="btn" onclick="templateChoice(id)" type="button" title="PROGRAM BRAND NAME" ></button>
                        PROGRAM BRAND NAME
                    </div> 
                    <div>
                        <button id="CLASS NAME" class="btn" onclick="templateChoice(id)" type="button" title="CLASS NAME" ></button>
                        CLASS NAME
                    </div>
                       <div>
                        <button id="TECHNOLOGY BRAND NAME" class="btn" onclick="templateChoice(id)" type="button" title="TECHNOLOGY BRAND NAME" ></button>
                        TECHNOLOGY BRAND NAME
                    </div> 
                      </div>
                    
                        
            </li>
        </ul>

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
   
</nav>


@*Side Menu*@
<div  id="mainmenu" class="hidden-print" style="float: left; left: inherit; margin-left: -60px; position: fixed; top: 50px;">
    <div class="list-group">
         @*       <label id="templateTypeDisplay" style=" border-radius: 4px; text-align: right; margin-bottom: 5px;  padding: 3px; display:block;" class="alert alert-info" >Template</label>
         <div class="clear"></div>     *@
        <label id="projectNameDisplay"  style=" border-radius: 4px; text-align: right; margin-bottom: 0px;  padding: 3px; display:block;"class="alert alert-info " >Project</label>
    </div>
</div>

<div class="hidden-print" style="float: left; left: inherit; margin-left: -60px; position: fixed; top: 80px;">
    <div class="list-group">
         <button style="width:54px; display:none" id="savedataBtn" disabled class="btn btn-success" type="button" onclick="saveData()"><span class="glyphicon glyphicon-floppy-save"></span> <br /> <p>save</p></button>       
        <div class="clear"></div>
        <button style="width:54px;display:none;" id="selectQuestions" disabled onclick="selectQuestions();" class="btn btn-warning"><span  class="glyphicon glyphicon-send"></span></button>
        <div class="clear"></div>
        <button style="width:54px; display:none;" id="sendQuestions" onclick="sendQuestions();" class="btn btn-danger"><span class="glyphicon glyphicon-envelope"></span></button>
        <div class="clear"></div>
      @*  <button style="width:54px" id="printBtn" disabled class="btn btn-info" type="button" onclick="printPage()"><span class="glyphicon glyphicon-print"></span><br /> <span>print</span></button>*@
        <div class="clear"></div>
        <a  id="#mainmenu" href="#mainmenu" style="color:#004684; display:none" class="list-group-item btn btn-info"><span class="glyphicon glyphicon-arrow-up"></span><br /> <span>up</span></a>
        <a id="#page2" href="#page2" style="color:#004684; display:none" class="list-group-item btn btn-info"><span class="glyphicon glyphicon-minus"></span><br /> <span>center</span></a>
        <a id="#page3" href="#page3" style="color:#004684; display:none" class="list-group-item btn btn-info"><span class="glyphicon glyphicon-arrow-down"></span><br /> <span>down</span></a>
        <button style="width:54px; display:none" id="lockbtn"  class="btn btn-danger" type="button" onclick="reloadpage()"><span class="glyphicon glyphicon-lock"></span></button>
        <button style="display : none; width:54px; background-color:#0094f0" id="toggleversionControlIn"  class="btn btn-info" type="button"  onclick="fadeInVersionControl()"><span class="glyphicon glyphicon-info-sign"></span><br /> <span>ver</span></button>
          <button style="width:54px; display:none; background-color:#0094f0" id="toggleversionControlOut"  class="btn" type="button"  onclick="fadeOutVersionControl()"><span class="glyphicon glyphicon-info-sign"></span><br /> <span>ver</span></button>
        <div class="clear"></div>  
              
        <button style="width:54px;  background-color:#0094ff" id="help"  class="btn btn-info"  onclick="goToBIhelp()"  type="button">  <span class="glyphicon glyphicon-question-sign"></span><br /> <span>help</span></button>         
        <button style="width:54px; display:block" id="submitData"  class="btn btn-success" type="button"  onclick="saveData()"><span class="glyphicon glyphicon-circle-arrow-up"></span><br /> <span>Save</span></button>
        <div style="width:54px;display:none;" id ="ClinicalGroup">
        <div id="CTNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size: xx-small; width:54px;">
            <label>CTN</label>
            <br />
            <input id="CTN" type="checkbox" />
            <div class="clear"></div>
        </div>
        <br />

        <div id="PBNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size: xx-small; width:54px;">
            <label>PBN</label>
            <br />
            <input id="PBN" type="checkbox" /><br />
            <div class="clear"></div>
        </div>
        <br />

         <div id="CNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size: xx-small; width:54px;">
            <label>CN&nbsp&nbsp</label>
            <br />
            <input id="CN" type="checkbox" /><br />
            <div class="clear"></div>
        </div>
        <br />

         <div id="TBNGROUP" class="btn btn-default" style="background-color: RGB(255,199,206); font-size:xx-small; width:54px;">
            <label>TBN</label>
            <br />
            <input id="TBN" type="checkbox" /><br />
            <div class="clear"></div>
        </div>
            </div>
        
    </div>

</div>

@*Main Document Form*@
  <form id="content" class="form-horizontal form-inline" role="form" style="padding-top:30px; ">
    @*Page 1*@

    <div class="panel panel-default">
        <div class="panel-body">
            <h1 style="display:block; margin-left: auto; color:red; margin-right: auto; width: 7em" id="loadingdata"> Loading Data...</h1>

            @*BI Logos and template type *@
            <div class="col-md-12 column">
                <img class="media-object" alt="64x64" data-src="holder.js/64x64" style="width: 20%; float: left;" src="~/Images/BiLogoDoc2.jpg" />
                <div class="hidden-print" id="templateType" style="display:none; float: left; margin: auto;text-align: center; width: 60%;font-size:larger;"></div>
                <img class="media-object" alt="64x64" data-src="holder.js/64x64" style="width: 20%; float: right;" src="~/Images/DsiLogo.jpg" />
            </div>
            <div class="clear"></div>

            @* Client Name Project Name and Date of the project *@
            <div class="col-md-12 column">
                <div class="row clearfix">
                    <div class="col-md-12 column">
                        <h3 id="currentClientname" style="padding-right:0px"><strong>ClientName</strong></h3>
                        <h3>,</h3>
                        <h3>Name: </h3>
                        <h3 id="currentProject">ProjectName </h3>

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
                        <h3>Product Profile Report  </h3>
                        <h3 id="salesDate">Month X, 2014 </h3>
                        <div id="salesDateGroup" style="display:none;">
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

                <li class="list-group-item" style="background-color: lightgray;height: 60px;">
                    <div id="ClientNameProjectLeadGroup">
                        <div class="label-forms">Client Name Project Lead:</div>
                        <div class="input-forms">
                            <input class="form-control" id="Client_Name_Project_Lead" disabled />
                            <label class="hidden-print" style="position: relative; top: -100px; right: -611px; font-size: 1.5em; font-weight: 700; display:none;">Comments <span class="glyphicon glyphicon-arrow-down"></span></label>
                            <input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>

                <li class="list-group-item">
                    <div id="ClientNameProjectLeadTitleGroup" style="display:none;">
                        <div class="label-forms" style="display:none;">
                            Title:
                        </div>
                        <div class="input-forms" style="display:none;">
                            <input class="form-control" id="Client_Name_Project_Lead_Title" /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div id="ClientNameProjectLeadEmailGroup">
                        <div class="label-forms">E-mail Address:</div>
                        <div class="input-forms">
                            <input class="form-control" id="Client_Name_Project_Lead_Email" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>



                    <div id="ClientNameProjectLeadTelephoneGroup">
                        <div class="label-forms">Client Telephone Number:</div>
                        <div class="input-forms">
                            <input class="form-control" id="Client_Name_Project_Lead_Telephone" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>

                <li class="list-group-item" style="background-color: lightgray;height: 60px;">
                    <div id="BrandInstituteDirectorsGroup">
                        <div class="label-forms">
                            Brand Institute Directors:
                        </div>
                        <div class="input-forms">
                            <input class="form-control input-header" id="Brand_Institute_Directors" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
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
                            <input class="form-control" id="Brand_Institute_Directors_Emails" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>


                    <div id="BrandInstituteDirectorsPhoneNumbersGroup">
                        <div class="label-forms">
                            Telephone Numbers:
                        </div>
                        <div class="input-forms">
                            <input class="form-control" id="Brand_Institute_Directors_Phone_Numbers" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>

                <li class="list-group-item" style="background-color: lightgray;height: 60px;">
                    <div id="BIBrandManagerGroup">
                        <div class="label-forms">BI Brand Manager:</div>
                        <div class="input-forms">
                            <input class="form-control input-header" id="BI_Brand_Manager" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>

                </li>
                <li class="list-group-item">
                    <div id="BIBrandManagerEmailGroup">
                        <div class="label-forms">Email Address:</div>
                        <div class="input-forms">
                            <input class="form-control" id="BI_Brand_Manager_Email" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div id="BIBrandManagerTelephoneGroup">
                        <div class="label-forms">Telephone Number:</div>
                        <div class="input-forms">
                            <input class="form-control" id="BI_Brand_Manager_Telephone" disabled /><input class="selectCheckboxTextArea" style="float: right;" type="text" />
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
                    <input class="form-control" id="Naming_Scope" disabled /><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="BIServicesGroup">
                <div class="label-forms">
                    BI Services:
                </div>
                <div class="input-forms">
                    <input class="form-control" id="Bi_Services" disabled /><input class="selectCheckboxTextArea" style="float:right;" type="text" />
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
                        <input class="selectCheckboxTextArea" style="float:right;right:-258px;" type="text" />
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
                        <input class="selectCheckboxTextArea" style="float:right;right:-258px;" type="text" />
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
                    <textarea class="form-control" id="Trademark_Class" disabled></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
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
                    <textarea class="form-control" id="In_which_countries_will_market_safety" disabled></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MarketSafetyResearchAgenciesGroup">
                <div class="label-forms">
                    To which agencies will names be submitted?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="To_which_agencies_will_names_be_submitte" disabled></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

        </div>

    </div>

    @*Page 2*@

    @*        <div class="pageBreak"></div>     *@
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
                    <textarea class="form-control" id="ProductOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="DrugClassGroup">
                <div class="label-forms">
                    Drug Class/Classification:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="DrugClassInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NonPropGenericNameGroup">
                <div class="label-forms">
                    Nonproprietary/Generic Name:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e. established name)" id="NonPropGenericNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="USANINNSTEMGroup">
                <div class="label-forms">
                    USAN/INN Stem:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="USANINNSTEMInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="IndicationGroup">
                <div class="label-forms">
                    Indication(s):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e. proposed indication, e.g. For the treatment of asthma)" id="IndicationInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="StandardDoseGroup">
                <div class="label-forms">
                    Standard Dose:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e. product strength, e.g. 50mg or 100mg)" id="StandardDoseInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="AdditionalDoseGroup">
                <div class="label-forms">
                    Additional Dose:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AdditionalDoseInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
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
                        <input class="selectCheckboxTextArea" style="float:right;right:-258px;" type="text" />
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div id="RouteOfAdminitrationDropdownlistGroup">
                <div class="label-forms">
                    Route(s) of Administration:
                </div>
                <div class="input-forms">
                    <div class="col-md-12 column" style="padding-left: 0px;">
                        <textarea style="background-color:white;" class="form-control" id="RouteOfAdminitrationInput"></textarea>
                        <div class="hidden-print" style="float: right;margin-top:10px;" id='RouteOfAdminitrationDropdownlist'></div>
                        <input class="selectCheckboxTextArea" style="float:right;right:-258px;" type="text" />
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div id="FrequencyOfAdministrationGroup">
                <div class="label-forms">
                    Frequency of Administration:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" placeholder="(i.e., once daily, twice daily, etc.)" id="FrequencyOfAdministrationInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ConceptStatementGroup">
                <div class="label-forms">
                    Concept Statement:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ConceptStatementInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="PositioningGroup">
                <div class="label-forms">
                    Positioning:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="PositioningInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MOAGroup">
                <div class="label-forms">
                    Mechanism of Action (MOA):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MOAInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NamesUnderConstructionGroup">
                <div class="label-forms">
                    Name(s) Under Consideration:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NamesUnderConstructionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="BeingConsideredByGroup">
                <div class="label-forms">
                    Being Considered By:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="BeingConsideredByInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />

                </div>  <div class="clear"></div>
                <br />
                <div id="beingConsiderByDropdown" class="dropdown" style="float: right;margin-top: -40px;margin-right: 8px;display:none;">
                    <button class="btn btn-default dropdown-toggle hidden-print" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
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
                <div class="clear"></div>
            </div>


            <div id="NamesRejectedGroup">
                <div class="label-forms">
                    Name(s) Rejected:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NamesRejectedInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="RationaleForRejectionGroup">
                <div class="label-forms">
                    Rationale for Rejection:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="RationaleForRejectionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="DeviceDescriptionGroup">
                <div class="label-forms">
                    Device Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="DeviceDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ContainDrugGroup">
                <div class="label-forms">
                    Does this device contian a drug?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ContainDrugInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TherapeuticAreaGroup">
                <div class="label-forms">
                    Therapeutic Area:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TherapeuticAreaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="TherapeuticClassGroup">
                <div class="label-forms">
                    Therapeutic Class:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TherapeuticClassInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProductDescriptionGroup">
                <div class="label-forms">
                    Product Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProductDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="INDNumberGroup">
                <div class="label-forms">
                    IND Number:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="INDNumberInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CASNumberGroup">
                <div class="label-forms">
                    CAS Number:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CASNumberInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MolecularFormulaGroup">
                <div class="label-forms">
                    Molecular Formula:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MolecularFormulaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="MolecularWeightGroup">
                <div class="label-forms">
                    Molecular Weight:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MolecularWeightInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="StructuralFormulaGroup">
                <div class="label-forms">
                    Structural Formula:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="StructuralFormulaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="PharmacologicalGroup">
                <div class="label-forms">
                    Pharmacological Group (if any):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="PharmacologicalGroupInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ChemicalNameGroup">
                <div class="label-forms">
                    Chemical Name (or Description):
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ChemicalNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ManufacturerSubmitterGroup">
                <div class="label-forms">
                    Manufacturer or Submitter:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ManufacturerSubmitterInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ClinicalTrialStartDateGroup">
                <div class="label-forms">
                    Date Clinical Trial Began:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalTrialStartDateInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ClinicalDevelopmentGroup">
                <div class="label-forms">
                    Phase of Clinical Development:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalDevelopmentInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CompanionOrLivestockGroup">
                <div class="label-forms">
                    Companion or Livestock:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompanionOrLivestockInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="AssociatedUnderlyingDrugTechnologyGroup">
                <div class="label-forms">
                    Is there an underlying technology associated with this drug?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="AssociatedUnderlyingDrugTechnologyInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="LeverageBrandsGroup">
                <div class="label-forms  col-md-6">
                    Are there any leveragable/equitable brands within your animal health portfolio with which this new brand might be associated?
                </div>
                <div class="input-forms col-md-6">
                    <textarea class="form-control" id="LeverageBrandsInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="ClinicalTrialNameGroup">
                <div class="label-forms">
                    <b>Clinical Trial Name</b>
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalTrialNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialPhaseGroup">
                <div class="label-forms">
                    Trial Phase:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialPhaseInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialOverviewGroup">
                <div class="label-forms">
                    Trial Overview:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialOverviewInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialObjectivesGroup">
                <div class="label-forms">
                    Trial Objectives/Endpoints:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialObjectivesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialNamesUnderConsiderationGroup">
                <div class="label-forms">
                    Are there any trial names currently under consideration? If so, please provide with rationale.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialNamesUnderConsiderationInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TrialNamesForOtherPhasesGroup">
                <div class="label-forms">
                    Are there trial names for other phases of this compound? If so, please provide with rationale.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TrialNamesForOtherPhasesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="LeveragePastTrialNamesGroup">
                <div class="label-forms">
                    Should the past trial name(s) be leveraged in any way for this new trial (if applicable)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="LeveragePastTrialNamesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="ClinicalTrialsForTherapeuticAgentsGroup">
                <div class="label-forms">
                    Are there currently other clinical trials for competitive therapeutic agents? If so, please provide drug brand/nonproprietary name and clinical trial name(if known).
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClinicalTrialsForTherapeuticAgentsInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="WordsIncludedInTrialNameGroup">
                <div class="label-forms">
                    What words, if any, <u>must</u> be included in this clinical trial name?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsIncludedInTrialNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WordsApproproateInTrialNameGroup">
                <div class="label-forms">
                    What words <u>might</u> be appropriate to include in this clinical trial name (possibly, but may not be necessary)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsApproproateInTrialNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="WordsAvoidedInTrialNameGroup">
                <div class="label-forms">
                    What words should be <u>avoided</u>?
                    Key words, concepts and associations relating to the trial objectives, intended therapeutic outcomes and/or product attributes/benefits to be explored in creative development (you may also include words associated with  your corporate mission, values, etc). These words will serves as a basis around which BI will create
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsAvoidedInTrialNameInput"></textarea>
                    <input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>


            <div id="KeyWordsConceptsClinicalTrialGroup">
                <div class="label-forms">
                    Key words, concepts and associations relating to the trial objectives, intended therapeutic outcomes and/or product attributes/benefits to be explored in creative development (you may also include words associated with  your corporate mission, values, etc). These words will serves as a basis around which BI will create
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="KeyWordsConceptsClinicalTrialInput"></textarea>
                    <input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProgramDescriptionGroup">
                <div class="label-forms">
                    Program Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProgramDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="BusinessUnitTherapeuticAreaGroup">
                <div class="label-forms">
                    Business Unit/Therapeutic Area:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="BusinessUnitTherapeuticAreaInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="OverlappingValuesGroup">
                <div class="label-forms">
                    What are the overlapping values and attributes of this Program and ClientName?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="OverlappingValuesInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="MarketNeedGroup">
                <div class="label-forms">
                    What market need does this program fill (what is the reason for the Program)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="MarketNeedInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="CompetitiveServicesOfferedGroup">
                <div class="label-forms">
                    Are there any competitive programs/services currently offered? If so, please provide brand names and thoughts on their positioning.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CompetitiveServicesOfferedInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="NameFocusGroup">
                <div class="label-forms">
                    Should this name focus on the funcitonal elements (attributes) of the Program or the aspirational elements (benefits)? Please explain your answer.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NameFocusInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="WordsInClassNameGroup">
                <div class="label-forms">
                    Are there any words that <i>must</i> be in the class name?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="WordsInClassNameInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="NovelConceptsGroup">
                <div class="label-forms">
                    Have any novel concepts or terminology been developed in association with this drug class?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NovelConceptsInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="UnderlyingTechGroup">
                <div class="label-forms">
                    Is there an underlying technology associated with this class?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="UnderlyingTechInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="ClassDifferenceGroup">
                <div class="label-forms">
                    How does this class differ from existing/previous therapies?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ClassDifferenceInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
            <div id="TechnologyDescriptionGroup">
                <div class="label-forms">
                    Technology Description:
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="TechnologyDescriptionInput"></textarea><input class="selectCheckboxTextArea" style="float:right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>

    @*Page 3*@
    @*  <div class="pageBreak"></div>     *@
    <div id="page3" class="panel panel-default">
        <div class="panel-body">

            @*Table Attributes and Benefits for RX*@


            <div id="ProductAttributesTableGroup">
                <label><u><b>Attributes and Benefits:</b></u></label><br />
                <input class="selectCheckboxTextArea" style="float:right; bottom: -29px;" type="text" />
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
                    </tr>
                </table>
                <hr />
            </div>

            @*Table Competitive landscape*@

            <div id="CompetitiveLandscapeTableGroup">
                <div style="float: left; padding: 5px;">
                    <label id="competitvelandscapeLabel"><u><b>Competitive landscape:</b></u></label><br />
                </div>
                <div class="label-forms" style="display:none;">
                    competitvelandscapes
                </div>
                <input class="form-control" id="competitvelandscapeform" value="competitvelandscape" style="display:none;" />
                <div class="hidden-print" style="float: right; padding: 5px;">
                    <input class="selectCheckboxTextArea" style="float:right; bottom: -29px;" type="text" />
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
                <input class="selectCheckboxTextArea" style="float:right; bottom: -29px;" type="text" />
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
                    <textarea class="form-control" id="AdditionalCommentsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ProductLineExtensionGroup">
                <div class="label-forms">
                    Briefly describe the product line extension.
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ProductLineExtensionInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ReasonForNewProductGroup">
                <div class="label-forms">
                    What market need does this line extension fill (what is the reason for the new product)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ReasonForNewProductInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="CombinationProductGroup">
                <div class="label-forms">
                    If this is a combination product, what drugs are being combined (include brand and nonproprietary names if known)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="CombinationProductInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="NamingStrategyGroup">
                <div class="label-forms">
                    What is the preferred naming strategy for this line extension (new/independent brand, current base brand associated and/or modifier)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="NamingStrategyInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            <div id="ModifiersConsideredGroup">
                <div class="label-forms">
                    Are any names or modifiers currently being considered (if so, please provide names/modifiers with rationales)?
                </div>
                <div class="input-forms">
                    <textarea class="form-control" id="ModifiersConsideredInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="text" />
                </div>
                <div class="clear"></div>
            </div>

            @*Table Trial Naming Direction*@
            <div id="TrialNamingDirectionTableGroup">
                <label><u><b>Trial Naming Direction:</b></u></label><br />
                <input class="selectCheckboxTextArea" style="float: right; bottom: -29px;" type="text" />
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
                    <textarea class="form-control" id="WordsAndAssociationsInput"></textarea><input class="selectCheckboxTextArea" style="float: right;" type="text" />
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
   <input id="MyUsername" style="display:none;" value="@MyUsername"/>
<script type="application/javascript" src="~/Scripts/PPRFIles/ClientPPRQuestions.js"></script>



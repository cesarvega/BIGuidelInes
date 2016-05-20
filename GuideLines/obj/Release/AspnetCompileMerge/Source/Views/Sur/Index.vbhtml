@Code
    ViewData("Title") = "Index"
End Code

<h2>Index</h2>

    <!-- Start Definition of CSS classes-->
    <style type="text/css">

        .GeneralDropDownList
        {
            width: 150px;
            margin: 0px 5px 0px 10px;
        }
    
        .surveybuilder_toolbar
        {
          display:block; 
          height:42px; 
          width:100%; 
          min-width:810px; 
          background-color:#4c5b86;
          color:#f0f0ff;
          border-top:1px solid #10194e;
          border-bottom:1px solid #10194e;
        }

        .media
        {
	        background-color:#c1c9f8;
	        padding:5px;
	        width:98%;
        }

        .media input
        {
	        margin-bottom: 10px;
        }

        .media select
        {
	        margin-right: 20px;
        }

        .media input[type="text"]
        {
	        width: 30px;
        }

        .branching
        {
	        background-color:#c1c9f8;
	        padding:5px;
	        width:98%;
	        font-size: 12px;
        }

        .branching *
        {
	        vertical-align: top;
        }

        .branching input, textarea
        {
	        font-size: 12px;
        }

        .branching select
        {
	        width: 100px;
	        display:inline;
	        vertical-align: top;
	        font-size: 12px;
        }

        .branching input[type="text"]
        {
	        width: 40px;
	        display:inline;
	        vertical-align: top;
        }

        .branching .branching-rule
        {
	        display:block;	
	        margin: 3px;
	        padding: 5px;
	        background-color: #b2baec;
        }

        .branching .branching-rule div
        {
	        display:inline-block;	
        }

        .question-choices
        {
	        display: block;
	        padding: 5px 5px 5px 5px;
        }

        .question-choices .matrix-choice
        {
	        width: 100px;	
        }

        .question-choices input[type="text"]
        {
	        display:inline;
	        font-size: 12px;
	        font-weight: normal;
	        margin-bottom: 5px;
	        background-color: #e2e2e2;
	        color: #878586;
	        border-style: dashed;
	        border-width: 1px;
        }

        .question-choices input[type="text"]:focus
        {
	        background-color: #ffffff;	
	        outline-color: #10194e;
	        outline-width: 2px;
	        outline-style: solid;
	        color: #000000;
        }

        .add-choice
        {
	        font-size: 10px;
	        border-style: none;
	        background-color: #4c5b86;
	        color: #ffffff;
	        padding: 3px 5px 3px 5px;
	        display:inline-block;
	        text-decoration: none;
	        vertical-align:middle;
	        margin-left: 30px;
	        margin-bottom: 10px;
        }
    
        a.add-choice:link
        {
            color:#ffffff;
        }

        .add-choice:hover
        {
	        background-color: #c1c9f8;
        }  

        .remove-choice
        {	
	        font-size: 10px;
	        border-style: none;
	        color: #920000;
	        padding: 2px 4px 2px 4px;
	        display:inline-block;
	        text-decoration: none;
	        vertical-align:middle;
	        font-weight: bold;
          cursor: pointer;
        }

        .add-rule
        {
	        font-size: 10px;
	        border-style: none;
	        background-color: #4c5b86;
	        color: #ffffff;
	        padding: 3px 5px 3px 5px;
	        display:inline-block;
	        text-decoration: none;
	        vertical-align:middle;	
	        margin: 3px;
        }
        
        a.add-rule:link
        {
            color:#ffffff;
        }

        .add-rule:hover
        {
	        background-color: #c1c9f8;
        }

        .remove-rule
        {	
	        font-size: 10px;
	        border-style: none;
	        color: #920000;
	        padding: 2px 4px 2px 4px;
	        display:inline-block;
	        text-decoration: none;
	        vertical-align:middle;
	        font-weight: bold;
	        float:right;
        }

        .options
        {
            overflow: auto;
	        background-color:#c1c9f8;
	        padding:5px;
	        width:98%;
          font-size:12px;
        }

        .options input
        {
	        margin-bottom: 10px;
        }

        .options select
        {
	        margin-right: 20px;
        }

        .options input[type="text"]
        {
	        width: 30px;
        }
        
    </style>

    <style type="text/css">

        .ui-widget
        {
          font-size:14px;
          float:left;
          padding-top:6px;
        }

        .ui-widget .ui-widget
        {
          font-size: 14px;
        }

        .ui-combobox 
        {
          position: relative;
          display: inline-block;
        }

        .ui-combobox-toggle 
        {
          position: absolute;
          top: 0;
          bottom: 0;
          margin-left: -1px;
          padding: 0;
          /* adjust styles for IE 6/7 */
          *height: 20px;
          *top: 5px;
        }

        .ui-button-icon-only
        {
          width: 25px;
        }
  
        .ui-combobox-input 
        {
            margin: 0;
            padding: 0px 2px 2px;
        }

        .ui-autocomplete 
        {
        max-height: 150px;
        overflow-y: auto;
        /* prevent horizontal scrollbar */
        overflow-x: hidden;
        }

        /* IE 6 doesn't support max-height
        * we use height instead, but this forces the menu to always be this tall
        */
        * html .ui-autocomplete 
        {
        height: 100px;
        }
  
        /*  jstree styles */
        .jstree a > ins 
        {
        height: 20px;
        width: 20px;
        }
  
        .jstree a 
        {
        color: black;
        display: inline-block;
        height: 20px;
        line-height: 22px;
        margin: 0;
        padding: 1px 2px;
        text-decoration: none;
        white-space: nowrap;
        font-size:14px;
        }
  
        .jstree-default .jstree-no-dots li, .jstree-default .jstree-no-dots .jstree-leaf > ins 
        {
        background: none repeat scroll 0 0 #efefef;
        }
  
        .jstree-default .jstree-clicked 
        {
        background: none repeat scroll 0 0 #b5c5f2;
        border: 1px solid #99DEFD;
        padding: 0 2px 0 1px;
        }
  
        .TreeView
        {
        border:1px solid black;
        }

        .hide
        {
            display: none !important;
        }

        .ProgressIndicator {
            width: 100%;
            height: 100%;      
        }

    </style>

    <!-- End Definition of CSS classes-->

    <!-- div to show spin button -->
    <div id="divProgress" align="center" valign="middle" runat="server" class="ProgressIndicator" ></div>

    <div id="divNewCategory" style="display:none;">
    <div style="display:block;height:25px;">
      <div id="divACMessage" style="color:#000000;font-size:12px;" class="StatusMessage"></div>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Survey Name
    </div>

    <div style="display:block;height:40px;">
      <select id="ddlACSurveys" onchange="javascript:changeCurrentSurvey(false)" class="GeneralList" ></select>
    </div>

    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Parent Category
    </div>

    <div id="divNewCategoryList" style="display:block;height:40px;">
        <select id="ddlNewCategoryList" class="GeneralDropDownList" style="margin-left: 0px;"></select>
    </div>

    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Category Name
    </div>

    <div style="display:block;height:40px;">
      <input id="txtCategoryName" type="text" maxlength="80" style="width:350px;" />
    </div>

    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Category Description
    </div>

    <div style="display:block;height:120px;">
      <textarea id="txtCategoryDescription" style="" cols="60" rows="5"></textarea>
    </div>

    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Sort Order
    </div>

    <div style="display:block;height:40px;">
      <input id="txtSortOrder" type="text" class="GeneralText" maxlength="3" size="3" style="" />
    </div>
  </div>

  <div id="divEditCategory" style="display:none;">
    <div style="display:block;height:25px;">
      <div id="divECMessage" style="color:#000000;font-size:12px;" class="StatusMessage"></div>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Survey Name
    </div>
    
    <div style="display:block;height:40px;">
      <select id="ddlECSurveys" onchange="javascript:changeCurrentSurvey(true)" ></select>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Category ID
    </div>
    
    <div style="display:block;height:40px;">
      <input id="lblCategoryID" type="text" readonly="readonly" style="width:250px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Parent Category
    </div>
    
      <div id="divEditCategoryList" style="display:block;height:40px;">
          <select id="ddlEditCategoryList" class="GeneralDropDownList" style="margin-left: 0px;"></select>
      </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Category Name
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtECCategoryName" type="text" maxlength="80" style="width:350px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Category Description
    </div>
    
    <div style="display:block;height:120px;">
      <textarea id="txtECCategoryDescription" style="" cols="60" rows="5"></textarea>
    </div>

    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Sort Order
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtECSortOrder" type="text" class="GeneralText" maxlength="3" size="3" style="" />
    </div>
    
  </div>

  <div id="divDeleteCategory" style="display:none;">
    <div style="display:block;height:25px;">
      <div id="divDCMessage" style="color:#000000;font-size:12px;" class="StatusMessage"></div>
    </div>
    
  </div>

  <div id="divNewSurvey" style="display:none;">
    <div style="display:block;height:25px;">
      <div id="divASMessage" style="color:#000000;font-size:12px;" class="StatusMessage"></div>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Survey Name
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtSurveyName" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey Description
    </div>
    
    <div style="display:block;height:120px;">
      <textarea id="txtSurveyDescription" style="" cols="60" rows="5"></textarea>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey eMail From
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txteMailFrom" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
        Survey Title
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtTitle" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey eMail Message
    </div>
    
    <div style="display:block;height:120px;">
      <textarea id="txtMessage" style="" cols="60" rows="5"></textarea>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
      Is Active
    </div>
    
    <div style="display:block;height:40px;">
      <input id="chkIsActive" checked="checked" type="checkbox" style="" />
    </div>
    
  </div>
  
  <div id="divEditSurvey" style="display:none;">
    <div style="display:block;height:25px;">
      <div id="divESMessage" style="color:#000000;font-size:12px;" class="StatusMessage"></div>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey ID
    </div>
    
    <div style="display:block;height:40px;">
      <input id="lblESSurveyID" type="text" readonly="readonly" style="width:350px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey Name
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtESSurveyName" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey Description
    </div>
    
    <div style="display:block;height:120px;">
      <textarea id="txtESSurveyDescription" style="" cols="60" rows="5"></textarea>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey eMail From
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtESeMailFrom" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey Title
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtESTitle" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Survey eMail Message
    </div>
    
    <div style="display:block;height:120px;">
      <textarea id="txtESMessage" style="" cols="60" rows="5"></textarea>
    </div>  
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-bottom: 4px;">
    Is Active
    </div>
    
    <div style="display:block;height:40px;">
      <input id="chkESIsActive" checked="checked" type="checkbox" style="" />
    </div>
    
  </div>

  <div id="divCopySurvey" style="display:none;">
    <div style="display:block;height:25px;">
      <div id="diCSMessage" style="color:#000000;font-size:12px;" class="StatusMessage"></div>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;">
    Survey to copy:
    </div>
    <div id="divCSSurveys" style="display:block;height:40px;">
      <select ID="ddlCSSurveys"  onchange="javascript:changeCurrentSurvey(false);" class="GeneralList" ></select>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;">
    Survey Name
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtCSSurveyName" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;">
    Survey Description
    </div>
    
    <div style="display:block;height:100px;">
      <textarea id="txtCSSurveyDescription" style="" cols="60" rows="5"></textarea>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;">
    Survey eMail From
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtCSeMailFrom" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;">
    Survey Title
    </div>
    
    <div style="display:block;height:40px;">
      <input id="txtCSTitle" type="text" maxlength="80" style="width:150px;" />
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;">
    Survey eMail Message
    </div>
    
    <div style="display:block;height:40px;">
      <textarea id="txtCSMessage" style="" cols="60" rows="5"></textarea>
    </div>
    
    <div style="display:block;line-height:12px;font-size:11px;font-weight:bold;color:#627095;margin-top: 80px;">
    Is Active
    </div>
    
    <div style="display:block;height:40px;">
      <input id="chkCSIsActive" checked="checked" type="checkbox" style="" />
    </div>

  </div>
  
  <div id="maincontainer">
    
    <div id="messagesection">
        <div id="divMessage" class="messages">Select or create a category on the left, then add questions.
        </div>
    </div>
    <div id="divSurveyStrip" class="surveybuilder_toolbar">
        <div style="float:left;padding:10px 5px 0px;">Select a survey:</div>
        <div style="float:left;width:450px;">
            <div style="float:left; padding-top:6px;">
                <select id="ddlSurveys" class="GeneralDropDownList" 
                        title="Select a survey to add questions to"></select>
            </div>
            <div style="float: left; vertical-align: middle;padding:4px;">
                <img id="Img1" src="../Images/surveys/getsurvey.gif" width="24" height="24" border="1" alt="load survey" 
                     style="height:24px; cursor: pointer;" onclick="if ( IsValidSurveySelected() == true ) loadSurvey(''); else alert( 'Please Select a Survey in order to load it.' );" 
                     title="load survey" />
            </div>
            <div style="float: left; vertical-align: middle;padding:4px;">
                <img id="Img2" src="../Images/surveys/properties.png" width="24" height="24" border="1" alt="view/edit survey properties" 
                     style="height:24px; cursor: pointer;" onclick="javascript:editSurvey('')" title="view/edit survey properties" />
            </div>
            <div style="float: left; vertical-align: middle;padding:4px;">
                <img id="Img3" src="../Images/surveys/newsurvey.png" width="24" height="24" border="1" alt="create a new survey" 
                     style="height:24px; cursor: pointer;" onclick="javascript:newSurvey('')" title="create a new survey" />
            </div>
            <div style="float: left; vertical-align: middle;padding:4px 4px 1px 4px; display: none;" >
                <img id="Img4" src="../Images/surveys/copy.png" width="24" height="24" border="1" alt="copy this survey" 
                     style="height:24px; cursor: pointer;" onclick="copySurvey('')" title="copy this survey" />
            </div>
        </div>
        <div style="float:left;color:#ffffff;padding:10px 5px 0px;"> Current category: </div>
        <div id="divCurrentCategory" class="GeneralTextDisplay" style="float:left;color:#e2ebfb;padding:10px 5px 0px 5px;width:400px;">&nbsp;</div>
        <div style="float:left;color:#ffffff;padding:10px 5px 0px;"> Number of questions: </div>
        <div id="divNumberOfQuestions" class="GeneralTextDisplay" style="float:left;color:#e2ebfb;padding:10px 5px 0px;">1</div>
    </div>
    
    <div id="leftcolumn" style="clear:both;">
        <div class="innerlining"><b>Categories</b>
            <div style="float: right; vertical-align: middle;padding:4px;padding-right:10px;">
                <img id="Img7" src="../Images/surveys/category_trash.png" width="16" height="16"  alt="Delete a category" 
                     style="height:16px; cursor: pointer; display: none;" onclick="javascript:deleteCategory('');" title="Delete a category" />
            </div>
            <div style="float: right; vertical-align: middle;padding:4px;">
                <img id="Img6" src="../Images/surveys/category_edit.png" width="16" height="16"  alt="Rename a category" 
                     style="height:16px; cursor: pointer;" onclick="javascript:  if ( IsValidCategorySelected() == true) editCategory(''); " 
                     title="Rename a category" />
            </div>
            <div style="float: right; vertical-align: middle;padding:4px;">
                <img id="Img5" src="../Images/surveys/category_add.png"  width="16" height="16"  alt="Create a new category" 
                     style="height:16px; cursor: pointer;" onclick="javascript:newCategory('');" title="Create a new category" />
            </div>
        </div>
        <div id="divCategories" class="TreeView"></div>
    </div>
    
    <div id="contentwrapper">
        <div id="contentcolumn">
            <div class="innerlining"><b>Questions</b></div>

            <table id="survey_questions" style="width:100%;border:0px;">
                <!-- INSERT QUESTION -->
                <tr>
                    <td class="question_container">
                        <div id="question__1_1">
                            <div style="width:100%;">
                                <div id="question_box__1_1">
                                    <div class="question_box_caption" style="border:1px solid black;width:100%;height:40px;">
                                        <div id="divquestionid__1_1" style="display:none;" >123</div>
                                        <div id="divquestionsortorder__1_1" style="display:none;" >456</div>
                                        <div class="question_category" style="float: left; padding-top:8px;" >Category , </div>
                                        <div id="divquestionmsg__1_1" style="float: left; padding:8px 4px 0px 10px;" >Question 1 is a </div>
                                        <div style="float: left;padding:0px 30px 0px 6px;">
                                            <div class="ui-widget">
                                                <select id="divquestiontype__1_1" onchange="changeQuestionType(this, '1', '1', 'questionid__1_1',  'questionsortorder__1_1');">
                                                    <option value="0">Select a question type</option>
                                                    <option value="TEXTBOX">Text question</option>
                                                    <option value="ESSAY">Essay question</option>
                                                    <option value="RADIO">Single choice question</option>
                                                    <option value="MULTIPLE">Multiple choice question</option>
                                                    <option value="DROPDOWN">Dropdown choice question</option>
                                                </select>
                                            </div>
                                            <label>.</label>
                                        </div>
                                        <div style="float: right; vertical-align: middle;padding:4px 4px 0px;">
                                            <img id="expand_question__1_1" src="../Images/surveys/button_expand.png" width="20" height="20"  alt="Show/Hide" 
                                                 style="height:20px; cursor: pointer;" onclick="toggleQuestionContainer(this, 'collapsible_container__1_1')" title="Show/Hide" />
                                        </div>
                                        <div style="float: right; vertical-align: middle;padding:4px 4px 0px;" class="hide">
                                            <img src="../Images/surveys/button_move_down.png" width="20" height="20"  alt="Move Down" 
                                                 style="height:20px; cursor: pointer;" onclick="moveQuestionDown(this, 'divquestionid__1_1')" title="Move Down" />
                                        </div>
                                        <div style="float: right; vertical-align: middle;padding:4px 4px 0px;" class="hide">
                                            <img src='../Images/surveys/button_move_up.png' width="20" height="20"  alt="Move Up" 
                                                 style="height:20px; cursor: pointer;" onclick="moveQuestionUp(this, 'divquestionid__1_1')" title="Move Up" />
                                        </div>
                                        <div style="float: right; vertical-align: middle;padding:4px 4px 0px;">
                                            <img class="deletequestion" src='../Images/surveys/button_question_delete.png' width="20" height="20"  alt="Delete Question" 
                                                 style="height:20px; cursor: pointer;" onclick="deleteQuestion(this, 'divquestionid__1_1',  'divquestionsortorder__1_1')" title="Delete Question" />
                                        </div>
                                        <div style="float: right; vertical-align: middle;padding:4px 4px 0px;">
                                            <img class="addquestion" src='../Images/surveys/button_question_add.png' width="20" height="20"  alt="Add Question" 
                                                 style="height:20px; cursor: pointer;" onclick="addQuestion(this, '1', 'divquestionid__1_1')" title="Add Question" />
                                        </div>
                                    </div>
                                    <div id="collapsible_container__1_1" style="border-top:1px;width:100%;height:100%;background-color:#ced4f9;display:none;" title="Category 1 Question 1">
                                        <div id="question_content__1_1" style="padding:10px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </td>                             
                </tr>
                <!-- INSERT QUESTION -->
            </table>
        </div>
    </div>
  </div>
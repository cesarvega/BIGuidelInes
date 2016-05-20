@Code
    ViewData("Title") = "Index"
End Code
<script type="text/javascript">
    (function ($) {
        //Here jQuery is $
        window.location.replace(getBaseURL() + "PPRwebsite" + '/PPRTemplateForm/thankYou');

    })(jQuery);
    $(document).ready(function () {

        window.location.replace(getBaseURL() + "PPRwebsite" + '/PPRTemplateForm/thankYou');

    });



</script>
<form >

  <style type ="text/css">
      ul.list-group li {
          color:darkblue;
             
          }
      form label {
          color: darkblue;
          font-weight:normal;
          
      }
     
  </style>

<ul class="list-group">
        <li class="list-group-item" style ="background-color:lightgray" >Client Name Project Lead: <input id ="ClientNameInput"/> </li>
        <li class="list-group-item">Title: <input id ="ClientProjectTitleInput"/><br /><br />E-mail Address: <input id ="ClienEmailInput" /><br /><br />Telephone Number: <input id ="ClientTelephoneNumberBox" /></li>
        <li class="list-group-item" style ="background-color:lightgray">Brand Institute Directors: <input id ="DirectorsNameInput"/><br /></li>
        <li class="list-group-item">Email Addresses: <input id ="DirectorEmailInput"/><br /><br />Telephone Numbers: <input id ="DirectorPhoneNumberInput"/><br /></li>
        <li class="list-group-item" style ="background-color:lightgray">BI Brand Manager: <input id ="BrandManagerName"/><br /></li>
        <li class="list-group-item">Email Address: <input id ="BrandManagerEmailInput"/><br /><br />Telephone Number: <input id ="BrandManagerPhoneNumberInput"/><br /></li>
</ul>

  <div>  <label> Naming Scope: </label> <input id="NamingScopeInput" /><br /><br /> </div>
   <div> <label> BI Services: </label> <input id="BIServicesInput" /> <br /><br /></div>
    <label> Primary Markets: </label> <input id="PrimaryMarketsInput" /><br /><br />
    <label>Secondary Markets: </label> <input id="SecondaryMarketInput" /><br/><br />
     <label>TM Classes:  </label> <input id="TMClassesInput" /><br/><br />+
    
        <label><u> <b>Trademarks</b></u></label><br /><br />
        <label>Trademark Class(s):  </label><input id="TrademarkClassInput" /><br /><br />
        <label>In which countries will this name be trademarked?   </label><input id="TrademarkCountriesInput" /><br /><br />
        <label> <u><b> Marketing and Safety Research</b></u></label><br /><br />
        <label> In which countires will market/safety research be conducted?  </label> <input id ="MarketSafetyResearchCountriesInput" /><br /><br />
        <label> To which agencies will names be submitted?   </label> <input id="MarketSafetyResearchAgenciesInput" /><br /><br />
    
   
    <div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
            <label> Timeline: </label>
			<div class="row clearfix">
				<div class="col-md-12 column">
                    <label>Creative Start Date:</label><input id="CreativeStartDateInput" /><br />
            <label>Trademarks Start Date: </label> <input id ="TrademarksStartDateInput" /><br />
            <label>Expected NDA Submission Date: </label><input id="ExpectedNDASubDateInput" /><br />
            <label> Expected Approval Date: </label><input id="ExpectedApprovalDateInput" /> <br /> <br />
				</div>
			</div>
		</div>
	</div>
</div>
    
    
    <label><u><b> Rx Brand Name/Branded Generic</b></u></label><br /><br />
    <label> Product Overview: </label> <input id="ProductOverviewInput" /><br /><br />
    <label> Drug Class/Classification: </label> <input id ="DrugClassInput" /><br /><br />
     <label> NonProprietary/Generic Name: </label> <input id ="NonPropGenericNameInput" /><br /><br />
     <label> USAN/INN Stem: </label> <input id ="USAN/INNSTEMInput" /><br /><br />
     <label> Indication(s): </label> <input id ="IndicationInput" /><br /><br />
     <label> Standard Dose: </label> <input id ="StandardDoseInput" /><br /><br />
     <label> Additional Dose: </label> <input id ="AdditionalDoseInput" /><br /><br />
    <label> Formulation: </label> <input id ="FormulationInput" /><br /><br />
    <label> Route(s) of Administration: </label> <input id ="RoutesOfAdministrationInput" /><br /><br />
    <label> Frequency of Administration: </label> <input id ="FrequencyOfAdministrationInput" /><br /><br />
    <label> Concept Statement: </label> <input id ="ConceptStatementInput" /><br /><br />
    <label> Positioning: </label> <input id ="PositioningInput" /><br /><br />
    <label> Mechanism of Action (MOA): </label> <input id ="MOAInput" /><br /><br />
    <label> Name(s) Under Consideration: </label> <input id ="NamesUnderConstructionInput" /><br /><br />
    <label> Being Considered By: </label> <input id ="BeingConsideredByInput" /><br /><br />
    <label> Name(s) Rejected: </label> <input id ="NamesRejectedInput" /><br /><br />
    <label> Rationale for Rejection: </label> <input id ="RationaleForRejectionInput" /><br /><br />
    <label> Device Description: </label> <input id ="DeviceDescriptionInput" /><br /><br />
    <label> Does this device contian a drug? </label> <input id ="ContainDrugInput" /><br /><br />
    <label> Therapeutic Area: </label> <input id ="TherapeuticAreaInput" /><br /><br />
    <label> Therapeutic Class: </label> <input id ="TherapeuticClassInput" /><br /><br />
    <label> Product Description: </label> <input id ="ProductDescriptionInput" /><br /><br />
    <label> IND Number: </label> <input id ="INDNumberInput" /><br /><br />   
    <label> CAS Number: </label> <input id ="CASNumberInput" /><br /><br />   
    <label> Molecular Formula: </label> <input id ="MolecularFormulaInput" /><br /><br />   
    <label> Molecular Weight: </label> <input id ="MolecularWeightInput" /><br /><br />
    <label> Structural Formula: </label> <input id ="StructuralFormulaInput" /><br /><br />
    <label> Pharmacological Group (if any): </label> <input id ="PharmacologicalGroupInput" /><br /><br />
    <label> Chemical Name (or Description): </label> <input id ="ChemicalNameInput" /><br /><br />
    <label> Manufacturer or Submitter: </label> <input id ="ManufacturerSubmitterInput" /><br /><br />
    <label> Date Clinical Trial Began: </label> <input id ="ClinicalTrialStartDateInput" /><br /><br />
    <label> Phase of Clinical Development: </label> <input id ="ClinicalDevelopmentInput" /><br /><br />

   
    <div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column" >
			<div class="row clearfix">
				<div class="col-md-4 column"style ="background-color: lightgray;border:solid thin">
                    <label> Product Attributes (Rank) </label><br />
				</div>
				<div class="col-md-4 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center">Patient Benefits (Rank) </label><br />
				</div>
				<div class="col-md-4 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center"> Physician Benefits (Rank) </label><br />
				</div>
			</div>
			<div class="row clearfix">
				<div class="col-md-4 column" style ="border:solid thin">
                   <br /><br /> <input id="ProductAttributesInput"/><br /> <br />
				</div>
				<div class="col-md-4 column" style ="border:solid thin">
                     <br /><br /> <input id="PatientBenefitsInput" /> <br /><br /> 
				</div>
				<div class="col-md-4 column" style ="border:solid thin">
                    <br /><br />  <input id="PhysicianBenefitsInput"/> <br /><br /> 
				</div>
			</div>
		</div>
	</div>
</div>
    <br />
    <br />

    <label> Competitive Landscape: </label><br />

    <div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column" >
			<div class="row clearfix">
				
				<div class="col-md-3 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center">Company </label><br />
				</div>
				<div class="col-md-3 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center"> Brand Name </label><br />
				</div>
                <div class="col-md-3 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center"> NonProprietary Name </label><br />
				</div>
                <div class="col-md-3 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center"> Point(s) of Differentiation </label><br />
				</div>
			</div>
			
     <div class="row clearfix">
        
				<div class="col-md-3 column" style ="border:solid thin">
                     <br /><br /> <input id="CompanyInput" /> <br /><br /> 
				</div>
				<div class="col-md-3 column" style ="border:solid thin">
                    <br /><br />  <input id="BrandNameInput"/> <br /><br /> 
				</div>
        <div class="col-md-3 column" style ="border:solid thin">
                    <br /><br />  <input id="NonProprietaryNameInput"/> <br /><br /> 
				</div>
        <div class="col-md-3 column" style ="border:solid thin">
                    <br /><br />  <input id="PointsofDifferentiationInput"/> <br /><br /> 
				</div>
			</div>
		</div>
    </div>
    </div><br /><br />

    <label> Creative Direction: </label><br />
     <div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column" >
			<div class="row clearfix">
				
				<div class="col-md-4 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center">Key Words/Word Parts/Concepts </label><br />
				</div>
				<div class="col-md-4 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center"> Imagery </label><br />
				</div>
                <div class="col-md-4 column" style ="background-color: lightgray;border:solid thin">
                    <label style="text-align:center"> Avoid </label><br />
				</div>
                
			</div>
	     <div class="row clearfix">
             
				<div class="col-md-4 column" style ="border:solid thin">
                   <br /><br /> <input id="KeyWordsConceptsInput"/><br /> <br />
				</div>
				<div class="col-md-4 column" style ="border:solid thin">
                     <br /><br /> <input id="ImageryInput" /> <br /><br /> 
				</div>
				<div class="col-md-4 column" style ="border:solid thin">
                    <br /><br />  <input id="AvoidInput"/> <br /><br /> 
				</div>
        
			</div>
		</div>
    </div>
    </div>
    <br /><br />
    <label>Additional Comments: </label> <input id="AdditionalCommentsInput" />
</form>

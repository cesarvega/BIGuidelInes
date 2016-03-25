<!DOCTYPE html >
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>@ViewBag.Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel=" icon" href="~/Images/favicon.ico"/>
           <!--[if lt IE 10]>
                 <p style="text-align: center;vertical-align: middle;" class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a target="_new" href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
               <script type="text/javascript">
                 alert("The Brand Institute web application PPR-Website do not support  your current browser version; please upgrade your browser if you have problems viewing this web application for a better user experience");
                 </script>
        <![endif]-->

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    @Styles.Render("~/Content/themes/base/css", "~/Content/css")
    @Styles.Render("~/Scripts/jqwidgets/styles")
    @Scripts.Render("~/bundles/jquery")
    @Scripts.Render("~/bundles/modernizr")

     
      <script src="~/Scripts/PluginsJS/jquery.growl.js"></script>
    <link href="~/Content/jquery.growl.css" rel="stylesheet" />
    <link href="~/Content/bootstrap/bootstrap.css" rel="stylesheet">
      <script src="~/Scripts/bootstrap.js"></script>
    <link  type="text/css"   rel="stylesheet/less"  href="~/nrdg/Content/bootstrap/bootstrap.css" >
    <link  type="text/css"   href="~/Content/bootstrap/bootstrap-responsive.css" rel="stylesheet">
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.core.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.resizable.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.selectable.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.accordion.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.autocomplete.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.button.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.dialog.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.slider.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.tabs.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.datepicker.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.progressbar.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Content/themes/base/jquery.ui.theme.css" rel="stylesheet"/>
         
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.base.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.black.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.bootstrap.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.classic.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.darkblue.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.energyblue.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.fresh.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ims.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.metro.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.office.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.shinyblack.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.summer.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-darkness.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-le-frog.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-le-frog2.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-lightness.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-overcast.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-redmond.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-smoothness.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-start.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.ui-sunny.css" rel="stylesheet"/>
    <link  type="text/css"   href="~/Scripts/jqwidgets/styles/jqx.web.css" rel="stylesheet"/>




        <script  type="text/javascript" src="~/Scripts/spin.js"></script>
        <script  type="text/javascript" src="~/Scripts/jquery-2.0.3.js"></script>     
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxcore.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxdata.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxwindow.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.sort.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.filter.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.selection.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.columnsresize.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.columnsreorder.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.pager.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.edit.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.export.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.storage.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxscrollbar.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxpanel.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxbuttons.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxmenu.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxdocking.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxsplitter.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxtabs.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxdata.export.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxdropdownlist.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxlistbox.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxcheckbox.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxcombobox.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxdatetimeinput.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxcalendar.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/jqxtooltip.js"></script>
       <script type="text/javascript" src="~/Scripts/jqwidgets/jqxgrid.grouping.js"></script>
        <script  type="text/javascript" src="~/Scripts/jqwidgets/globalization/jquery.global.js"></script>
        <script  type="text/javascript" src="~/Scripts/GetBaseURL.js"></script>
        <script  type="text/javascript" src="~/Scripts/JavaScriptDataModels.js"></script>
        <script type="text/javascript" src="~/Scripts/sonic.js"></script>
  </head>

<body style="background-color: rgb(249,249,249); margin-left: 39px">
   
    <div class="container">

        @RenderSection("featured", required:=False)


        @RenderBody()

        <footer class="footer" style="background-color: white">

            <div id="xcopy">
                <p>
                    &nbsp;
                </p>
                &copy;  @DateTime.Now.Year - Brand Institute, Inc.  
            </div>

        </footer>

@*        <script src="~/Scripts/bootstrap.min.js"></script>*@
        @RenderSection("scripts", required:=False)

    </div>


</body>
</html>

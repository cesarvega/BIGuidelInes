Imports System.Web
Imports System.Web.Optimization

Namespace App_Start

    Public Class BundleConfig
        ' For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        Public Shared Sub RegisterBundles(ByVal bundles As BundleCollection)
            bundles.Add(New ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"))

            bundles.Add(New ScriptBundle("~/bundles/jqueryui").Include(
                "~/Scripts/jquery-ui-{version}.js"))

            bundles.Add(New ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.unobtrusive*",
                "~/Scripts/jquery.validate*"))

            bundles.Add(New ScriptBundle("~/Scripts/jqwidgets").Include(
                "~/Scripts/jqwidgets/jqxcore.js",
                "~/Scripts/jqwidgets/jqxdata.js",
                "~/Scripts/jqwidgets/jqxwindow.js",
                "~/Scripts/jqwidgets/jqxgrid.js",
                "~/Scripts/jqwidgets/jqxgrid.sort.js",
                "~/Scripts/jqwidgets/jqxgrid.filter.js",
                "~/Scripts/jqwidgets/jqxgrid.selection.js",
                "~/Scripts/jqwidgets/jqxgrid.columnsresize.js",
                "~/Scripts/jqwidgets/jqxgrid.columnsreorder.js",
                "~/Scripts/jqwidgets/jqxgrid.pager.js",
                "~/Scripts/jqwidgets/jqxgrid.edit.js",
                "~/Scripts/jqwidgets/jqxgrid.export.js",
                "~/Scripts/jqwidgets/jqxgrid.storage.js",
                "~/Scripts/jqwidgets/jqxscrollbar.js",
                "~/Scripts/jqwidgets/jqxpanel.js",
                "~/Scripts/jqwidgets/jqxbuttons.js",
                "~/Scripts/jqwidgets/jqxmenu.js",
                "~/Scripts/jqwidgets/jqxdocking.js",
                "~/Scripts/jqwidgets/jqxsplitter.js",
                "~/Scripts/jqwidgets/jqxtabs.js",
                "~/Scripts/jqwidgets/jqxdata.export.js",
                "~/Scripts/jqwidgets/jqxdropdownlist.js",
                "~/Scripts/jqwidgets/jqxlistbox.js",
                "~/Scripts/jqwidgets/jqxcheckbox.js",
                "~/Scripts/jqwidgets/jqxcombobox.js",
                "~/Scripts/jqwidgets/jqxdatetimeinput.js",
                "~/Scripts/jqwidgets/jqxcalendar.js",
                "~/Scripts/jqwidgets/jqxtooltip.js",
                "~/Scripts/jqwidgets/jqxgrid.grouping.js",
                "~/Scripts/jqwidgets/globalization/jquery.global.js",
                "~/Scripts/GetBaseURL.js",
                "~/Scripts/JavaScriptDataModels.js",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/bootstrap.js"
                ))



            ' Use the development version of Modernizr to develop with and learn from. Then, when you're
            ' ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(New ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"))

            bundles.Add(New StyleBundle("~/Content/css").Include("~/Content/site.css"))

            bundles.Add(New StyleBundle("~/Content/themes/base/css").Include(
                "~/Content/themes/base/jquery.ui.core.css",
                "~/Content/themes/base/jquery.ui.resizable.css",
                "~/Content/themes/base/jquery.ui.selectable.css",
                "~/Content/themes/base/jquery.ui.accordion.css",
                "~/Content/themes/base/jquery.ui.autocomplete.css",
                "~/Content/themes/base/jquery.ui.button.css",
                "~/Content/themes/base/jquery.ui.dialog.css",
                "~/Content/themes/base/jquery.ui.slider.css",
                "~/Content/themes/base/jquery.ui.tabs.css",
                "~/Content/themes/base/jquery.ui.datepicker.css",
                "~/Content/themes/base/jquery.ui.progressbar.css",
                "~/Content/themes/base/jquery.ui.theme.css"))

            'bundles.Add(New StyleBundle("~/Content/FileUpload/").Include("~/Content/FileUpload/jquery.fileupload-ui.css"))
            bundles.Add(New StyleBundle("~/Content/boostrap/").Include("~/Content/bootstrap/bootstrap-image-gallery.min.css"))

            bundles.Add(New StyleBundle("~/Scripts/jqwidgets/styles").Include(
                "~/Scripts/jqwidgets/styles/jqx.base.css",
                "~/Scripts/jqwidgets/styles/jqx.black.css",
                "~/Scripts/jqwidgets/styles/jqx.bootstrap.css",
                "~/Scripts/jqwidgets/styles/jqx.classic.css",
                "~/Scripts/jqwidgets/styles/jqx.darkblue.css",
                "~/Scripts/jqwidgets/styles/jqx.energyblue.css",
                "~/Scripts/jqwidgets/styles/jqx.fresh.css",
                "~/Scripts/jqwidgets/styles/jqx.ims.css",
                "~/Scripts/jqwidgets/styles/jqx.metro.css",
                "~/Scripts/jqwidgets/styles/jqx.office.css",
                "~/Scripts/jqwidgets/styles/jqx.shinyblack.css",
                "~/Scripts/jqwidgets/styles/jqx.summer.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-darkness.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-le-frog.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-le-frog2.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-lightness.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-overcast.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-redmond.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-smoothness.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-start.css",
                "~/Scripts/jqwidgets/styles/jqx.ui-sunny.css",
                "~/Scripts/jqwidgets/styles/jqx.web.css"))



        End Sub
    End Class
End NameSpace
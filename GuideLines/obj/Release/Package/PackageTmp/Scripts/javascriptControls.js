/// <reference path="../../Scripts/jquery-2.0.3.js" />
var listOfdata;
    $(document).ready(function () {
        $.ajax({
            url: getBaseURL() + "api/ApiBookmark",
            type: "GET",
            datatype: "json",
            contentType: 'application/json'
        }).done(function (data) {
            var listSize = data.length;
            listOfdata = data;
            if (listSize > 0) {
                // code to use the data 

                var sectionOnePercentage = $('#sectionOnePercentage');
                var progressbar = $('#progressBarSec1');
                sectionOnePercentage.text(listSize + "%");
                progressbar.css('width', listSize + '%');

                var listOfdata2 = []; // for multiple choices answers


                for (var j = 0; j < data.length; j++) {


                    listOfdata2.push(data[j]);

                };


                function Questions(listOfdata) {

                    var self = this;
                    self.BookmarkId = listOfdata.BookmarkId;
                    self.BookmarkName = listOfdata.BookmarkDescription;
                    self.BookmarkAnswer = listOfdata.BookmarkAnswer;
                    self.Question = listOfdata.BookmarkLongDescription;
                    self.Options = ko.observableArray([]);

                    var result = listOfdata.BookmarkDescription;

                    var temp = [];
                 //   for (var j = 0; j < result.length; j++) {
                    temp.push(listOfdata.BookmarkDescription);
                  //  };
                    self.Options.push(temp);

                };

                function questionsViewModel(listOfdata) {

                    var self = this

                    self.allQuestions = ko.observableArray([]);

                    for (var i = 0; i < listOfdata.length; i++) {

                        this.allQuestions.push(new Questions(listOfdata[i]));

                    };


                };
                
              //  ko.applyBindings(new questionsViewModel(listOfdata2), document.getElementById("TBL"));
                ko.applyBindings(new questionsViewModel(listOfdata2), document.getElementById("MUL"));
            
            };
            
        });
    });



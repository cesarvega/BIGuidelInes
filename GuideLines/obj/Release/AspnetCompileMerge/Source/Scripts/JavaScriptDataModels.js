function NewClientQueueModel(clientQueueId, clientName, projectName, timeStamp,browser , created, createdBy, updated, updatedBy) {

    this.ClientQueueId = clientQueueId;
    this.ClientName = clientName;
    this.ProjectName = projectName;
    this.TimeStamp = timeStamp;
    this.Browser = browser;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;    

};


function NewClientModel(clientId, clientFullName, clientTitle, clientFirstName, clientLastName,
    clientPassword, clientProject, clientProjectId, clientAddress, clientPhone, clientEmail, clientCompany, clientQuestions,
    clientEmailSubject, clientEmailBody, adminEmailAddress, clientProjectTemplate, created, createdBy, updated, updatedBy) {
    this.ClientId = clientId;
    this.ClientFullName = clientFullName;
    this.ClientTitle = clientTitle;
    this.ClientFirstName = clientFirstName;
    this.ClientLastName = clientLastName;
    this.ClientPassword = clientPassword;
    this.ClientProject = clientProject;
    this.ClientProjectId = clientProjectId;
    this.ClientAddress = clientAddress;
    this.ClientPhone = clientPhone;
    this.ClientEmail = clientEmail;
    this.ClientCompany = clientCompany;
    this.ClientQuestions = clientQuestions;
    this.ClientEmailSubject = clientEmailSubject;
    this.ClientEmailBody = clientEmailBody;
    this.AdminEmailAddress = adminEmailAddress;
    this.ClientProjectTemplate = clientProjectTemplate;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
    


};

function NewCompetitiveLandscapeModel(projectId, competitiveLandscapeId, projectName, company, brandName, nonproprietaryName, clinicalTrialName, className, pointsOfDifferentiation, created, createdBy, updated, updatedBy) {
    this.CompetitiveLandscapeId = competitiveLandscapeId;
    this.ProjectId = projectId;
    this.ProjectName = projectName;
    this.Company = company;
    this.BrandName = brandName;
    this.NonproprietaryName = nonproprietaryName;
    this.PointsOfDifferentiation = pointsOfDifferentiation;
    this.ClinicalTrialName = clinicalTrialName;
    this.ClassName = className;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};




function NewPprDataModel(pprTemplateFormId, projectId, projectName,comment, inputGroup, qestion, answer, templateType,versionControlString, created, createdBy, updated, updatedBy) {
    this.PPRTemplateFormId = pprTemplateFormId;
    this.ProjectId = projectId;
    this.ProjectName = projectName;
    this.Comment = comment;
    this.InputGroup = inputGroup;
    this.Qestion = qestion;
    this.Answer = answer;
    this.TemplateType = templateType;
    this.VersionControlString = versionControlString;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};

function PPRQueueModel(pPRQueueId, projectId, projectName, status, created, createdBy, updated, updatedBy) {

    this.PPRQueueId = pPRQueueId;
    this.ProjectId = projectId;
    this.ProjectName = projectName;
    this.Status = status;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};

function BookmarkModel(bookmarkId, bookmarkAnswer, bookmarkProjectId, bookmarkDescription, bookmarklongDescription, bookmarkUserId, bookmarkAnswerId, bookmarkAnswerTypeId, bookmarkSectionId, created, createdBy, updated, updatedBy) {

    this.BookmarkId = bookmarkId;
    this.BookmarkAnswer = bookmarkAnswer;
    this.BookmarkProjectId = bookmarkProjectId;
    this.BookmarkDescription = bookmarkDescription;
    this.BookmarklongDescription = bookmarklongDescription;
    this.BookmarkUserId = bookmarkUserId;
    this.BookmarkAnswerId = bookmarkAnswerId;
    this.BookmarkAnswerTypeId = bookmarkAnswerTypeId;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};


function BookmarkAnswerModel(bookmarkAnswerId, bookmarkAnswerDescription, bookmarkAnswerTypeId, bookmarkAnswerPath, bookmarkAnswerSize, 
    bookmarkAnswerRange,bookmarkUserId, created, createdBy, updated, updatedBy) {

    this.BookmarkAnswerId = bookmarkAnswerId;
    this.BookmarkAnswerDescription = bookmarkAnswerDescription;
    this.BookmarkAnswerTypeId = bookmarkAnswerTypeId;
    this.BookmarkAnswerPath = bookmarkAnswerPath;
    this.BookmarkAnswerSize = bookmarkAnswerSize;
    this.BookmarkAnswerRange = bookmarkAnswerRange;
    this.BookmarkUserId = bookmarkUserId;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};


function BookmarkAnswerTypeChoiceModel(bookmarkAnswerTypeChoiceId, bookmarkAnswerTypeChoiceDescription, bookmarkId, created, createdBy, updated, updatedBy) {

    this.BookmarkAnswerTypeChoiceId = bookmarkAnswerTypeChoiceId;
    this.BookmarkAnswerTypeChoiceDescription = bookmarkAnswerTypeChoiceDescription;
    this.BookmarkId = bookmarkId;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};


function FilterParamettersModel(clientId, projectId, bookmarkTypeId, sectionId) {
    this.ClientId = clientId;
    this.ProjectId = projectId;
    this.BookmarkTypeId = bookmarkTypeId;
    this.SectionId = sectionId;
};


function ClientBookmarkModel(clientBookmarksId, clientId, bookmarkId, created, createdBy, updated, updatedBy) {
    this.ClientBookmarksId = clientBookmarksId;
    this.ClientId = clientId;
    this.BookmarkId = bookmarkId;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};

function BookmarkAnswerModel(bookmarkId, bookmarkAnswer, bookmarkAnswerId) {
    this.BookmarkId = bookmarkId;
    this.BookmarkAnswer = bookmarkAnswer;
    this.BookmarkAnswerId = bookmarkAnswerId;
};


function BookmarkAnswerFroSGLMULModel(bookmarkId, bookmarkAnswer, bookmarkAnswerId, bookmarkAnswerChoices) {
    this.BookmarkId = bookmarkId;
    this.BookmarkAnswer = bookmarkAnswer;
    this.BookmarkAnswerId = bookmarkAnswerId;
    this.BookmarkAnswerChoices = bookmarkAnswerChoices;
};


function SGLMULOptionsModel( bookmarkAnswer) {
    this.BookmarkAnswer = bookmarkAnswer;
};

function CompetitiveLandscapeModel(projectId, competitiveLandscapeId ,projectName, company, brandName, nonproprietaryName, pointsOfDifferentiation, created, createdBy, updated, updatedBy) {
    this.CompetitiveLandscapeId = competitiveLandscapeId;
    this.ProjectId = projectId;
    this.ProjectName = projectName;
    this.Company = company;
    this.BrandName = brandName;
    this.NonproprietaryName = nonproprietaryName;
    this.PointsOfDifferentiation = pointsOfDifferentiation;
    this.Created = created;
    this.CreatedBy = createdBy;
    this.Updated = updated;
    this.UpdatedBy = updatedBy;
};




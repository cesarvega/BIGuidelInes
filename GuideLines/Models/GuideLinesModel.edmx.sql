
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, and Azure
-- --------------------------------------------------
-- Date Created: 08/28/2014 12:11:23
-- Generated from EDMX file: C:\Users\cvega\Desktop\Cesar Settings\SampleProjects\pprintranet\GuideLines\Models\GuideLinesModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [BI_GUIDELINES];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[BookMarks]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BookMarks];
GO
IF OBJECT_ID(N'[dbo].[ClientBookmarks]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ClientBookmarks];
GO
IF OBJECT_ID(N'[dbo].[Clients]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Clients];
GO
IF OBJECT_ID(N'[dbo].[UserBookmarks]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserBookmarks];
GO
IF OBJECT_ID(N'[dbo].[ppr_ProjectListTable]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ppr_ProjectListTable];
GO
IF OBJECT_ID(N'[dbo].[CompetitiveLandscapes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[CompetitiveLandscapes];
GO
IF OBJECT_ID(N'[dbo].[PPRQueue]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PPRQueue];
GO
IF OBJECT_ID(N'[dbo].[PPRTemplateForms]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PPRTemplateForms];
GO
IF OBJECT_ID(N'[dbo].[ClientQueues]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ClientQueues];
GO
IF OBJECT_ID(N'[dbo].[PPRBITeams]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PPRBITeams];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'BookMarks'
CREATE TABLE [dbo].[BookMarks] (
    [BookmarkId] int IDENTITY(1,1) NOT NULL,
    [BookmarkDescription] nvarchar(50)  NULL,
    [BookmarklongDescription] nvarchar(max)  NULL,
    [BookmarkProjectId] int  NOT NULL,
    [BookmarkUserId] int  NOT NULL,
    [BookmarkAnswer] nvarchar(max)  NULL,
    [BookmarkQuestion] nvarchar(max)  NULL,
    [BookmarkAnswerId] int  NULL,
    [BookmarkAnswerTypeId] int  NULL,
    [BookmarkSectionId] int  NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'ClientBookmarks'
CREATE TABLE [dbo].[ClientBookmarks] (
    [ClientBookmarksId] int IDENTITY(1,1) NOT NULL,
    [ClientId] int  NOT NULL,
    [BookmarkId] nvarchar(max)  NOT NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'Clients'
CREATE TABLE [dbo].[Clients] (
    [ClientId] int IDENTITY(1,1) NOT NULL,
    [ClientFullName] nvarchar(max)  NULL,
    [ClientTitle] nvarchar(max)  NULL,
    [ClientFirstName] nvarchar(max)  NULL,
    [ClientLastName] nvarchar(max)  NULL,
    [ClientPassword] nvarchar(max)  NULL,
    [ClientProject] nvarchar(max)  NULL,
    [ClientProjectId] nvarchar(max)  NULL,
    [ClientAddress] nvarchar(max)  NULL,
    [ClientPhone] nvarchar(max)  NULL,
    [ClientEmail] nvarchar(max)  NULL,
    [ClientCompany] nvarchar(max)  NULL,
    [ClientQuestions] nvarchar(max)  NULL,
    [ClientEmailSubject] nvarchar(max)  NULL,
    [ClientEmailBody] nvarchar(max)  NULL,
    [AdminEmailAddress] nvarchar(max)  NULL,
    [ClientProjectTemplate] nvarchar(max)  NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'UserBookmarks'
CREATE TABLE [dbo].[UserBookmarks] (
    [UserBookmarkId] int IDENTITY(1,1) NOT NULL,
    [UserId] int  NOT NULL,
    [BookamrkId] int  NULL,
    [ProjectId] int  NULL,
    [BookmarkSectionId] nvarchar(max)  NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'ppr_ProjectListTable'
CREATE TABLE [dbo].[ppr_ProjectListTable] (
    [ppr_ProjectListId] int IDENTITY(1,1) NOT NULL,
    [ProjectName] nvarchar(max)  NULL,
    [SalesDate] datetime  NULL,
    [LeadDirectorName] nvarchar(max)  NULL,
    [BrandManager] nvarchar(max)  NULL,
    [Split] nvarchar(max)  NULL,
    [ProjectAmount] nvarchar(max)  NULL,
    [ClientName] nvarchar(max)  NULL,
    [Office] nvarchar(max)  NULL,
    [Status] nvarchar(max)  NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'CompetitiveLandscapes'
CREATE TABLE [dbo].[CompetitiveLandscapes] (
    [CompetitiveLandscapeId] int IDENTITY(1,1) NOT NULL,
    [ProjectId] int  NOT NULL,
    [ProjectName] nvarchar(max)  NULL,
    [Company] nvarchar(max)  NULL,
    [BrandName] nvarchar(max)  NULL,
    [NonproprietaryName] nvarchar(max)  NULL,
    [ClinicalTrialName] nvarchar(max)  NULL,
    [ClassName] nvarchar(max)  NULL,
    [PointsOfDifferentiation] nvarchar(max)  NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'PPRQueue'
CREATE TABLE [dbo].[PPRQueue] (
    [PPRQueueId] int IDENTITY(1,1) NOT NULL,
    [ProjectId] int  NOT NULL,
    [ProjectName] nvarchar(max)  NULL,
    [Projectlink] nvarchar(max)  NULL,
    [Status] nvarchar(max)  NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'PPRTemplateForms'
CREATE TABLE [dbo].[PPRTemplateForms] (
    [PPRTemplateFormId] int IDENTITY(1,1) NOT NULL,
    [ProjectId] int  NOT NULL,
    [ProjectName] nvarchar(max)  NULL,
    [Comment] nvarchar(max)  NULL,
    [InputGroup] nvarchar(max)  NULL,
    [Qestion] nvarchar(max)  NULL,
    [TemplateType] nvarchar(max)  NULL,
    [VersionControlString] nvarchar(max)  NULL,
    [Answer] nvarchar(max)  NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'ClientQueues'
CREATE TABLE [dbo].[ClientQueues] (
    [ClientQueueId] int IDENTITY(1,1) NOT NULL,
    [ClientName] nvarchar(50)  NOT NULL,
    [ProjectName] nvarchar(50)  NOT NULL,
    [TimeStamp] nvarchar(50)  NOT NULL,
    [Created] datetime  NOT NULL,
    [CreatedBy] nvarchar(50)  NOT NULL,
    [Updated] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL
);
GO

-- Creating table 'PPRBITeams'
CREATE TABLE [dbo].[PPRBITeams] (
    [PPRBITeamId] int IDENTITY(1,1) NOT NULL,
    [TeamName] nvarchar(max)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [BookmarkId] in table 'BookMarks'
ALTER TABLE [dbo].[BookMarks]
ADD CONSTRAINT [PK_BookMarks]
    PRIMARY KEY CLUSTERED ([BookmarkId] ASC);
GO

-- Creating primary key on [ClientBookmarksId] in table 'ClientBookmarks'
ALTER TABLE [dbo].[ClientBookmarks]
ADD CONSTRAINT [PK_ClientBookmarks]
    PRIMARY KEY CLUSTERED ([ClientBookmarksId] ASC);
GO

-- Creating primary key on [ClientId] in table 'Clients'
ALTER TABLE [dbo].[Clients]
ADD CONSTRAINT [PK_Clients]
    PRIMARY KEY CLUSTERED ([ClientId] ASC);
GO

-- Creating primary key on [UserBookmarkId] in table 'UserBookmarks'
ALTER TABLE [dbo].[UserBookmarks]
ADD CONSTRAINT [PK_UserBookmarks]
    PRIMARY KEY CLUSTERED ([UserBookmarkId] ASC);
GO

-- Creating primary key on [ppr_ProjectListId] in table 'ppr_ProjectListTable'
ALTER TABLE [dbo].[ppr_ProjectListTable]
ADD CONSTRAINT [PK_ppr_ProjectListTable]
    PRIMARY KEY CLUSTERED ([ppr_ProjectListId] ASC);
GO

-- Creating primary key on [CompetitiveLandscapeId] in table 'CompetitiveLandscapes'
ALTER TABLE [dbo].[CompetitiveLandscapes]
ADD CONSTRAINT [PK_CompetitiveLandscapes]
    PRIMARY KEY CLUSTERED ([CompetitiveLandscapeId] ASC);
GO

-- Creating primary key on [PPRQueueId] in table 'PPRQueue'
ALTER TABLE [dbo].[PPRQueue]
ADD CONSTRAINT [PK_PPRQueue]
    PRIMARY KEY CLUSTERED ([PPRQueueId] ASC);
GO

-- Creating primary key on [PPRTemplateFormId] in table 'PPRTemplateForms'
ALTER TABLE [dbo].[PPRTemplateForms]
ADD CONSTRAINT [PK_PPRTemplateForms]
    PRIMARY KEY CLUSTERED ([PPRTemplateFormId] ASC);
GO

-- Creating primary key on [ClientQueueId] in table 'ClientQueues'
ALTER TABLE [dbo].[ClientQueues]
ADD CONSTRAINT [PK_ClientQueues]
    PRIMARY KEY CLUSTERED ([ClientQueueId] ASC);
GO

-- Creating primary key on [PPRBITeamId] in table 'PPRBITeams'
ALTER TABLE [dbo].[PPRBITeams]
ADD CONSTRAINT [PK_PPRBITeams]
    PRIMARY KEY CLUSTERED ([PPRBITeamId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
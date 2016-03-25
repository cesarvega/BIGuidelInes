
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, and Azure
-- --------------------------------------------------
-- Date Created: 03/04/2014 11:20:15
-- Generated from EDMX file: C:\Users\cvega\Desktop\Cesar Settings\SampleProjects\Guide\GuideLines\Models\MemberServicesWebApi.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [RESPONDENTS];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Facebook_Profiles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Facebook_Profiles];
GO
IF OBJECT_ID(N'[dbo].[PERSONAL_INFO]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PERSONAL_INFO];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'PERSONAL_INFO'
CREATE TABLE [dbo].[PERSONAL_INFO] (
    [id] int IDENTITY(1,1) NOT NULL,
    [USERNAME] varchar(50)  NOT NULL,
    [PASSWORD] varchar(25)  NULL,
    [FIRST_NAME] varchar(50)  NULL,
    [LAST_NAME] varchar(100)  NULL,
    [ADDRESS] varchar(100)  NULL,
    [ADDRESS2] char(30)  NULL,
    [CITY] varchar(50)  NULL,
    [STATE_PROVINCE] varchar(25)  NULL,
    [ZIP] varchar(12)  NULL,
    [COUNTRY] varchar(50)  NULL,
    [CountryCode] int  NULL,
    [HOME_PHONE] varchar(20)  NULL,
    [WORK_PHONE] varchar(20)  NULL,
    [FAX] varchar(20)  NULL,
    [EMAIL] varchar(50)  NULL,
    [RESTYPE] varchar(15)  NULL,
    [REFERRED_BY] varchar(50)  NULL,
    [AGE] varchar(10)  NULL,
    [SEX] varchar(5)  NULL,
    [MARITAL_STATUS] varchar(10)  NULL,
    [CHILDREN] varchar(3)  NULL,
    [OCCUPATIONAL_FIELD] varchar(50)  NULL,
    [TITLE_POSITION] varchar(50)  NULL,
    [HOUSEHOLD_INCOME] varchar(25)  NULL,
    [US_CITIZEN] varchar(5)  NULL,
    [EDUCATION] varchar(30)  NULL,
    [ETHNIC] varchar(40)  NULL,
    [PRACTICE_TYPE] varchar(20)  NULL,
    [AMA_ID] varchar(15)  NULL,
    [BROWSER] varchar(40)  NULL,
    [LAST_UPDATED] datetime  NULL,
    [ssn] varchar(16)  NULL,
    [paypal] varchar(50)  NULL,
    [paypalemail] varchar(50)  NULL,
    [active] varchar(5)  NULL,
    [maiden] varchar(100)  NULL,
    [nurse_class] varchar(5)  NULL,
    [acct_username] varchar(20)  NULL,
    [acct_restype] varchar(3)  NULL,
    [program_code] int  NULL,
    [DOMAIN] varchar(50)  NULL,
    [LIC_NUM] varchar(50)  NULL,
    [LIC_STATE] varchar(25)  NULL,
    [verified] char(1)  NULL,
    [Smoke] char(1)  NULL,
    [HowManyPacks] char(20)  NULL,
    [Drink] char(1)  NULL,
    [HowManyDrinks] char(20)  NULL,
    [WillParticipate] char(1)  NULL,
    [SignedUp] datetime  NULL,
    [ReceiveEmail] char(1)  NULL,
    [CheckedPreferences] char(1)  NULL,
    [CheckedMedicalField] char(1)  NULL,
    [Pets] char(10)  NULL,
    [TestAccount] char(1)  NULL,
    [AreYouAHuntingEnthusiast] char(1)  NULL,
    [AreYouASportsEnthusiast] char(1)  NULL,
    [Coded] char(1)  NULL,
    [Add2] char(30)  NULL,
    [AlternateEmail] varchar(50)  NULL,
    [Bounced] datetime  NULL,
    [UsingAlias] char(1)  NULL,
    [mag1] varchar(500)  NULL,
    [mag2] varchar(500)  NULL,
    [mag3] varchar(500)  NULL,
    [Agent] char(10)  NULL,
    [RefID] varchar(25)  NULL,
    [ValidEmail] char(1)  NULL,
    [InvitationID] int  NULL,
    [HeardByPostcard] bit  NULL,
    [HeardByFax] bit  NULL,
    [HeardByPhone] bit  NULL,
    [HeardByFriend] bit  NULL,
    [HeardByColleague] bit  NULL,
    [HeardByOther] bit  NULL,
    [HeardOtherSpecify] varchar(50)  NULL,
    [HeardByEmail] bit  NULL,
    [InvFaxNumber] varchar(40)  NULL,
    [Notes] varchar(500)  NULL,
    [active_ogr] char(1)  NULL,
    [OldUsername] varchar(50)  NULL,
    [MedicalSchool] varchar(150)  NULL
);
GO

-- Creating table 'Facebook_Profiles'
CREATE TABLE [dbo].[Facebook_Profiles] (
    [FBUserId] varchar(20)  NOT NULL,
    [BIUsername] varchar(100)  NULL,
    [FBUsername] nvarchar(100)  NULL,
    [FBToken] varchar(300)  NULL,
    [verified] varchar(100)  NULL,
    [fullName] nvarchar(100)  NULL,
    [firstName] nvarchar(100)  NULL,
    [middleName] nvarchar(100)  NULL,
    [lastName] nvarchar(100)  NULL,
    [gender] varchar(100)  NULL,
    [birthday] varchar(10)  NULL,
    [culture] varchar(100)  NULL,
    [link] varchar(100)  NULL,
    [picURL] varchar(100)  NULL,
    [email] varchar(100)  NULL,
    [hometown] nvarchar(100)  NULL,
    [city] nvarchar(100)  NULL,
    [UpdatedOn] datetime  NULL,
    [timezone] varchar(100)  NULL,
    [FBUpdatedOn] varchar(100)  NULL,
    [FBTokenExpires] int  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [USERNAME] in table 'PERSONAL_INFO'
ALTER TABLE [dbo].[PERSONAL_INFO]
ADD CONSTRAINT [PK_PERSONAL_INFO]
    PRIMARY KEY CLUSTERED ([USERNAME] ASC);
GO

-- Creating primary key on [FBUserId] in table 'Facebook_Profiles'
ALTER TABLE [dbo].[Facebook_Profiles]
ADD CONSTRAINT [PK_Facebook_Profiles]
    PRIMARY KEY CLUSTERED ([FBUserId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
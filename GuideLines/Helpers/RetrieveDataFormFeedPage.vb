Imports System.Data.Common
Imports System.Web.Http
Imports System.Net
Imports System.Net.Http
Imports GuideLines.ViewClasses
Imports GuideLines.Models

Namespace Helpers

    Public Class RetrieveDataFormFeedPage
        Inherits System.Web.Http.ApiController

        Public Shared Function GetBookMark(ByVal id As String) As List(Of BookmarkView)
            Dim bookmarkList As New List(Of BookmarkView)
            Dim bookmarkView As BookmarkView
            Dim db As New Entities
            Dim bookmarkFakeId As Integer

            'get project id\
            Dim projecid As ppr_ProjectListTable = (From prid As ppr_ProjectListTable In db.ppr_ProjectListTable
                    Where prid.ProjectName Is id
                    Select prid).FirstOrDefault()




            Try 'BIInfo
                Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
                Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                    oDbHelper.AddParameter("@projectName", id)
                    Const sProc As String = "ppr_BIInfoFromSalesBoard"
                    Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
                    If oReader.HasRows Then
                        While oReader.Read()
                            Dim clientName As String = oReader("ClientName")
                            Dim salesDate As String = oReader("SalesDate")       
                            Dim prjBiDirectors As String = oReader("prjBIDirectors")
                            Dim prjBiDirEmails As String = oReader("prjBIDirEmails")
                            Dim prjBiDirPhone As String = oReader("prjBIDirPhone")
                            Dim prjBiBrandManager As String = oReader("prjBIBrandManager")
                            Dim prjBiBrandManEmail As String = oReader("prjBIBrandManEmail")
                            Dim prjBiBrandManNumber As String = oReader("prjBIBrandManNumber")
                            Dim prjprjScope As String = oReader("prjScope")
                            Dim prjServices As String = oReader("prjServices")

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "currentClientname"
                            bookmarkView.BookmarkQuestion = "current Client name"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = clientName
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "salesDate"
                            bookmarkView.BookmarkQuestion = "sales Date"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = salesDate
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Brand_Institute_Directors"
                            bookmarkView.BookmarkQuestion = "Brand Institute Directors  "
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjBiDirectors)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Brand_Institute_Directors_Emails"
                            bookmarkView.BookmarkQuestion = "Brand Institute Directors E-mail Addresses"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjBiDirEmails)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Brand_Institute_Directors_Phone_Numbers"
                            bookmarkView.BookmarkQuestion = "Brand Institute Directors Telephone Numbers"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjBiDirPhone)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "BI_Brand_Manager"
                            bookmarkView.BookmarkQuestion = "BI Brand Manager"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjBiBrandManager)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "BI_Brand_Manager_Email"
                            bookmarkView.BookmarkQuestion = "BI Brand Manager Email"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjBiBrandManEmail)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "BI_Brand_Manager_Telephone"
                            bookmarkView.BookmarkQuestion = "BI Brand Manager Telephone Number"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjBiBrandManNumber)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Naming_Scope"
                            bookmarkView.BookmarkQuestion = "Naming Scope"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjprjScope)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Bi_Services"
                            bookmarkView.BookmarkQuestion = "BI Services"
                            bookmarkView.BookmarkSection = "Brand Institute Info "
                            bookmarkView.BookmarkAnswer = SplitString(prjServices)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)
                        End While
                    End If
                    If oReader IsNot Nothing Then
                        oReader.Close()
                    End If
                End Using
            Catch ex As Exception
            End Try

            Try
                Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
                Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                    oDbHelper.AddParameter("@projectName", id)
                    Const sProc As String = "ppr_ClientInfo"
                    Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
                    If oReader.HasRows Then
                        While oReader.Read()
                            Dim projectName As String = oReader("ProjectName")
                            Dim clientName As String = oReader("ClientName")
                            Dim clientContact As String = oReader("ClientContact")                   
                            Dim contactEmail As String = oReader("ContactEmail")
                            Dim contactPhone As String = oReader("ContactPhone")

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "ClientNameHeader"
                            bookmarkView.BookmarkQuestion = "Client Name"
                            bookmarkView.BookmarkSection = "Client Info "
                            bookmarkView.BookmarkAnswer = clientName
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "ProjectNameHeader"
                            bookmarkView.BookmarkQuestion = "Project Name"
                            bookmarkView.BookmarkSection = "Client Info "
                            bookmarkView.BookmarkAnswer = projectName
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            ' no need to display on the website only on the ppr generator desktop software 
                            'bookmarkView = createView()
                            'bookmarkView.BookmarkDescription = "Date"
                            'bookmarkView.BookmarkQuestion = "Project Date"
                            'bookmarkView.BookmarkSection = "Client Info "
                            'bookmarkView.BookmarkAnswer = DateTime.Now.ToString("MMMM dd, yyyy")
                            'bookmarkFakeId = bookmarkFakeId + 1
                            'bookmarkView.BookMarkId = bookmarkFakeId
                            'bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Client_Name_Project_Lead"
                            bookmarkView.BookmarkQuestion = "Client Contact"
                            bookmarkView.BookmarkSection = "Client Info "
                            bookmarkView.BookmarkAnswer = clientContact
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            '    bookmarkView = createView()
                            '    'Dim ids As Integer = projecid
                            '    Dim bookmarkMyId = (From bk In db.BookMarks
                            '                    Where bk.BookmarkDescription = "Client_Name_Project_Lead_Title" And bk.BookmarkProjectId = projecid.ppr_ProjectListId
                            '                    Select bk).FirstOrDefault()
                            '    bookmarkView.BookmarkDescription = "Client_Name_Project_Lead_Title"
                            '    If bookmarkMyId IsNot Nothing Then                
                            '        bookmarkView.BookmarkDescription = bookmarkMyId.BookmarkDescription
                            '        bookmarkView.BookMarkId = bookmarkMyId.BookmarkId
                            '        bookmarkView.BookmarkAnswer = bookmarkMyId.BookmarkAnswer
                            '    Else
                            '        Dim bookmarkMyIds = (From bk In db.BookMarks
                            'Where bk.BookmarkDescription = "Client_Name_Project_Lead_Title" And bk.BookmarkProjectId = 0
                            'Select bk).FirstOrDefault()
                            '        bookmarkView.BookmarkAnswer = bookmarkMyIds.BookmarkAnswer
                            '        bookmarkView.BookMarkId = bookmarkMyIds.BookmarkId
                            '        bookmarkView.BookmarkAnswer = ""
                            '    End If
                            '    bookmarkView.BookmarkQuestion = "Contact Title"
                            '    bookmarkView.BookmarkSection = "Client Info "
                            '    bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Client_Name_Project_Lead_Email"
                            bookmarkView.BookmarkQuestion = "Contact Email"
                            bookmarkView.BookmarkSection = "Client Info "
                            bookmarkView.BookmarkAnswer = contactEmail
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Client_Name_Project_Lead_Telephone"
                            bookmarkView.BookmarkQuestion = "Contact Phone"
                            bookmarkView.BookmarkSection = "Client Info "
                            bookmarkView.BookmarkAnswer = contactPhone
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)
                        End While
                    End If
                    If oReader IsNot Nothing Then
                        oReader.Close()
                    End If
                End Using
            Catch ex As Exception
            End Try


            Try
                Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
                Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                    oDbHelper.AddParameter("@projectName", id)
                    Const sProc As String = "ppr_TimeLineInfo"
                    Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
                    Dim datesTobeDisplay As String
                    datesTobeDisplay = ""
                    If oReader.HasRows Then
                        While oReader.Read()
                            Dim dateDescr As String = oReader("DateDescr")
                            Dim dateVal As String = oReader("DateVal")
                            datesTobeDisplay += (dateDescr + "  " + dateVal + ", ")
                        End While

                        bookmarkView = createView()
                        bookmarkView.BookmarkDescription = "Timeline"
                        bookmarkView.BookmarkQuestion = "Time Line Info"
                        bookmarkView.BookmarkSection = "Time Line Info "
                        bookmarkView.BookmarkAnswer = datesTobeDisplay
                        bookmarkFakeId = bookmarkFakeId + 1
                        bookmarkView.BookMarkId = bookmarkFakeId
                        bookmarkList.Add(bookmarkView)
                    End If
                    If oReader IsNot Nothing Then
                        oReader.Close()
                    End If
                End Using
            Catch ex As Exception
            End Try


            Try
                Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
                Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                    oDbHelper.AddParameter("@projectName", id)
                    Const sProc As String = "ppr_MarketResearchInfo"
                    Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
                    If oReader.HasRows Then
                        While oReader.Read()
                            Dim mrCountries As String = oReader("MRCountries")
                            Dim mrAgencies As String = oReader("MRAgencies")

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "In_which_countries_will_market_safety"
                            bookmarkView.BookmarkQuestion = "Research Countries"
                            bookmarkView.BookmarkSection = "Project Scope And Research"
                            bookmarkView.BookmarkAnswer = SplitString(mrCountries)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "To_which_agencies_will_names_be_submitte"
                            bookmarkView.BookmarkQuestion = "Submission Agencies"
                            bookmarkView.BookmarkSection = "Project Scope And Research"
                            bookmarkView.BookmarkAnswer = SplitString(mrAgencies)

                            Dim classStringArray As ArrayList = New ArrayList()


                            If bookmarkView.BookmarkAnswer.Contains("FDA") Then
                                classStringArray.Add(" FDA")
                                ' classStringArray.Add(" Food and Drug Administration")
                            End If
                            If bookmarkView.BookmarkAnswer.Contains("EMEA") Then
                                classStringArray.Add(" EMEA")
                                'classStringArray.Add(" European Medicines Agency")
                            End If
                            If bookmarkView.BookmarkAnswer.Contains("Japan") Then
                                classStringArray.Add(" Japan (MHLW)")
                            End If
                            bookmarkView.BookmarkAnswer = String.Join(",", CType(classStringArray.ToArray(Type.GetType("System.String")), String()))
                       
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)
                        End While
                    End If
                    If oReader IsNot Nothing Then
                        oReader.Close()
                    End If
                End Using
            Catch ex As Exception
            End Try


            Try
                Dim sConn As String = ConfigurationManager.ConnectionStrings("DBConnection").ConnectionString
                Using oDbHelper As New DBHelper.DatabaseHelper(sConn)
                    oDbHelper.AddParameter("@projectName", id)
                    Const sProc As String = "ppr_TrademarksInfo"
                    Dim oReader As DbDataReader = oDbHelper.ExecuteReader(sProc, CommandType.StoredProcedure)
                    If oReader.HasRows Then
                        While oReader.Read()
                            Dim tmCountries As String = oReader("TMCountries")
                            Dim tmClasses As String = oReader("TMClasses")

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "In_which_countries_will_be_trademarked"
                            bookmarkView.BookmarkQuestion = "TradeMark Countries"
                            bookmarkView.BookmarkSection = "Project Scope And Research"
                            bookmarkView.BookmarkAnswer = SplitString(tmCountries)
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)

                            bookmarkView = createView()
                            bookmarkView.BookmarkDescription = "Trademark_Class"
                            bookmarkView.BookmarkQuestion = "TradeMark Classes"
                            bookmarkView.BookmarkSection = "Project Scope And Research"
                            bookmarkView.BookmarkAnswer = SplitString(tmClasses)

                            bookmarkView.BookmarkAnswer = getClassTM(bookmarkView.BookmarkAnswer)

                      
                            bookmarkFakeId = bookmarkFakeId + 1
                            bookmarkView.BookMarkId = bookmarkFakeId
                            bookmarkList.Add(bookmarkView)
                        End While
                    End If
                    If oReader IsNot Nothing Then
                        oReader.Close()
                    End If
                End Using
            Catch ex As Exception
            End Try


            If IsNothing(bookmarkList) Then
                'Throw New HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound))
            End If
            Return bookmarkList
        End Function

        Private Shared Function createView() As BookmarkView
            Dim bookmarkView As New BookmarkView

            Return bookmarkView
        End Function

        Private Shared Function SplitString(ByVal pipeToSplit) As String
            Dim joined As String
            Dim substrings() As String = pipeToSplit.Split("|")
            If substrings.Length > 1 Then
                joined = String.Join(", ", substrings.ToArray())
            Else
                Return pipeToSplit
            End If
            Return joined
        End Function

        Private Shared Function GetClassTm(classes) As String
            Dim classStringArray As ArrayList = New ArrayList()
            Dim classString As String

            If classes.Contains("01") Then
                classStringArray.Add("class 1 (Chemicals)")
            End If
            If classes.Contains("02") Then
                classStringArray.Add(" class 2 (Paints, varnishes, lacquers)")
            End If
            If classes.Contains("03") Then
                classStringArray.Add("class 3 (Bleaching)")
            End If
            If classes.Contains("04") Then
                classStringArray.Add("class 4 (Industrial oils and greases)")
            End If
            If classes.Contains("05") Then
                classStringArray.Add("class 5 (pharmaceuticals)")
            End If
            If classes.Contains("06") Then
                classStringArray.Add("class 6 (Common metals and their alloys)")
            End If
            If classes.Contains("07") Then
                classStringArray.Add("class 7 (Machines and machine tools)")
            End If
            If classes.Contains("08") Then
                classStringArray.Add("class 8 (Hand tools and implements)")
            End If
            If classes.Contains("09") Then
                classStringArray.Add("class 9 (Scientific, nautical, surveying, electric, photographic)")
            End If
            If classes.Contains("10") Then
                classStringArray.Add("class 10 (medical devices)")
            End If
            If classes.Contains("11") Then
                classStringArray.Add("class 11 (Apparatus for lighting, heating, steam generating...)")
            End If
            If classes.Contains("12") Then
                classStringArray.Add("class 12 (Vehicles; apparatus for locomotion by land, air or water)")
            End If
            If classes.Contains("13") Then
                classStringArray.Add("class 13 (Firearms; ammunition and projectiles; explosives)")
            End If
            If classes.Contains("14") Then
                classStringArray.Add("class 14 (Precious metals and their alloys )")
            End If
            If classes.Contains("15") Then
                classStringArray.Add("class 15 (Musical instruments)")
            End If
            If classes.Contains("16") Then
                classStringArray.Add("class 16 (Paper, cardboard and goods made from these materials)")
            End If
            If classes.Contains("17") Then
                classStringArray.Add("class 17 (Rubber; gutta-percha, gum, asbestos, mica and goods)")
            End If
            If classes.Contains("18") Then
                classStringArray.Add("class 18 (Leather and imitations of leather)")
            End If
            If classes.Contains("19") Then
                classStringArray.Add("class 19 (Building materials (non-metallic))")
            End If
            If classes.Contains("20") Then
                classStringArray.Add("class 20 (Furniture, mirrors, picture frames; goods )")
            End If
            If classes.Contains("21") Then
                classStringArray.Add("class 21 (Household or kitchen utensils and containers )")
            End If
            If classes.Contains("22") Then
                classStringArray.Add("class 22 (Ropes, string, nets, tents, awnings, tarpaulins)")
            End If
            If classes.Contains("23") Then
                classStringArray.Add("class 23 (Yarns and threads, for textile use)")
            End If
            If classes.Contains("24") Then
                classStringArray.Add("class 24 (Textiles and textile goods)")
            End If
            If classes.Contains("25") Then
                classStringArray.Add("class 25 (Clothing, footwear, headgear)")
            End If
            If classes.Contains("26") Then
                classStringArray.Add("class 26 (pharmaceuLace and embroidery, ribbons and braid; buttons, hooksticals)")
            End If
            If classes.Contains("27") Then
                classStringArray.Add("class 27 (Carpets, rugs, mats and matting)")
            End If
            If classes.Contains("28") Then
                classStringArray.Add("class 28 (Games and playthings; gymnastics and sporting articles)")
            End If
            If classes.Contains("29") Then
                classStringArray.Add("class 29 (Meat, poultry and game; meat extracts)")
            End If
            If classes.Contains("30") Then
                classStringArray.Add("class 30 (Coffee, tea, cocoa, sugar, rice, tapioca, sago, arti_cial)")
            End If
            If classes.Contains("31") Then
                classStringArray.Add("class 31 (Agricultural)")
            End If
            If classes.Contains("32") Then
                classStringArray.Add("class 32 (Beers)")
            End If
            If classes.Contains("33") Then
                classStringArray.Add("class 33 (Alcoholic beverages )")
            End If
            If classes.Contains("34") Then
                classStringArray.Add("class 34 (Tobacco; smokers’ articles; matches)")
            End If
            If classes.Contains("35") Then
                classStringArray.Add("class 35 (Advertising)")
            End If
            If classes.Contains("36") Then
                classStringArray.Add("class 36 (Insurance)")
            End If
            If classes.Contains("37") Then
                classStringArray.Add("class 37 (Building construction)")
            End If
            If classes.Contains("38") Then
                classStringArray.Add("class 38 (Telecommunications)")
            End If
            If classes.Contains("39") Then
                classStringArray.Add("class 39 (Transport; packaging and storage of goods)")
            End If
            If classes.Contains("40") Then
                classStringArray.Add("class 40 (: Treatment of materials)")
            End If
            If classes.Contains("41") Then
                classStringArray.Add("class 41 (Education; providing of training)")
            End If
            If classes.Contains("42") Then
                classStringArray.Add("class 42 (Scientific and technological services)")
            End If
            If classes.Contains("43") Then
                classStringArray.Add("class 43 (Services for providing food and drink)")
            End If
            If classes.Contains("44") Then
                classStringArray.Add("class 44 (Medical services; veterinary services)")
            End If
            If classes.Contains("45") Then
                classStringArray.Add("class 45 (Legal services; security services for the protection of property and individuals)")
            End If

            classString = String.Join(", ", CType(classStringArray.ToArray(Type.GetType("System.String")), String()))
            Return classString
            'CLASS 1: Chemicals used in industry, science and photography, as
            'well as in agriculture, horticulture and forestry; unprocessed
            'arti_cial resins, unprocessed plastics, manures; _re extinguishing
            'compositions; tempering and soldering preparations; chemical
            'substances for preserving foodstu_s; tanning substances;
            'adhesives used in industry.
            'CLASS 2: Paints, varnishes, lacquers; preservatives against rust
            'and against deterioration of wood; colorants; mordants; raw
            'natural resins; metals in foil and powder form for painters,
            'decorators, printers and artists.
            'CLASS 3: Bleaching preparations and other substances for
            'laundry use; cleaning, polishing, scouring and abrasive
            'preparations; soaps; perfumery, essential oils, cosmetics, hair
            'lotions; dentifrices.
            'CLASS 4: Industrial oils and greases; lubricants; dust absorbing,
            'wetting and binding compositions; fuels (including motor spirit)
            'and illuminants; candles, wicks.
            'CLASS 5: Pharmaceutical, veterinary and sanitary preparations;
            'dietic substances adapted for medical use, food for babies;
            'plasters, materials for dressings; material for stopping teeth,
            'dental wax; disinfectants; preparations for destroying vermin;
            'fungicides, herbicides.
            'CLASS 6: Common metals and their alloys; metal building
            'materials; transportable buildings of metal; materials of metal
            'for railway tracks; non-electric cables and wires of common
            'metal; ironmongery, small items of metal hardware; pipes and
            'tubes of metal; safes; goods of common metal not included in
            'other classes; ores.
            'CLASS 7: Machines and machine tools; motors and engines
            '(except for land vehicles); machine coupling and transmission
            'components (except for land vehicles); agricultural implements;
            'incubators for eggs.
            'CLASS 8: Hand tools and implements (hand operated); cutlery;
            'side arms; razors.
            'CLASS 9: Scienti_c, nautical, surveying, electric, photographic,
            'cinematographic, optical, weighing, measuring, signaling,
            'checking (supervision), life-saving and teaching apparatus and
            'instruments; apparatus for recording, transmission or reproduction
            'of sound or images; magnetic data carriers, recording discs,
            'automatic vending machines and mechanisms for coin-operated
            'apparatus; cash registers, calculating machines, data processing
            'equipment and computers; _re-extinguishing apparatus.
            'CLASS 10: Surgical, medical, dental and veterinary apparatus
            'and instruments, arti_cial limbs, eyes and teeth; orthopedic
            'articles; suture materials.
            'CLASS 11: Apparatus for lighting, heating, steam generating,
            'cooking, refrigerating, drying, ventilating, water supply and
            'sanitary purposes.
            'CLASS 12: Vehicles; apparatus for locomotion by land, air or water.
            'CLASS 13: Firearms; ammunition and projectiles; explosives;
            '_reworks.
            'CLASS 14: Precious metals and their alloys and goods in precious
            'metals or coated therewith, not included in other classes; jewelry,
            'precious stones; horological and chronometric instruments.
            'CLASS 15: Musical instruments.
            'CLASS 16: Paper, cardboard and goods made from these materials,
            'not included in other classes; printed matter; bookbinding material;
            'photographs; stationery; adhesives for stationery or household
            'purposes; artists’ materials; paint brushes; typewriters and o_ce
            'requisites (except furniture); instructional and teaching material
            '(except apparatus); plastic materials for packaging (not included in
            'other classes); playing cards; printers’ type; printing blocks.
            'CLASS 17: Rubber; gutta-percha, gum, asbestos, mica and goods
            'made from these materials and not included in other classes;
            'plastics in extruded form for use in manufacture; packing, stopping
            'and insulating materials; _exible pipes, not of metal.
            'CLASS 18: Leather and imitations of leather, and goods made of
            'these materials and not included in other classes; animal skins,
            'hides; trunks and travelling bags; umbrellas, parasols and walking
            'sticks; whips, harness and saddlery.
            'CLASS 19: Building materials (non-metallic); non-metallic rigid
            'pipes for building; asphalt, pitch and bitumen; non-metallic
            'transportable buildings; monuments, not of metal.
            'CLASS 20: Furniture, mirrors, picture frames; goods (not included
            'in other classes) of wood, cork, reed, cane, wicker, horn, bone, ivory,
            'whalebone, shell, amber, mother-of-pearl, meerschaum and
            'substitutes for all these materials, or of plastics.
            'CLASS 21: Household or kitchen utensils and containers (not of
            'precious metal or coated therewith); combs and sponges; brushes
            '(except paint brushes), brush-making materials; articles for
            'cleaning purposes; steel wool; unworked or semi-worked glass
            '(except glass used in building); glassware, porcelain and
            'earthenware not included in other classes.
            'CLASS 22: Ropes, string, nets, tents, awnings, tarpaulins, sails,
            'sacks and bags (not included in other classes); padding and stu_ng
            'materials (except of rubber or plastics); raw _brous textile materials
            'CLASS 23: Yarns and threads, for textile use.
            'CLASS 24: Textiles and textile goods, not included in other classes;
            'bed and table covers.
            'CLASS 25: Clothing, footwear, headgear.
            'CLASS 26: Lace and embroidery, ribbons and braid; buttons, hooks
            'and eyes, pins and needles; arti_cial _owers.
            'CLASS 27: Carpets, rugs, mats and matting; linoleum and other
            'materials for covering existing _oors; wall hangings (non-textile).
            'CLASS 28: Games and playthings; gymnastics and sporting articles
            'not included in other classes; decorations for Christmas trees.
            'CLASS 29: Meat, _sh, poultry and game; meat extracts; preserved,
            'dried and cooked fruit and vegetables; jellies, jams, fruit sauces;
            'eggs, milk and milk products; edible oils and fats.
            'CLASS 30: Co_ee, tea, cocoa, sugar, rice, tapioca, sago, arti_cial
            'co_ee, _our and preparations made from cereals, bread, pastry and
            'confectionery, ices; honey, treacle; yeast, baking powder; salt;
            'mustard; vinegar, sauces (condiments); spices; ice.
            'CLASS 31: Agricultural, horticultural and forestry products and
            'grains not included in other classes; live animals; fresh fruits and
            'vegetables; seeds, natural plants and _owers; foodstu_s for
            'animals, malt.
            'CLASS 32: Beers; mineral and aerated waters and other
            'non-alcoholic drinks; fruit drinks and fruit juices; syrups and other
            'preparations for making beverages.
            'CLASS 33: Alcoholic beverages (except beers).
            'CLASS 34: Tobacco; smokers’ articles; matches
            'CLASS 35: Advertising, business management, business
            'administration; o_ce functions.
            'CLASS 36: Insurance; _nancial a_airs; monetary a_airs; real
            'estate a_airs.
            'CLASS 37: Building construction; repair; installation services.
            'CLASS 38: Telecommunications.
            'CLASS 39: Transport; packaging and storage of goods; travel
            'arrangement.
            'CLASS 40: Treatment of materials.
            'CLASS 41: Education; providing of training; entertainment;
            'sporting and cultural activities.
            'CLASS 42: Scienti_c and technological services and research and
            'design relating thereto; industrial analysis and research services;
            'design and development of computer hardware and software.
            'CLASS 43: Services for providing food and drink; temporary
            'accommodation.
            'CLASS 44: Medical services; veterinary services; hygienic and
            'beauty care for human beings or animals; agriculture,
            'horticulture and forestry services.
            'CLASS 45: Legal services; security services for the protection of
            'property and individuals; personal and social services rendered
            'by others to meet the needs of individuals.
            'Printed 07/2014
        End Function

    End Class
End Namespace
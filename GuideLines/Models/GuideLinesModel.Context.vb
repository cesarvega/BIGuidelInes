﻿'------------------------------------------------------------------------------
' <auto-generated>
'    This code was generated from a template.
'
'    Manual changes to this file may cause unexpected behavior in your application.
'    Manual changes to this file will be overwritten if the code is regenerated.
' </auto-generated>
'------------------------------------------------------------------------------

Imports System
Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure

Partial Public Class Entities
    Inherits DbContext

    Public Sub New()
        MyBase.New("name=Entities")
    End Sub

    Protected Overrides Sub OnModelCreating(modelBuilder As DbModelBuilder)
        Throw New UnintentionalCodeFirstException()
    End Sub

    Public Property BookMarks() As DbSet(Of BookMark)
    Public Property ClientBookmarks() As DbSet(Of ClientBookmark)
    Public Property Clients() As DbSet(Of Client)
    Public Property UserBookmarks() As DbSet(Of UserBookmark)
    Public Property ppr_ProjectListTable() As DbSet(Of ppr_ProjectListTable)
    Public Property CompetitiveLandscapes() As DbSet(Of CompetitiveLandscape)
    Public Property PPRQueue() As DbSet(Of PPRQueue)
    Public Property PPRTemplateForms() As DbSet(Of PPRTemplateForm)
    Public Property ClientQueues() As DbSet(Of ClientQueue)
    Public Property PPRBITeams() As DbSet(Of PPRBITeams)

End Class

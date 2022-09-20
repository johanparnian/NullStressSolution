﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NullStress.Data;

#nullable disable

namespace NullStress.Migrations
{
    [DbContext(typeof(NullStressContext))]
    [Migration("20220920182724_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("AdminSchoolClass", b =>
                {
                    b.Property<int>("AdminsId")
                        .HasColumnType("int");

                    b.Property<int>("SchoolClassesId")
                        .HasColumnType("int");

                    b.HasKey("AdminsId", "SchoolClassesId");

                    b.HasIndex("SchoolClassesId");

                    b.ToTable("AdminSchoolClass");
                });

            modelBuilder.Entity("NullStress.Models.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClassName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("School")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Admin");
                });

            modelBuilder.Entity("NullStress.Models.Mood", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("Muud")
                        .HasColumnType("int");

                    b.Property<Guid>("StudentId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("StudentId");

                    b.ToTable("Mood");
                });

            modelBuilder.Entity("NullStress.Models.SchoolClass", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("SchoolClassName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("SchoolClass");
                });

            modelBuilder.Entity("NullStress.Models.Student", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImageUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Link")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Needshelp")
                        .HasColumnType("bit");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("SchoolClassStudent", b =>
                {
                    b.Property<int>("SchoolClassesId")
                        .HasColumnType("int");

                    b.Property<Guid>("StudentsId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("SchoolClassesId", "StudentsId");

                    b.HasIndex("StudentsId");

                    b.ToTable("SchoolClassStudent");
                });

            modelBuilder.Entity("AdminSchoolClass", b =>
                {
                    b.HasOne("NullStress.Models.Admin", null)
                        .WithMany()
                        .HasForeignKey("AdminsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("NullStress.Models.SchoolClass", null)
                        .WithMany()
                        .HasForeignKey("SchoolClassesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("NullStress.Models.Mood", b =>
                {
                    b.HasOne("NullStress.Models.Student", "Student")
                        .WithMany("Moods")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");
                });

            modelBuilder.Entity("SchoolClassStudent", b =>
                {
                    b.HasOne("NullStress.Models.SchoolClass", null)
                        .WithMany()
                        .HasForeignKey("SchoolClassesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("NullStress.Models.Student", null)
                        .WithMany()
                        .HasForeignKey("StudentsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("NullStress.Models.Student", b =>
                {
                    b.Navigation("Moods");
                });
#pragma warning restore 612, 618
        }
    }
}

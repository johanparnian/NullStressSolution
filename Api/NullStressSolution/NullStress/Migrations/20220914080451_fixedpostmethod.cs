using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NullStress.Migrations
{
    public partial class fixedpostmethod : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ClassName",
                table: "SchoolClass",
                newName: "SchoolClassName");

            migrationBuilder.AddColumn<string>(
                name: "ClassName",
                table: "Student",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClassName",
                table: "Student");

            migrationBuilder.RenameColumn(
                name: "SchoolClassName",
                table: "SchoolClass",
                newName: "ClassName");
        }
    }
}

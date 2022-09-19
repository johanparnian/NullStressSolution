using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NullStress.Migrations
{
    public partial class removedstudentproperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClassName",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "TemporaryMood",
                table: "Student");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClassName",
                table: "Student",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TemporaryMood",
                table: "Student",
                type: "int",
                nullable: true);
        }
    }
}

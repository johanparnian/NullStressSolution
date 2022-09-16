using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NullStress.Migrations
{
    public partial class addedphonenumberandlink : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Link",
                table: "Student",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Link",
                table: "Student");
        }
    }
}

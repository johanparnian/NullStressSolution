using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NullStress.Migrations
{
    public partial class removedstudentpropertiesnew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdminSchoolClass");

            migrationBuilder.AddColumn<int>(
                name: "AdminId",
                table: "SchoolClass",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_SchoolClass_AdminId",
                table: "SchoolClass",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_SchoolClass_Admin_AdminId",
                table: "SchoolClass",
                column: "AdminId",
                principalTable: "Admin",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SchoolClass_Admin_AdminId",
                table: "SchoolClass");

            migrationBuilder.DropIndex(
                name: "IX_SchoolClass_AdminId",
                table: "SchoolClass");

            migrationBuilder.DropColumn(
                name: "AdminId",
                table: "SchoolClass");

            migrationBuilder.CreateTable(
                name: "AdminSchoolClass",
                columns: table => new
                {
                    AdminsId = table.Column<int>(type: "int", nullable: false),
                    SchoolClassesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdminSchoolClass", x => new { x.AdminsId, x.SchoolClassesId });
                    table.ForeignKey(
                        name: "FK_AdminSchoolClass_Admin_AdminsId",
                        column: x => x.AdminsId,
                        principalTable: "Admin",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AdminSchoolClass_SchoolClass_SchoolClassesId",
                        column: x => x.SchoolClassesId,
                        principalTable: "SchoolClass",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdminSchoolClass_SchoolClassesId",
                table: "AdminSchoolClass",
                column: "SchoolClassesId");
        }
    }
}

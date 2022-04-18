using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class NewsMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NewsHeaders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NewsTitle = table.Column<string>(type: "nvarchar", nullable: false , maxLength:3000),
                    NewsDesc = table.Column<string>(type: "nvarchar", nullable: false, maxLength: 3000),
                    NewsDate = table.Column<DateTime>(type: "Datetime", nullable: true),
                    NewsUser = table.Column<string>(type: "nvarchar", nullable: false , maxLength: 300),
                    Approved = table.Column<bool>(type: "bit", nullable: false),
                    IsFinished = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsHeaders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NewsContents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NewsId = table.Column<int>(type: "INTEGER", nullable: false),
                    Sequence = table.Column<int>(type: "INTEGER", nullable: false),
                    Content = table.Column<string>(type: "nvarchar", nullable: false, maxLength: 3000),
                    ContentType = table.Column<string>(type: "TEXT", nullable: false),
                    ContentUser = table.Column<string>(type: "nvarchar", nullable: false , maxLength: 300),
                    ContentDate = table.Column<DateTime>(type: "Datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsContents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NewsContents_NewsHeaders_NewsId",
                        column: x => x.NewsId,
                        principalTable: "NewsHeaders",
                        principalColumn: "Id");
                        //onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NewsContents_NewsId",
                table: "NewsContents",
                column: "NewsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NewsContents");

            migrationBuilder.DropTable(
                name: "NewsHeaders");
        }
    }
}

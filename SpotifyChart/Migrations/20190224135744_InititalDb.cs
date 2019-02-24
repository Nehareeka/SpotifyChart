using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SpotifyChart.Migrations
{
    public partial class InititalDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Songs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Artist = table.Column<string>(nullable: true),
                    Danceability = table.Column<decimal>(nullable: false),
                    Energy = table.Column<decimal>(nullable: false),
                    Key = table.Column<int>(nullable: false),
                    Loudness = table.Column<decimal>(nullable: false),
                    Mode = table.Column<int>(nullable: false),
                    Speechiness = table.Column<decimal>(nullable: false),
                    Acousticness = table.Column<decimal>(nullable: false),
                    Instrumentalness = table.Column<decimal>(nullable: false),
                    Liveness = table.Column<decimal>(nullable: false),
                    Valence = table.Column<decimal>(nullable: false),
                    Tempo = table.Column<decimal>(nullable: false),
                    Duration = table.Column<double>(nullable: false),
                    TimeSignature = table.Column<int>(nullable: false),
                    Rank = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Songs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Songs");
        }
    }
}

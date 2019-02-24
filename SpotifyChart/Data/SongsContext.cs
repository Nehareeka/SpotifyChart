using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SpotifyChart.Data.Entities;

namespace SpotifyChart.Data
{
    public class SongsContext : DbContext
    {

        public SongsContext(DbContextOptions<SongsContext> options) : base(options)
        {
        }

        public DbSet<Songs> Songs { get; set; }

    }
}

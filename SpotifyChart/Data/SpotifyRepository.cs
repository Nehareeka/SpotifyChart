using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using SpotifyChart.Data.Entities;

namespace SpotifyChart.Data
{
    public class SpotifyRepository : ISpotifyRepository
    {
        private readonly SongsContext _context;
        private readonly ILogger<SpotifyRepository> _logger;

        public SpotifyRepository(SongsContext context, ILogger<SpotifyRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Songs> GetAllSongs()
        {

            return _context.Songs
                .OrderBy(x => x.Rank)
                .ToList();
        }
    }
}

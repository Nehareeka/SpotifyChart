using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SpotifyChart.Data.Entities;

namespace SpotifyChart.Data
{
    public interface ISpotifyRepository
    {
        IEnumerable<Songs> GetAllSongs();
      //  IEnumerable<Songs> GetStockBySymbol(string symbol);
    }
}

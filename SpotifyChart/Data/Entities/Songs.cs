using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpotifyChart.Data.Entities
{
    public class Songs
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public decimal Danceability { get; set; }
        public decimal Energy { get; set; }
        public int Key { get; set; }
        public decimal Loudness { get; set; }
        public int Mode { get; set; }
        public decimal Speechiness { get; set; }
        public decimal Acousticness { get; set; }
        public decimal Instrumentalness { get; set; }
        public decimal Liveness { get; set; }
        public decimal Valence { get; set; }
        public decimal Tempo { get; set; }
        public double Duration { get; set; }
        public int TimeSignature { get; set; }
        public int Rank { get; set; }
    }
}

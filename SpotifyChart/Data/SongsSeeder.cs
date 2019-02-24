using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using NotVisualBasic.FileIO;
using SpotifyChart.Data.Entities;
using static NotVisualBasic.FileIO.CsvTextFieldParser;

namespace SpotifyChart.Data
{
    public class SongsSeeder
    {
        private readonly SongsContext _context;
        private readonly IHostingEnvironment _hosting;

        public SongsSeeder(SongsContext context, IHostingEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public void Seed()
        {
            _context.Database.EnsureCreated();
            if (!_context.Songs.Any())
            {
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/SpotifyData.csv");
                CsvTextFieldParser parser = new CsvTextFieldParser(filepath);

                parser.HasFieldsEnclosedInQuotes = true;
                parser.SetDelimiter(',');
                parser.ReadFields();
                List<Songs> lst = new List<Songs>();
                while (!parser.EndOfData)
                {
                    string[] fields = parser.ReadFields();
                    lst.Add(OneFromCsv(fields));
                }

                _context.Songs.AddRange(lst.ToArray());
                _context.SaveChanges();
            }
        }

        public static Songs OneFromCsv(string[] values)
        {
            Songs item = new Songs();
            int i = 0;
            item.Name = values[i++];
            item.Artist = values[i++];
            item.Danceability = Convert.ToDecimal(values[i++]);
            item.Energy = Convert.ToDecimal(values[i++]);
            item.Key = Convert.ToInt32(values[i++]);
            item.Loudness = Convert.ToDecimal(values[i++]);
            item.Mode = Convert.ToInt32(values[i++]);
            item.Speechiness = Convert.ToDecimal(values[i++]);
            item.Acousticness = Convert.ToDecimal(values[i++]);
            item.Instrumentalness = Decimal.Parse(values[i++],
                NumberStyles.AllowExponent | NumberStyles.AllowDecimalPoint);
            item.Liveness = Convert.ToDecimal(values[i++]);
            item.Valence = Convert.ToDecimal(values[i++]);
            item.Tempo = Convert.ToDecimal(values[i++]);
            item.Duration = ConvertMillisecondsToMinutes(Convert.ToDouble(values[i++]));
            item.TimeSignature = Convert.ToInt32(values[i++]);
            item.Rank = Convert.ToInt32(values[i++]);
            return item;
        }

        //Milliseconds To minutes
        public static double ConvertMillisecondsToMinutes(double milliseconds)
        {
            return TimeSpan.FromMilliseconds(milliseconds).TotalMinutes;
        }
    }
}

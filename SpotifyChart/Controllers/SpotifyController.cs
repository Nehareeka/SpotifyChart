using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SpotifyChart.Data;

namespace SpotifyChart.Controllers
{
    [Route("api/song")]
    public class SpotifyController : ControllerBase
    {
        private readonly ISpotifyRepository _repo;
        private readonly ILogger<SpotifyController> _logger;
        //private readonly IMapper _mapper;

        public SpotifyController(ISpotifyRepository repo, ILogger<SpotifyController> logger)
        {
            _repo = repo;
            _logger = logger;
            //_mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var result = _repo.GetAllSongs();
                var data = new Dictionary<string, object>();
                data.Add("TopSongs", result.OrderBy(x => x.Rank).Take(50));
                data.Add("AllSongs", result);
                return Ok(data);
            }
            catch (Exception ex)
            {
                _logger.LogError($"error occurred: {ex}");
                return BadRequest("Error occurred");
            }
        }

        //[HttpGet("{name}")]
        //public IActionResult Get(string name)
        //{
        //    try
        //    {
        //        var stock = _repo.GetSongByName();
        //        if (stock != null)
        //            return Ok(stock);
        //        return NotFound();
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError($"error occurred: {ex}");
        //        return BadRequest("Error occurred");
        //    }
        //}

    }
}

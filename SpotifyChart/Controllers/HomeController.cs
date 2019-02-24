using Microsoft.AspNetCore.Mvc;

namespace SpotifyChart.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

    }
}

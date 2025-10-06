using Microsoft.AspNetCore.Mvc;

namespace ReactNetCorePOC.Server.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.Title = "Welcome to ReactNetCorePOC";
            ViewBag.Description = "A modern React + .NET Core application with neubrutalism design and SEO-friendly server-side rendering";
            ViewBag.Keywords = "React, .NET Core, SEO, MPA, Neubrutalism, Server-side rendering, Modern web development";

            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us - ReactNetCorePOC";
            ViewBag.Description = "Learn more about our React and .NET Core development services with neubrutalism design";
            ViewBag.Keywords = "About, Company, React, .NET Core, Neubrutalism, Development";

            return View();
        }

        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Us - ReactNetCorePOC";
            ViewBag.Description = "Get in touch with our development team";
            ViewBag.Keywords = "Contact, Support, Development, React, .NET Core";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}

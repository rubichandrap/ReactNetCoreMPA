using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ReactNetCorePOC.Server.Controllers
{
    [Authorize]
    public class DashboardController : Controller
    {
        private readonly ILogger<DashboardController> _logger;

        public DashboardController(ILogger<DashboardController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.Title = "Dashboard - ReactNetCorePOC";
            ViewBag.Description = "Welcome to your ReactNetCorePOC dashboard";
            ViewBag.Keywords = "Dashboard, Admin, ReactNetCorePOC, Management";

            // Pass user info to the view
            ViewBag.UserName = User.Identity?.Name;
            ViewBag.UserEmail = User.FindFirst(System.Security.Claims.ClaimTypes.Email)?.Value;

            return View();
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace PowerApproval.Server.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.Title = "Welcome to PowerApproval";
            return View();
        }
    }
}


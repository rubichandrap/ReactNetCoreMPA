using Microsoft.AspNetCore.Mvc;

namespace ReactNetCorePOC.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromForm] ContactModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Here you would typically save to database or send email
            _logger.LogInformation($"Contact form submitted: {model.Name} - {model.Email} - {model.Message}");

            return Ok(new
            {
                message = "Thank you for your message! We'll get back to you soon.",
                success = true
            });
        }
    }

    public class ContactModel
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }
}

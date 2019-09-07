using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace asp_mvc_webpack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {  
        public IActionResult Index()
        {
           
            return Ok();
        }
    }
}
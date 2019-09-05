using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace asp_mvc_webpack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : Controller
    {  
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;


        public AccountController(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;

        }


        [HttpPost]
        [Route("logout")]
        public async Task<IActionResult> Post()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }
    }
}
using MoviesApi.Data;
using Microsoft.AspNetCore.Mvc;

namespace MoviesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : Controller
    {
        private MoviesDbContext context;
        public MoviesController(MoviesDbContext temp)
        {
            context = temp;
        }

/*Orders the titles alphabetically and only displays edited films*/
        public IEnumerable<Movies> Get()
        {
            return context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}

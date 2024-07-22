using Microsoft.AspNetCore.Mvc;
using Turnkey_challenge.Domain.Interfaces;
using Turnkey_challenge.Domain.Models;

namespace Turnkey_challenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NodesPathsController : ControllerBase
    {
        private readonly INodesPathsServices _services;
        public NodesPathsController(INodesPathsServices services)
        {
            _services = services;
        }

        [HttpPost("Get")]
    public async Task<IActionResult> Get(Graph graph)
    {
        try
        {
            var data = await _services.GetNodesPaths(graph);
            return Ok(data);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
    }

    
}
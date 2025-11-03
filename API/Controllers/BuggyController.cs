using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{

  [HttpGet("not-found")]
  public IActionResult GetNotFound()
  {
    return NotFound();
  }
  
  [HttpGet("bad-request")]
  public IActionResult GetBadRequest()
  {
    return BadRequest("This is not a good request");
  }
}

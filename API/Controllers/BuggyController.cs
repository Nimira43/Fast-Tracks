using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{

  [HttpGet("not-found")]
  public IActionResult GetNotFound() {}
}

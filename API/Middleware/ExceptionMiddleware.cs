using System;

namespace API.Middleware;

public class ExceptionMiddleware(
  IHostEnvironment env, 
  ILogger<ExceptionMiddleware> logger
) : IMiddleware
{
  public Task InvokeAsync(HttpContext context, RequestDelegate next)
  {
    throw new NotImplementedException();
  }
}

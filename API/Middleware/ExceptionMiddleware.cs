using System;

namespace API.Middleware;

public class ExceptionMiddleware(
  IHostEnvironment env, 
  ILogger<ExceptionMiddleware> logger
) : IMiddleware
{
  public async Task InvokeAsync(HttpContext context, RequestDelegate next)
  {
    try
    {
      
    }
    catch (System.Exception)
    {
      
      throw;
    }
  }
}

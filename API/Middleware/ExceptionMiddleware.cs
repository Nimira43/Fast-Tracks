using System;
using System.Net;

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
      await next(context);
    }
    catch (Exception ex)
    {
      
      await HandleException(context, ex);
    }
  }

  private async Task HandleException(HttpContext context, Exception ex)
  {
    logger.LogError(ex, ex.Message);
    context.Response.ContentType = "application/json";
    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
  }
}

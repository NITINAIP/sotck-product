using DBContext.entity;
using Microsoft.EntityFrameworkCore;
namespace reTest;
public static class common
{
    public static IServiceCollection AddBaseServices(this IServiceCollection services)
    {
        // services.AddScoped


        return services;
    }

    public static WebApplication AddControllerX(this WebApplication services)
    {
        services.AddPoductController();
        //         services.MapGet("/user", async (DBContext.entity.DBContext _AppdbContext) =>
        //   {
        //       return Results.Ok(await _AppdbContext.Users.ToListAsync());

        //   })
        //   .WithName("GetUser");
        //         services.MapPost("/createuser", async (DBContext.entity.DBContext _AppdbContext) =>
        //   {
        //       // var users = await _AppdbContext.Users.ToListAsync();
        //       // var maxId = users.MaxBy(s => s.Id)?.Id ?? 0;
        //       var user = new User() { FirstName = "bank" };
        //       _AppdbContext.Users.Add(user);
        //       _AppdbContext.SaveChanges();
        //       return Results.Ok(await _AppdbContext.Users.ToListAsync());

        //   })
        //   .WithName("CreateUser");

        //         services.MapPost("/updateuser", async (DBContext.entity.DBContext _AppdbContext, User user) =>
        //   {
        //       var userold = await _AppdbContext.Users.FirstOrDefaultAsync(_ => _.Id == user.Id);
        //       if (userold != null)
        //       {
        //           userold.FirstName = user.FirstName;
        //           userold.LastName = user.LastName;
        //           _AppdbContext.Users.Update(userold);
        //           _AppdbContext.SaveChanges();
        //       }

        //       return Results.Ok(await _AppdbContext.Users.ToListAsync());

        //   })
        //   .WithName("UpdateUser");

        //         services.MapPost("/Deleteuser", async (DBContext.entity.DBContext _AppdbContext, User user) =>
        //   {
        //       var userold = await _AppdbContext.Users.FirstOrDefaultAsync(_ => _.Id == user.Id);
        //       if (userold != null)
        //       {
        //           _AppdbContext.Users.Remove(userold);
        //           _AppdbContext.SaveChanges();
        //       }

        //       return Results.Ok(await _AppdbContext.Users.ToListAsync());

        //   })
        //   .WithName("Deleteuser");





        return services;
    }
}
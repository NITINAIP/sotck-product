using Microsoft.EntityFrameworkCore;
using reTest;
using DBContext.entity;
;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
var Configuration = builder.Configuration;
Config.SetDefault(builder.Services,Configuration);
  builder.Services.AddDbContext<DBContext.entity.DBContext>(op => {
            op.UseNpgsql(builder.Configuration.GetConnectionString("DB"));
        });
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

        // global cors policy
app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());
app.UseHttpsRedirection();




app.AddControllerX();
//  app.MapControllers();
app.Run();


using API.Extensions;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Add Cors for Client
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection"));
});

builder.Services.AddIdentityServices(builder.Configuration);
var app = builder.Build();

//Migrate database
using var scope = app.Services.CreateScope();
var scopeService = scope.ServiceProvider;
try
{
    var context = scopeService.GetRequiredService<DataContext>();
    context.Database.Migrate();

    var userManager = scopeService.GetRequiredService<UserManager<AppUser>>();
    await Seed.SeedData(context, userManager);
}
catch (Exception ex)
{
    var logger = scopeService.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migration");
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
           Path.Combine(builder.Environment.ContentRootPath, "Images")),
    RequestPath = "/Images"
});
app.UseAuthorization();

app.MapControllers();

app.Run();


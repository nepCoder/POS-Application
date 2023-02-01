using POS.Application.Service.Customer;
using POS.Application.Service.User;
using SD.LLBLGen.Pro.DQE.SqlServer;
using SD.LLBLGen.Pro.ORMSupportClasses;

var builder = WebApplication.CreateBuilder(args);
var Configuration = builder.Configuration;
// Add services to the container.

builder.Services.AddCors(options =>
{
options.AddPolicy("AllowCors",
    b => b.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
    );
});

builder.Services.AddControllers();
builder.Services.AddTransient<ICustomerService, CustomerService>();
builder.Services.AddTransient<IProductService, ProductService>();

var app = builder.Build();


// Configure the HTTP request pipeline.
RuntimeConfiguration.ConfigureDQE<SQLServerDQEConfiguration>(c => c.AddDbProviderFactory(typeof(System.Data.SqlClient.SqlClientFactory)));
RuntimeConfiguration.AddConnectionString(Configuration["ConnectionStrings:StringKey"], Configuration["ConnectionStrings:DefaultConnection"]);
RuntimeConfiguration.ConfigureDQE<SQLServerDQEConfiguration>(c => c.SetDefaultCompatibilityLevel(SqlServerCompatibilityLevel.SqlServer2012));
RuntimeConfiguration.ConfigureDQE<SQLServerDQEConfiguration>(c => c.AddCatalogNameOverwrite("Bikash", Configuration["ConnectionStrings:CatalogNameToUse"]));


//app.MapGet("/api", (HttpContent context) =>
//{
//    return "API Started Successfully: " + DateTime.Now.ToString();
//});

app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();

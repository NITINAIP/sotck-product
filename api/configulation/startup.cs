namespace reTest;
public static class Config
{
    public static void SetDefault(IServiceCollection services, IConfiguration configuration)
    {
        services.AddControllers();
        services.AddCors();
    }

}
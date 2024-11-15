dotnet ef dbcontext scaffold "Name=Connection:DB" Npgsql.EntityFrameworkCore.PostgreSQL -c DBContext -f -n DBContext.entity -o datasource



dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
dotnet add package Microsoft.EntityFrameworkCore.Design

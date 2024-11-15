
using Microsoft.EntityFrameworkCore;
namespace reTest;
public static class Product
{
    public static WebApplication AddPoductController(this WebApplication services)
    {
        services.MapGet("/product", async (DBContext.entity.DBContext _AppdbContext) =>
           {
               return Results.Ok(await _AppdbContext.Products.ToListAsync());

           }).WithName("product");
        services.MapGet("/saveproduct", async (DBContext.entity.DBContext _AppdbContext) =>
          {
              return Results.Ok(await _AppdbContext.Products.ToListAsync());

          }).WithName("saveproduct"); ;

        services.MapGet("/totalProduct", async (DBContext.entity.DBContext _AppdbContext) =>
          {

              return Results.Ok(await _AppdbContext.Stocks.ToListAsync());

          }).WithName("totalProduct");

        services.MapPost("/checkProduct", (DBContext.entity.DBContext _AppdbContext, DTOProduct p) =>
       {
           if (p == null)
           {
               return Results.BadRequest(new { messages = "ไม่พบสิ้นค้า" });
           }
           var item = _AppdbContext.Products.FirstOrDefault(s => s.ProductId == p.ProductId);
           if (item != null)
           {
               var itemStock = _AppdbContext.Stocks.FirstOrDefault(s => s.ProductId == p.ProductId);
               if (p.ProductAmount > 0)
               {
                   if (itemStock.Amount >= p.ProductAmount)
                   {
                       return Results.Ok(true);
                   }
                   else
                   {
                       return Results.BadRequest(new { messages = "จำนวนสิ้นค้าไม่พอ" });
                   }
               }

           }

           return Results.Ok(false);

       }).WithName("checkProduct");

        services.MapPut("/checkOut", async (DBContext.entity.DBContext _AppdbContext, List<DTOProduct> products) =>
          {
              if (products.Count() == 0)
              {
                  return Results.BadRequest(new { messages = "ไม่พบสิ้นค้า" });
              }
              products.ForEach(p =>
              {
                  if (p?.ProductId != null)
                  {
                      var item = _AppdbContext.Products.FirstOrDefault(s => s.ProductId == p.ProductId);
                      if (item != null)
                      {
                          var itemStock = _AppdbContext.Stocks.FirstOrDefault(s => s.ProductId == p.ProductId);
                          if (p.ProductAmount > 0)
                          {
                              if (itemStock.Amount >= p.ProductAmount)
                              {
                                  itemStock.Amount = itemStock.Amount - p.ProductAmount;
                              }
                              _AppdbContext.Stocks
                .Where(x => x.ProductId == itemStock.ProductId)
                .ExecuteUpdate((setters) => setters
                   .SetProperty(s => s.Amount, itemStock.Amount)

                );


                          }

                      }

                  }

              });

              return Results.Ok(await _AppdbContext.Stocks.ToListAsync());

          }).WithName("checkOut");
        services.MapPost("/reset", (DBContext.entity.DBContext _AppdbContext, DTOProduct p) =>
            {
                var itemStock = _AppdbContext.Stocks.ToList();
                itemStock.ForEach(_ =>
                {
                    _AppdbContext.Stocks
                 .Where(x => x.ProductId == _.ProductId)
                 .ExecuteUpdate((setters) => setters
                    .SetProperty(s => s.Amount, 10)

                 );

                });


                return Results.Ok(false);

            }).WithName("reset");
        return services;
    }
}
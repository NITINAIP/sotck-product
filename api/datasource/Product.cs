using System;
using System.Collections.Generic;

namespace DBContext.entity;

public partial class Product
{
    public int ProductId { get; set; }

    public string? ProductName { get; set; }

    public string? PricePerUnit { get; set; }
}

using System;
using System.Collections.Generic;

namespace DBContext.entity;

public partial class Stock
{
    public int? ProductId { get; set; }

    public int? Amount { get; set; }
}

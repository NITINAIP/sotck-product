using System;
using System.Collections.Generic;

namespace DBContext.entity;

public partial class User
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? CreateDate { get; set; }

    public string? UpdateDate { get; set; }

    public string? Address { get; set; }
}

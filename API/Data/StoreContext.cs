using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
  public required DbSet<Product> Products { get; set; }
  public required DbSet<Basket> Baskets { get; set; }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);

    builder.Entity<IdentityRole>()
      .HasData(
        new IdentityRole { Id = "198da612-9fdb-4277-8bb6-c3fab694fa9a", Name = "Member", NormalizedName = "MEMBER" },
        new IdentityRole { Id = "246c7beb-c46e-4b42-a0be-b8eeaee00656", Name = "Admin", NormalizedName = "ADMIN" }
      );
  }
}

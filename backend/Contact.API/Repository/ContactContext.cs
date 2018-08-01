using Microsoft.EntityFrameworkCore;

namespace Contact.API.Repository
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Domain.Entities.Contact> Contacts { get; set; }
    }
}
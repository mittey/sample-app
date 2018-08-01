using System.ComponentModel.DataAnnotations;

namespace Contact.API.Domain.Entities
{
    public class Contact
    {
        public int Id { get; set; }
        public bool IsDeleted { get; set; }

        [Required] public string Name { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
using System.ComponentModel.DataAnnotations;

namespace Contact.API.Domain.Dto
{
    public class ContactDto
    {
        public int Id { get; set; }
        public bool IsDeleted { get; set; }

        [Required] public string Name { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Contact.API.Services.Interfaces
{
    public interface IContactService
    {
        Task<Domain.Entities.Contact> GetContactByIdAsync(int contactId);
        Task<List<Domain.Entities.Contact>> GetAllContactsAsync();
        Task<Domain.Entities.Contact> CreateContactAsync(Domain.Entities.Contact contact);
        Task<Domain.Entities.Contact> EditContactAsync(Domain.Entities.Contact contact);
        Task DeleteContactAsync(int contactId);
    }
}
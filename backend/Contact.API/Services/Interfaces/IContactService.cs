using System.Collections.Generic;
using System.Threading.Tasks;
using Contact.API.Dto;

namespace Contact.API.Services.Interfaces
{
    internal interface IContactService
    {
        Task<ContactDto> GetContactByIdAsync(int contactId);
        Task<List<ContactDto>> GetAllContactsAsync();
        Task<ContactDto> CreateContactAsync();
        Task<ContactDto> EditContactAsync(int contactId);
        Task DeleteContactAsync(int contactId);
    }
}
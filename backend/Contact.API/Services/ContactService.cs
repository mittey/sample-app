using System.Collections.Generic;
using System.Threading.Tasks;
using Contact.API.Dto;
using Contact.API.Services.Interfaces;

namespace Contact.API.Services
{
    public class ContactService : IContactService
    {
        public Task<ContactDto> GetContactByIdAsync(int contactId)
        {
            throw new System.NotImplementedException();
        }

        public Task<List<ContactDto>> GetAllContactsAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<ContactDto> CreateContactAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<ContactDto> EditContactAsync(int contactId)
        {
            throw new System.NotImplementedException();
        }

        public Task DeleteContactAsync(int contactId)
        {
            throw new System.NotImplementedException();
        }
    }
}
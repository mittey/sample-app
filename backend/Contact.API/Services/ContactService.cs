using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contact.API.Exceptions;
using Contact.API.Repository;
using Contact.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Contact.API.Services
{
    public class ContactService : IContactService
    {
        private readonly ContactContext _context;

        public ContactService(ContactContext context)
        {
            _context = context;
        }

        public async Task<Domain.Entities.Contact> GetContactByIdAsync(int contactId)
        {
            var contact = await _context.Contacts.FirstOrDefaultAsync(c => c.Id == contactId && !c.IsDeleted);

            if (contact == null) throw new EntityNotFoundException(nameof(Domain.Entities.Contact));

            return contact;
        }

        public async Task<List<Domain.Entities.Contact>> GetAllContactsAsync()
        {
            var contacts = await _context.Contacts.Where(c => !c.IsDeleted).ToListAsync();

            return contacts;
        }

        public async Task<Domain.Entities.Contact> CreateContactAsync(Domain.Entities.Contact contact)
        {
            await _context.AddAsync(contact);
            await _context.SaveChangesAsync();

            return contact;
        }

        public async Task<Domain.Entities.Contact> EditContactAsync(Domain.Entities.Contact contact)
        {
            _context.Contacts.Update(contact);
            await _context.SaveChangesAsync();

            return contact;
        }

        public async Task DeleteContactAsync(int contactId)
        {
            var contact = await GetContactByIdAsync(contactId);

            contact.IsDeleted = true;

            await _context.SaveChangesAsync();
        }
    }
}
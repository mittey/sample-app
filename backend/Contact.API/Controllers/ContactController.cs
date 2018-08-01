using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Contact.API.Domain.Dto;
using Contact.API.Exceptions;
using Contact.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Contact.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }


        [HttpPost(Name = "CreateContact")]
        [SwaggerOperation("createContact")]
        [ProducesResponseType(typeof(ContactDto), (int) HttpStatusCode.OK)]
        [ProducesResponseType((int) HttpStatusCode.BadRequest)]
        public async Task<IActionResult> CreateContact(ContactDto model)
        {
            if (!ModelState.IsValid) return BadRequest();

            try
            {
                var contact = Mapper.Map<Domain.Entities.Contact>(model);

                var newContact = await _contactService.CreateContactAsync(contact);

                var newContactDto = Mapper.Map<ContactDto>(newContact);

                return Ok(newContactDto);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut(Name = "EditContact")]
        [SwaggerOperation("editContact")]
        [ProducesResponseType(typeof(ContactDto), (int) HttpStatusCode.OK)]
        [ProducesResponseType((int) HttpStatusCode.BadRequest)]
        [ProducesResponseType((int) HttpStatusCode.NotFound)]
        public async Task<IActionResult> EditContact(ContactDto model)
        {
            if (!ModelState.IsValid) return BadRequest();

            try
            {
                var contact = Mapper.Map<Domain.Entities.Contact>(model);

                var editedContact = await _contactService.EditContactAsync(contact);

                var editedContactDto = Mapper.Map<ContactDto>(editedContact);

                return Ok(editedContactDto);
            }
            catch (EntityNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet(Name = "GetAllContacts")]
        [SwaggerOperation("getAllContacts")]
        [ProducesResponseType(typeof(List<ContactDto>), (int) HttpStatusCode.OK)]
        [ProducesResponseType((int) HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetAllContacts()
        {
            try
            {
                var contacts = await _contactService.GetAllContactsAsync();

                var contactDtos = Mapper.Map<List<ContactDto>>(contacts);

                return Ok(contactDtos);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("{contactId}", Name = "GetContactById")]
        [SwaggerOperation("getContactById")]
        [ProducesResponseType(typeof(List<ContactDto>), (int) HttpStatusCode.OK)]
        [ProducesResponseType((int) HttpStatusCode.BadRequest)]
        [ProducesResponseType((int) HttpStatusCode.NotFound)]
        public async Task<IActionResult> GetContactById(int contactId)
        {
            try
            {
                var contact = await _contactService.GetContactByIdAsync(contactId);

                var contactDto = Mapper.Map<ContactDto>(contact);

                return Ok(contactDto);
            }
            catch (EntityNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{contactId}", Name = "DeleteContactById")]
        [SwaggerOperation("deleteContactById")]
        [ProducesResponseType(typeof(List<ContactDto>), (int) HttpStatusCode.OK)]
        [ProducesResponseType((int) HttpStatusCode.BadRequest)]
        [ProducesResponseType((int) HttpStatusCode.NotFound)]
        public async Task<IActionResult> DeleteContactById(int contactId)
        {
            try
            {
                await _contactService.DeleteContactAsync(contactId);

                return Ok();
            }
            catch (EntityNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
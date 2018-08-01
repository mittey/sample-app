using AutoMapper;
using Contact.API.Domain.Dto;

namespace Contact.API.Configuration
{
    public class DtoProfile : Profile
    {
        public DtoProfile()
        {
            CreateMap<Domain.Entities.Contact, ContactDto>().ReverseMap();
        }
    }
}
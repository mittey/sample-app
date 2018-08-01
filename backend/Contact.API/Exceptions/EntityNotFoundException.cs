using System;

namespace Contact.API.Exceptions
{
    public class EntityNotFoundException : Exception
    {
        public EntityNotFoundException(string type)
            : base($"Entities of type {type} not found.")
        {
        }
    }
}
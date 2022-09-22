using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NullStress.Data;
using NullStress.Models;
using Twilio.Clients;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Http;
using Twilio.Types;

namespace NullStress.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SmsController : ControllerBase
    {
        private readonly ITwilioRestClient _client;
        private readonly NullStressContext _context;

        public SmsController(ITwilioRestClient client, NullStressContext context)
        {
            _client = client;
            _context = context;
        }

        [HttpPost]
        public IActionResult SendSms(SmsMessage model)
        {

            var lastStudentAdded = _context.Student
                .Select(x => new
                {
                    x.Id,
                }).ToList().Last().ToString();

            lastStudentAdded = lastStudentAdded.Trim('{');
            lastStudentAdded = lastStudentAdded.Trim(' ');
            lastStudentAdded = lastStudentAdded.Trim('}');
            lastStudentAdded = lastStudentAdded.Trim('=');
            lastStudentAdded = lastStudentAdded.Remove(0, 5);


            var themessage = model.Message + "hei!";

            var message = MessageResource.Create(
                to: new PhoneNumber(model.To),
                from: new PhoneNumber(model.From),
                body: model.Message + lastStudentAdded,
                client: _client
                );

            return Ok("Success");
        }

    }
}

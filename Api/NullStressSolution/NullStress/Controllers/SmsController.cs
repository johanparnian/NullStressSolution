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

        public SmsController(ITwilioRestClient client)
        {
            _client = client;
            
        }

        [HttpGet]
        public IActionResult SendSms(SmsMessage model)
        {
            var message = MessageResource.Create(
                to: new PhoneNumber(model.To),
                from: new PhoneNumber(model.From),
                body: model.Message,
                client: _client
                );

            return Ok("Success");
            //GET to "https://localhost:7212/sms"
            //Sample Query:

            //{
            //            "to": "+4790173862",
            //            "from": "+18145643389",
            //            "message": "ping"
            //          }
        }

    }
}

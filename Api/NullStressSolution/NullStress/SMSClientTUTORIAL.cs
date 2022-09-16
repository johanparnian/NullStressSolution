using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NullStress.Data;

using System;
using System.Linq;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

namespace NullStress
{
    public class SMSClientTUTORIAL
    {
        public void SMS()
        {
            string sid = "ACe6f493a7fc521c9f26ede8726091587b";
            string auth = "8a43f8d13483511716bdd94d0b1df649";

            //TwilioClient.Init(sid, auth);

            var message = MessageResource.Create(
                body: "This is the ship that made the Kessel Run in fourteen parsecs?",
                from: new Twilio.Types.PhoneNumber("+18145643389"),
                to: new Twilio.Types.PhoneNumber("+4790173862")
            );
        }
    }
}

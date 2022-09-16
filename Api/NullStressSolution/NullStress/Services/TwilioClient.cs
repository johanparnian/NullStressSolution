using Twilio.Clients;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NullStress.Data;

using System;
using System.Linq;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Http;

//using TwilioClient SystemHttpClient = System.Net.Http.HttpClient;

public class TwilioClient : ITwilioRestClient
{
    private readonly ITwilioRestClient _innerClient;

    public TwilioClient(IConfiguration config, System.Net.Http.HttpClient httpClient)
    {
        // customize the underlying HttpClient
        httpClient.DefaultRequestHeaders.Add("X-Custom-Header", "CustomTwilioRestClient-Demo");

        _innerClient = new TwilioRestClient(
            config["Twilio:AccountSid"],
            config["Twilio:AuthToken"],
            httpClient: new SystemNetHttpClient(httpClient));
    }

    public Response Request(Request request) => _innerClient.Request(request);
    public Task<Response> RequestAsync(Request request) => _innerClient.RequestAsync(request);
    public string AccountSid => _innerClient.AccountSid;
    public string Region => _innerClient.Region;
    public Twilio.Http.HttpClient HttpClient => _innerClient.HttpClient;

}

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NullStress.Data;

using System;
using System.Linq;
using Twilio;
using Twilio.Clients;
using Twilio.Rest.Api.V2010.Account;

namespace NullStress
{
    public class Program
    {


        public static void Main(string[] args)
        {
            ////https://code-maze.com/send-sms-aspnetcore/

            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<NullStressContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("NullStressContext") ?? throw new InvalidOperationException("Connection string 'NullStressContext' not found.")));

            // Add services to the container.
            builder.Services.AddHttpClient<ITwilioRestClient, TwilioClient>();


            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseCors(c =>
            {
                c
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin();
            });

            app.MapControllers();

            app.Run();



        }
    }
}
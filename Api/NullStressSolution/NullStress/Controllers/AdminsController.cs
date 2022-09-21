using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NullStress.Data;
using NullStress.Models;

namespace NullStress.Controllers
{
    [Route("api/admins/")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly NullStressContext _context;

        public AdminsController(NullStressContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        {
            if (_context.Admin == null)
            {
                return NotFound();
            }
            return await _context.Admin.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin(int id)
        {
            if (_context.Admin == null)
            {
                return NotFound();
            }
            
            var admin = await _context.Admin
                .Include(a => a.SchoolClasses)
                .Select(x => new
                {
                    x.Id,
                    x.Name,
                    x.School,
                    SchoolClasses = x.SchoolClasses.Select(y => new
                    {
                        y.Id,
                        y.SchoolClassName
                    })
                })
                .SingleAsync(a => a.Id == id);

            if (admin == null)
            {
                return NotFound();
            }

            return Ok(admin);
        }

        [HttpPut("{id}/SchoolClass/{schoolClassName}")]
        public async Task<IActionResult> PutStudent(int id, string schoolClassName)
        {
            var Admin = await _context.FindAsync<Admin>(id);

            var schoolClass = new SchoolClass
            {
                SchoolClassName = schoolClassName
            };

            Admin.SchoolClasses.Add(schoolClass);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
                    {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(new
            {
                Id = schoolClass.Id,
                schoolClassName = schoolClass.SchoolClassName
            });
        }


        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin(Admin admin)
        {
            if (_context.Admin == null)
            {
                return Problem("Entity set 'NullStressContext.Admin'  is null.");
            }


            Admin adminCreated = new()
            {
                Name = admin.Name,
                School = admin.School,
                ClassName = admin.ClassName
            };

            if (!String.IsNullOrEmpty(admin.ClassName))
            {
                SchoolClass schoolclass = new();
                adminCreated.SchoolClasses = new();
                schoolclass.SchoolClassName = admin.ClassName;
                adminCreated.SchoolClasses.Add(schoolclass);
            }




            _context.Admin.Add(adminCreated);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdmin", new { id = adminCreated.Id }, adminCreated);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            if (_context.Admin == null)
            {
                return NotFound();
            }
            var admin = await _context.Admin.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            _context.Admin.Remove(admin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AdminExists(int id)
        {
            return (_context.Admin?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

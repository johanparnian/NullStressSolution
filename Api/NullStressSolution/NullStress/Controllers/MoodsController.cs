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
    [Route("api/[controller]")]
    [ApiController]
    public class MoodsController : ControllerBase
    {
        private readonly NullStressContext _context;

        public MoodsController(NullStressContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mood>>> GetMood()
        {
          if (_context.Mood == null)
          {
              return NotFound();
          }
            return await _context.Mood.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Mood>> GetMood(int id)
        {
          if (_context.Mood == null)
          {
              return NotFound();
          }
            var mood = await _context.Mood.FindAsync(id);

            if (mood == null)
            {
                return NotFound();
            }

            return mood;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMood(int id, Mood mood)
        {
            if (id != mood.Id)
            {
                return BadRequest();
            }

            

            _context.Entry(mood).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MoodExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Mood>> PostMood(Mood mood)
        {
          if (_context.Mood == null)
          {
              return Problem("Entity set 'NullStressContext.Mood'  is null.");
          }
            _context.Mood.Add(mood);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMood", new { id = mood.Id }, mood);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMood(int id)
        {
            if (_context.Mood == null)
            {
                return NotFound();
            }
            var mood = await _context.Mood.FindAsync(id);
            if (mood == null)
            {
                return NotFound();
            }

            _context.Mood.Remove(mood);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MoodExists(int id)
        {
            return (_context.Mood?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

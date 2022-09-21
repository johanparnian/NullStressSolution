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
    public class StudentsController : ControllerBase
    {
        private readonly NullStressContext _context;

        public StudentsController(NullStressContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            if (_context.Mood == null)
            {
                return NotFound();
            }
            return await _context.Student.ToListAsync();
        }
        //[HttpGet]
        //public async Task<IActionResult> GetStudentMood()
        //{
        //    if (_context.Student == null)
        //    {
        //        return NotFound();
        //    }
        //    //return await _context.Student.ToListAsync();

        //    var stuff = await
        //        (from s in _context.Student
        //         join m in _context.Mood on s.Id equals m.StudentId into gj
        //         from m in gj.DefaultIfEmpty()
        //         select new
        //         {
        //             Student = s,
        //             Mood = m
        //         }).ToListAsync();

        //    var response = stuff.ToLookup(x => x.Student).Select(x => new
        //    {
        //        StudentId = x.Key.Id,
        //        Moods = x.Where(y => y.Mood != null).Select(y => y.Mood.Muud)
        //    });

        //    return Ok(response);
        //}



        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudent(Guid id)
        {
            if (_context.Student == null)
            {
                return NotFound();
            }

            var student = await _context.Student
                .Include(a => a.Moods)
                .Select(x => new
                {
                    x.Id,
                    x.Name,
                    x.ImageUrl,
                    Moods = x.Moods.Select(y => new
                    {
                        y.Id,
                        y.Muud,
                        y.Time
                    })
                })
                .SingleAsync(a => a.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // Johan kommenterte den ut for å se om vi trenger den
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Student>> GetStudent(int id)
        //{
        //  if (_context.Student == null)
        //  {
        //      return NotFound();
        //  }
        //    var student = await _context.Student.FindAsync(id);

        //    if (student == null)
        //    {
        //        return NotFound();
        //    }

        //    return student;
    //}


        [HttpPut("{id}/mood/{moodId}")]
        public async Task<IActionResult> PutStudent(Guid id, int moodId)
        {
            var student = await _context.FindAsync<Student>(id);
                         
            student.Moods.Add(new Mood
            {
                Muud = moodId
            });

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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

        [HttpPut("{id}")]
        public async Task<IActionResult> PuStudent(Guid id, Student student)
        {
            Student updatedStudent = await _context.FindAsync<Student>(id);

            updatedStudent.Name = student.Name;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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
        
        [HttpPut("false/{id}")]
        public async Task<IActionResult> RevertAlert(Guid id)
        {
            Student updatedStudent = await _context.FindAsync<Student>(id);

            updatedStudent.ImageUrl = "/bell_black.png";

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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

        //FLAGS STUDENT FOR WANTING HELP.
        [HttpGet("{id}/wantshelp")]
        public async Task<ActionResult<Student>> GetStudentWantForHelp(Guid id)
        {
            if (_context.Student == null)
            {
                return NotFound();
            }

            Student updatedStudent = await _context.FindAsync<Student>(id);

            updatedStudent.ImageUrl = "/bell_red.png";

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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
        
        //[HttpGet("imagerevert/{id}")]
        //public async Task<ActionResult<Student>> ImageRevert(Guid id)
        //{
        //    if (_context.Student == null)
        //    {
        //        return NotFound();
        //    }

        //    Student updatedStudent = await _context.FindAsync<Student>(id);

        //    updatedStudent.ImageUrl = "/bell_black.png";

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!StudentExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}


        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
          if (_context.Student == null)
          {
              return Problem("Entity set 'NullStressContext.Student'  is null.");
          }
            //student.Id = Guid.NewGuid();

            _context.Student.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudent", new { id = student.Id }, student);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(Guid id)
        {
            if (_context.Student == null)
            {
                return NotFound();  
            }
            var student = await _context.Student.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Student.Remove(student);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentExists(Guid id)
        {
            return (_context.Student?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NullStress.Models;

namespace NullStress.Data
{
    public class NullStressContext : DbContext
    {
        public NullStressContext (DbContextOptions<NullStressContext> options)
            : base(options)
        {
        }

        public DbSet<NullStress.Models.Admin> Admin { get; set; } = default!;

        public DbSet<NullStress.Models.Student>? Student { get; set; }

        public DbSet<NullStress.Models.Mood>? Mood { get; set; }

        public DbSet<NullStress.Models.SchoolClass>? SchoolClass { get; set; }
    }
}

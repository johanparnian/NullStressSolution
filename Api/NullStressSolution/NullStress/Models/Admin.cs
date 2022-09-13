using System.Text.Json.Serialization;

namespace NullStress.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string School{ get; set; }
        public string? ClassName{ get; set; }
        
        public List<SchoolClass>? SchoolClasses { get; set; }

    }
}

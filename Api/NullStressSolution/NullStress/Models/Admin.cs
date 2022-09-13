using System.Text.Json.Serialization;

namespace NullStress.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string School{ get; set; }

        public virtual ICollection<SchoolClass>? SchoolClasses { get; set; }

    }
}

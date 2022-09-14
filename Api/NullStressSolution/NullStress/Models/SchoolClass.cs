namespace NullStress.Models
{
    public class SchoolClass
    {
        public int Id { get; set; }
        public string SchoolClassName { get; set; }

        public List<Admin>? Admins { get; set; } = new();
        public List<Student>? Students { get; set; } = new();
    }
}
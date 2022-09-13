namespace NullStress.Models
{
    public class SchoolClass
    {
        public int Id { get; set; }
        public string ClassName { get; set; }

        public List<Admin>? Admins { get; set; }
        public List<Student>? Students { get; set; }

    }
}

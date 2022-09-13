namespace NullStress.Models
{
    public class SchoolClass
    {
        public int Id { get; set; }
        public string ClassName { get; set; }

        public virtual ICollection<Admin>? Admins { get; set; }
        public virtual ICollection<Student>? Students { get; set; }

    }
}

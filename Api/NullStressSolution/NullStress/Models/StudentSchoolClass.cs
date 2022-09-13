namespace NullStress.Models
{
    public class StudentSchoolClass
    {
        public int Id { get; set; }

        public int StudentId { get; set; }
        public string Student { get; set; }

        public int SchoolClassId { get; set; }
        public string SchoolClass { get; set; }
    }
}

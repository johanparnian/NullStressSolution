namespace NullStress.Models
{
    public class SchoolClass
    {
        public int Id { get; set; }
        public string ClassName { get; set; }
        
        public virtual ICollection<AdminClass> AdminClass { get; set; }
        public virtual ICollection<StudentSchoolClass> StudentSchoolClass { get; set; }



    }
}

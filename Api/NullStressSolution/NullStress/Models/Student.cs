namespace NullStress.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Mood>? Moods { get; set; }
        public List<SchoolClass>? SchoolClasses { get; set; }
    }
}
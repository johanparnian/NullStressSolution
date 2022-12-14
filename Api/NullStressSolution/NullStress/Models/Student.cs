namespace NullStress.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string? ClassName { get; set; }
        public int? TemporaryMood { get; set; }

        public List<Mood>? Moods { get; set; } = new();
        public List<SchoolClass>? SchoolClasses { get; set; } = new();
    }
}
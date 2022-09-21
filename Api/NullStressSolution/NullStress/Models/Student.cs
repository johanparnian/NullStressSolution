namespace NullStress.Models
{
    public class Student
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public string ImageUrl { get; set; } = "/bell_black.png";

        //Hvordan si at denne ikke kan være null, uten warning?
        public string PhoneNumber { get; set; } = "";
        public string Link { get; set; } = "";

        public bool Needshelp { get; set; } = false;

        public List<Mood>? Moods { get; set; } = new();
        public List<SchoolClass>? SchoolClasses { get; set; } = new();
    }
}
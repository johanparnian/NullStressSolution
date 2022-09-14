namespace NullStress.Models
{
    public class Mood
    {
        public int Id { get; set; }
        public int? Muud { get; set; } 
        public DateTime Time { get; set; } = DateTime.Now;

        public Student Student { get; set; }
    }
}

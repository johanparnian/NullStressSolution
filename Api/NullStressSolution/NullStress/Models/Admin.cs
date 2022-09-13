namespace NullStress.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string School { get; set; }

        public virtual ICollection<AdminClass> AdminClass { get; set; }

    }
}

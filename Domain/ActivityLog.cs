
namespace Domain
{
    public class ActivityLog
    {
        public int Id { get; set; }
        public string? LogType { get; set; }
        public DateTime SrvTime { get; set; }
        public DateTime UsrTime { get; set; }
        public string? UserId { get; set; }
        public string? Note { get; set; }
    }
}
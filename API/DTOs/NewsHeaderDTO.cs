namespace API.DTOs
{
    public class NewsHeaderDTO
    {
        public int Id { get; set; }
        public string NewsTitle { get; set; }
        public string NewsDesc { get; set; }
        public DateTime? NewsDate { get; set; }
        public string NewsUser { get; set; }
        public Boolean Approved { get; set; }
        public Boolean IsFinished { get; set; }
        public ICollection<NewsContentDTO> NewsContentsDTO { get; set; }
    }
}
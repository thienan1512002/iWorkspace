namespace API.DTOs
{
    public class NewsContentDTO
    {
        public int Id { get; set; }
        public int NewsId { get; set; }
        public int Sequence { get; set; }
        public string Content { get; set; }
        public string ContentType { get; set; }
        public string ContentUser { get; set; }
        public DateTime ContentDate { get; set; }
        public IFormFile ImageFiles { get; set; }
        public String ImageSrc { get; set; }
    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
namespace Domain
{
    public class NewsContent
    {

        public int Id { get; set; }
        [ForeignKey("NewsHeader")]
        public int NewsId { get; set; }
        public int Sequence { get; set; }

        public string Content { get; set; }

        public string ContentType { get; set; }

        public string ContentUser { get; set; }

        public NewsHeader News { get; set; }
        public DateTime ContentDate { get; set; }


    }
}
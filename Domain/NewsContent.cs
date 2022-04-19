using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
namespace Domain
{
    public partial class NewsContent
    {

        public int Id { get; set; }
        [ForeignKey("NewsHeader")]
        public int NewsHeaderId { get; set; }
        public int Sequence { get; set; }

        public string Content { get; set; }

        public string ContentType { get; set; }

        public string ContentUser { get; set; }

        //public virtual NewsHeader News { get; set; }
        public DateTime ContentDate { get; set; }


    }
}
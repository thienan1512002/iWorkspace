using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class NewsHeader
    {

        [Key]
        public int Id { get; set; }

        public string NewsTitle { get; set; }

        public string NewsDesc { get; set; }


        public DateTime NewsDate { get; set; }

        public string NewsUser { get; set; }

        public Boolean Approved { get; set; }
        public Boolean IsFinished { get; set; }
        public int Priority { get; set; }
        public ICollection<NewsContent> NewsContents { get; set; }

    }
}
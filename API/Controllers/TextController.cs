using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class TextController : ControllerBase
    {
        private readonly DataContext _context;
        public TextController(DataContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<NewsContent>> PostTextContent(NewsContent newsContent)
        {
            newsContent.ContentDate = DateTime.Now;
            newsContent.ContentType = "txt";
            newsContent.Sequence = _context.NewsContents.Count(m => m.NewsHeaderId == newsContent.NewsHeaderId);
            _context.NewsContents.Add(newsContent);
            await _context.SaveChangesAsync();
            return Ok(newsContent);
        }
    }
}
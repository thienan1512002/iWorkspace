using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistence;
using API.DTOs;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsContentsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public NewsContentsController(DataContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        // GET: api/NewsContents
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<NewsContent>>> GetNewsContents(int id)
        {
            return await _context.NewsContents.Where(m => m.NewsId == id).ToListAsync();
        }



        // PUT: api/NewsContents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewsContent(int id, [FromForm] NewsContent newsContent)
        {

            if (id != newsContent.Id)
            {
                return BadRequest();
            }
            //newsContent.Content = await SaveImage(newsContent.ImageFile);
            newsContent.NewsId = 1;
            newsContent.ContentDate = DateTime.Now;
            newsContent.ContentType = "img";
            newsContent.Sequence = 1;
            _context.NewsContents.Add(newsContent);
            await _context.SaveChangesAsync();
            _context.Entry(newsContent).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewsContentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPut("DnD/{id}")]
        public async Task<IActionResult> DnDUpdate(int id, NewsContent content)
        {
            if (id == 0)
            {
                return BadRequest();
            }

            var model = await _context.NewsContents.FirstOrDefaultAsync(m => m.Id == id);
            if (model == null)
            {
                return NotFound();
            }
            model.Sequence = content.Sequence;
            _context.NewsContents.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        // POST: api/NewsContents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("/img")]
        public async Task<ActionResult<NewsContentDTO>> PostImgContent([FromForm] NewsContentDTO newsContentDTO)
        {
            NewsContent newsContent = new NewsContent();
            newsContent.NewsId = newsContentDTO.NewsId;
            newsContent.Content = await SaveImage(newsContentDTO.ImageFiles);
            newsContent.Sequence = _context.NewsContents.Count(m => m.NewsId == newsContent.NewsId);
            newsContent.ContentDate = DateTime.Now;
            newsContent.ContentType = "img";
            newsContent.ContentUser = newsContentDTO.ContentUser;
            _context.NewsContents.Add(newsContent);
            await _context.SaveChangesAsync();
            return Ok(newsContent);
        }
        [HttpPost("/text")]
        public async Task<ActionResult<NewsContentDTO>> PostTextContent(NewsContentDTO newsContentDTO)
        {
            NewsContent newsContent = new NewsContent();
            newsContent.NewsId = newsContentDTO.NewsId;
            newsContent.Content = newsContentDTO.Content;
            newsContent.Sequence = _context.NewsContents.Count(m => m.NewsId == newsContent.NewsId);
            newsContent.ContentDate = DateTime.Now;
            newsContent.ContentUser = newsContentDTO.ContentUser;
            _context.NewsContents.Add(newsContent);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetNewsContent", new { id = newsContent.Id }, newsContent);
        }
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
        // DELETE: api/NewsContents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewsContent(int id)
        {
            var newsContent = await _context.NewsContents.FindAsync(id);
            if (newsContent == null)
            {
                return NotFound();
            }

            _context.NewsContents.Remove(newsContent);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private bool NewsContentExists(int id)
        {
            return _context.NewsContents.Any(e => e.Id == id);
        }
    }
}
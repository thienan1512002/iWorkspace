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
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsHeadersController : ControllerBase
    {
        private readonly DataContext _context;

        public NewsHeadersController(DataContext context)
        {
            _context = context;
        }

        // GET: api/NewsHeaders
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewsHeader>>> GetNewsHeaders()
        {
            return await _context.NewsHeaders.ToListAsync();
        }

        // GET: api/NewsHeaders/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<NewsHeader>> GetNewsHeader(int id)
        {
            var newsHeader = await _context.NewsHeaders.FindAsync(id);

            if (newsHeader == null)
            {
                return NotFound();
            }

            return newsHeader;
        }

        [Authorize]
        [HttpPut("toggled-finished/{id}")]
        public async Task<IActionResult> PutNewsHeader(int id)
        {
            var newsHeader = await _context.NewsHeaders.FindAsync(id);
            if (id != newsHeader.Id)
            {
                return BadRequest();
            }
            newsHeader.IsFinished = !newsHeader.IsFinished;
            newsHeader.NewsDate = DateTime.Now;
            _context.Entry(newsHeader).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewsHeaderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(newsHeader);
        }
        [Authorize]
        [HttpPut("toggle-approved/{id}")]
        public async Task<IActionResult> Approved(int id)
        {
            var newsHeader = await _context.NewsHeaders.FindAsync(id);
            if (id != newsHeader.Id)
            {
                return BadRequest();
            }
            newsHeader.Approved = !newsHeader.Approved;
            newsHeader.NewsDate = DateTime.Now;
            _context.Entry(newsHeader).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewsHeaderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(newsHeader);
        }


        [Authorize]
        [HttpPost]
        public async Task<ActionResult<NewsHeader>> PostNewsHeader([FromBody] NewsHeaderDTO newsHeaderDTO)
        {
            NewsHeader newsHeader = new NewsHeader();
            newsHeader.NewsDate = DateTime.Now;
            newsHeader.Approved = false;
            newsHeader.IsFinished = false;
            newsHeader.NewsTitle = newsHeaderDTO.NewsTitle;
            newsHeader.NewsDesc = newsHeaderDTO.NewsDesc;
            newsHeader.NewsUser = newsHeaderDTO.NewsUser;
            newsHeader.Priority = newsHeaderDTO.Priority;
            _context.NewsHeaders.Add(newsHeader);
            await _context.SaveChangesAsync();

            return Ok(newsHeader);
        }




        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewsHeader(int id)
        {
            var newsHeader = await _context.NewsHeaders.FindAsync(id);
            if (newsHeader == null)
            {
                return NotFound();
            }

            _context.NewsHeaders.Remove(newsHeader);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewsHeaderExists(int id)
        {
            return _context.NewsHeaders.Any(e => e.Id == id);
        }
    }
}

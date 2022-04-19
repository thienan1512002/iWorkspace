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
    public class NewsController : ControllerBase
    {
        private readonly DataContext _context;
        public NewsController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<NewsHeader>> GetNews()
        {
            var data = from h in _context.NewsHeaders
                       select new NewsHeader
                       {
                           Id = h.Id,
                           NewsTitle = h.NewsTitle,
                           NewsDesc = h.NewsDesc,
                           NewsDate = h.NewsDate,
                           Approved = h.Approved,
                           NewsUser = h.NewsUser,
                           NewsContents = _context.NewsContents.Where(m => m.NewsHeaderId == h.Id).ToList()
                       };
            return await data.ToListAsync();
        }
        [Authorize]
        [HttpGet("{id}")]
        public IQueryable<NewsHeader> GetNewsDetails(int id)
        {
            var data = from h in _context.NewsHeaders
                       where h.Id == id
                       select new NewsHeader
                       {
                           Id = h.Id,
                           NewsTitle = h.NewsTitle,
                           NewsDesc = h.NewsDesc,
                           NewsDate = h.NewsDate,
                           Approved = h.Approved,
                           NewsUser = h.NewsUser,
                           NewsContents = _context.NewsContents.Where(m => m.NewsHeaderId == h.Id).ToList()
                       };
            return data;
        }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cs451_commerce_bank_project.Controllers.Concerns;
using cs451_commerce_bank_project.Models;

namespace cs451_commerce_bank_project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RulesController : Controller
    {
        private readonly AppDbContext db;

        public RulesController(AppDbContext dbContext)
        {
            db = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<IEnumerable<NotificationRule>> Index(int id)
        {
            var data = await db.NotificationRules.ToListAsync();
            return data.Where(item => item.UserId == id);
        }

        /**
        * Add a new notification rule.
        *
        * @param {json} rule - JSON object with data for new rule.
        * @return {json} new rule data
        */
        [HttpPost]
        public async Task<NotificationRule> Create([FromBody] NotificationRule rule)
        {
            db.NotificationRules.Add(rule);
            await db.SaveChangesAsync();

            return rule;
        }
    }
}

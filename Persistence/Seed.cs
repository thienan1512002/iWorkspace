using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (userManager.Users.FirstOrDefault(x=>x.UserName == "vnlh") == null)
            {
                var newAppUser = new AppUser
                {
                    DisplayName = "Le Hieu",
                    UserName = "vnlh",
                    Email = "le.thanh.hieu@netmarks.com.vn"
                };

                await userManager.CreateAsync(newAppUser, "Pa$$w0rd");

            }

            if (userManager.Users.FirstOrDefault(x=>x.UserName == "annht") == null)
            {
               
                var newAppUser1 = new AppUser
                {
                    DisplayName = "Thien An",
                    UserName = "annht",
                    Email = "nguyen.hoang.thien.an@netmarks.com.vn"
                };

                await userManager.CreateAsync(newAppUser1, "Pa$$w0rd");
            }
        }
    }
}
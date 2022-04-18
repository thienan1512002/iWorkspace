
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ActivityLog> ActivityLogs { get; set; }
        public DbSet<NewsHeader> NewsHeaders { get; set; }
        public DbSet<NewsContent> NewsContents { get; set; }

       /* protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<NewsHeader>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("PK_NewsHeaders");
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NewsDate).HasColumnType("datetime");

                entity.Property(e => e.NewsDesc).HasColumnType("nvarchar").HasMaxLength(3000);
                entity.Property(e => e.NewsUser).HasColumnType("nvarchar").HasMaxLength(300);

                entity.Property(e => e.NewsTitle).HasColumnType("nvarchar").HasMaxLength(3000);

                entity.Property(e => e.Approved).HasColumnType("bit").HasColumnName("Approved");
                entity.Property(e => e.IsFinished).HasColumnType("bit").HasColumnName("isFinished");
            });

            builder.Entity<NewsContent>(entity =>
            {
                entity.HasKey(e => e.Id)
                     .HasName("PK_NewsContents");

                entity.ToTable("NewsContent");

                entity.Property(e => e.Id).HasColumnName("contentId");

                entity.Property(e => e.Content).HasColumnType("nvarchar").HasMaxLength(3000).HasColumnName("content");

                entity.Property(e => e.ContentDate)
                    .HasColumnType("datetime")
                    .HasColumnName("contentDate");

                entity.Property(e => e.ContentType)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("contentType");

                entity.Property(e => e.ContentUser)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("contentUser");

                entity.Property(e => e.NewsId).HasColumnName("newsId");

                entity.HasOne(d => d.News)
                    .WithMany(p => p.NewsContents)
                    .HasForeignKey(d => d.NewsId)
                    .HasConstraintName("FK_NewsContent_NewsHeader");
            });


        }*/
    }
}
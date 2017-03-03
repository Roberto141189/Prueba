using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using Transportadora.Models;

namespace Transportadora.DALL
{
    public class DBappWebMexicaERPcontext : DbContext
    {
        public DBappWebMexicaERPcontext() : base(nameOrConnectionString: "DBappWebMexicaERPcontext") { }
        public DbSet<TVenta> Ventas { get; set; }
        public DbSet<TTour> Tours { get; set; }
        public DbSet<TFormaPago> FormaPagos { get; set; }
        public DbSet<TPaquete> Paquetes { get; set; }
        public DbSet<TPaqueteDetalle> PaqueteDetalles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}
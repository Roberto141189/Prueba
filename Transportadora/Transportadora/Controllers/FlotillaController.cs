using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Transportadora.DALL;

namespace Transportadora.Controllers
{
    public class FlotillaController : Controller
    {
         [HttpGet]
        public ActionResult Insertar()
        {
            DBappWebMexicaERPcontext DbContext = new DBappWebMexicaERPcontext();
            return View();
        }

        [HttpPost]
        public ActionResult Insertar(FormCollection formCollection)//recolectar toda la informacion que hay dentro del formulario
        {
            DBappWebMexicaERPcontext DbContext = new DBappWebMexicaERPcontext();

            //T Banco = new TBanco();
            return View();
        }
    }
}
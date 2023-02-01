using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using POS.Application.Service.User;

namespace POS.Application.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors("AllowCors")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        IProductService _product;
        public ProductController(IProductService product)
        {
            _product= product;
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            return _product.GetAll().ToString();
        }


        [HttpPut]
        public ActionResult<string> Edit(string json)
        {
            return _product.Update(json);
        }

        [HttpPost]
        public ActionResult<string> Add(string json)
        {
            return _product.Add(json);
        }

        [HttpDelete]
        public ActionResult<string> Delete(string json)
        {
            return _product.Remove(json);
        }
    }
}

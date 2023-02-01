using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using POS.Application.Service.Customer;

namespace POS.Application.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors("AllowCors")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomerService _customer;
        public CustomerController(ICustomerService customer)
        {
            _customer = customer;
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            return _customer.GetAll().ToString();
        }


        [HttpPut]
        public ActionResult<string> Edit(string json)
        {
            return _customer.Update(json);
        }

        [HttpPost]
        public ActionResult<string> Add(string json) 
        { 
            return _customer.Add(json); 
        }

        [HttpDelete]
        public ActionResult<string> Delete(string json) 
        { 
            return _customer.Remove(json); 
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POS.Application.Service.User
{
    public interface IProductService
    {
        string GetAll();
        string Add(string json);
        string Update(string json);
        string Remove(string json);
    }
}

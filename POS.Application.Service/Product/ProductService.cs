using POS.Application.LLBL.SqlServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POS.Application.Service.User
{
    public class ProductService : IProductService
    {
        public string Add(string json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;
                ActionProcedures.SpProductIns(ref param, adapter);
                adapter.CloseConnection();
                return param;
            }
        }

        public string GetAll()
        {
            return DataAccessHelper.FetchDerivedModel<dynamic>(RetrievalProcedures.GetSpProductSelCallAsQuery()).FirstOrDefault();
        }

        public string Remove(string json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;
                ActionProcedures.SpProductDel(ref param, adapter);
                adapter.CloseConnection();
                return param;
            }
        }

        public string Update(string json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;
                ActionProcedures.SpProductUpd(ref param, adapter);
                adapter.CloseConnection();
                return param;
            }
        }
    }
}

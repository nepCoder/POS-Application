using POS.Application.LLBL.SqlServer;

namespace POS.Application.Service.Customer
{
    public class CustomerService : ICustomerService
    {


        public string GetAll()
        {
            return DataAccessHelper.FetchDerivedModel<dynamic>(RetrievalProcedures.GetSpCustomerSelCallAsQuery()).FirstOrDefault();
        }


        public string Add(string json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;
                ActionProcedures.SpCustomerIns(ref param, adapter);
                adapter.CloseConnection();
                return param;
            }
        }


        public string Remove(string json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;
                ActionProcedures.SpCustomerDel(ref param, adapter);
                adapter.CloseConnection();
                return param;
            }
        }

        public string Update(string json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;
                ActionProcedures.SpCustomerUpd(ref param, adapter);
                adapter.CloseConnection();
                return param;
            }
        }
    }
}

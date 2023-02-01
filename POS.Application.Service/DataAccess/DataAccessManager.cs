
using POS.Application.LLBL.SqlServer;

namespace POS.Application.Service
{
    public class DataAccessManager : DataAccessAdapter
    {

        public DataAccessManager() : base()
        {
        }

        public DataAccessManager(bool keepConnectionOpen) : base(true)
        {
        }
    }
}

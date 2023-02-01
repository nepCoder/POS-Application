using SD.LLBLGen.Pro.ORMSupportClasses;

namespace POS.Application.Service
{
    public interface IDataAccessHelper
    {
        
        List<T> FetchDerivedModel<T>(IRetrievalQuery qry);
        DataAccessManager GetAdapter();
    }
}